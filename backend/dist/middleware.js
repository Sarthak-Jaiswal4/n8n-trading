import jwt, {} from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
export async function middleware(req, res, next) {
    const header = req.headers.authorization;
    try {
        const decoded = jwt.verify(header, JWT_SECRET);
        req.userID = decoded.id;
        next();
    }
    catch (error) {
        res.status(403).json({ message: "you are not logged in" });
    }
}
//# sourceMappingURL=middleware.js.map