import { Request } from "express";

export interface PaginationOptions {
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export function paginate<T>(items: T[],options: PaginationOptions = { page: 1, limit: 10 }): PaginatedResult<T> {
  const { page = 1, limit = 10 } = options;

  const total = items.length;
  const offset = (page - 1) * limit;
  const paginatedItems = items.slice(offset, offset + limit);

  return {
    data: paginatedItems,
    total,
    page,
    limit,
  };
}

// This function will be used to get the pagination options from the request query

export function getPaginationOptions(req: Request): PaginationOptions {
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 10;

  return { page, limit };
}
