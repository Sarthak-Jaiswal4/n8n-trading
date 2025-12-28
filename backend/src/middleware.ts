import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET=process.env.JWT_SECRET!
export async function middleware(req:Request,res:Response,next:NextFunction){
    const header=req.headers.authorization as string

    try {
        const decoded=jwt.verify(header,JWT_SECRET) as JwtPayload
    
        req.userID=decoded.id
        next()
    } catch (error) {
        res.status(403).json({message:"you are not logged in"})
    }
}