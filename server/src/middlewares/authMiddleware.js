import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).send('A token is required for authentication');
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
    } catch (err) {
        console.error('Token verification error:', err); 
        return res.status(401).send('Invalid Token');
    }

    return next(); 
};

export default verifyToken;