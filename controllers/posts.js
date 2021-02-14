import mongoose from 'mongoose';
import path from 'path';

import PostMessages from '../models/postMessages.js';

export const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessages.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

export const getPost = async(req, res) => {
    const {id} = req.params;
    
    try {
        const postMessage = await PostMessages.findById(id);

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

export const createPost = async(req, res) => {
    const {title, message, creator, tags, selectedFiles} = req.body;

    const newPostMessage = new PostMessages({
        title, message, creator, tags, selectedFiles
    });
    try {
        await newPostMessage.save();

        res.status(200).json(newPostMessage);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

export const updatePost = async(req, res) => {
    const {id} = req.params;
    const {title, message, creator, tags, selectedFiles} = req.body;
    const post = {title, message, creator, tags, selectedFiles}

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: "no valid id"});

        const postMessage = await PostMessages.findById(id);
        if(!postMessage) return res.status(400).json({message: "id not found"});

        const updatedPost = await PostMessages.findByIdAndUpdate(id, post,  {new: true})
        
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        
        const postMessage = await PostMessages.findById(id);
        if(!postMessage) return res.status(400).json({message: `${id} not found`});

        await PostMessages.findByIdAndRemove(id);

        res.status(200).json({message: "Post removed succesfully!"});
    } catch (error) {
        res.status(400).json({message: error})
    }
};

export const likedPost = async (req, res) => {
    const { id } = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: "no valid id"});

        const postMessage = await PostMessages.findById(id);
        if(!postMessage) return res.status(400).json({message: "id not found"});

        const updatedPost = await PostMessages.findByIdAndUpdate(id, {likeCount: postMessage.likeCount + 1}, {new: true});
    
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({message: error})
    }
}