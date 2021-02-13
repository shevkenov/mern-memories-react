import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: mongoose.SchemaTypes.String,
    message: mongoose.SchemaTypes.String,
    creator: mongoose.SchemaTypes.String,
    tags: [mongoose.SchemaTypes.String],
    selectedFiles: mongoose.SchemaTypes.String,
    likeCount: {
        type: mongoose.SchemaTypes.Number,
        default: 0,
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;