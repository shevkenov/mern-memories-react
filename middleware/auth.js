import jwt from 'jsonwebtoken';

const secret = 'something very secret';

export default async(req, res, next) => {
    try {
        
        const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
        const isCustomAuth = token.leght < 500;

        let decodedData;
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, secret);
            req.userId = decodedData?.id;
        }else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }


        next();
    } catch (error) {
        console.log(error);
    }
}