import type { Response } from 'express';

export function successResponse(res: Response, data: any, message="Success",statusCode = 200) {
    return res.status(statusCode).json({ success:true, message,data });
}

export function errorResponse(res: Response, error="Internal Server Error", statusCode = 500) {
    return res.status(statusCode).json({ success:false, error });
}