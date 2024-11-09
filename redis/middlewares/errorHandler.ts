import type { Response, Request, NextFunction } from "express";
import { errorResponse } from "../utils/responses";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  errorResponse(res, err.message);
}