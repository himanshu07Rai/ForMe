import type { Response, Request, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate = <T>(schema: ZodSchema<T>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
        } catch (err) {
            return res.status(400).json({success: false, errors: err.errors});
        }
        next();
    };
    }