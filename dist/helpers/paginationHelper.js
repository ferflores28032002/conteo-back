"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
exports.getPaginationOptions = getPaginationOptions;
function paginate(items, options = { page: 1, limit: 10 }) {
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
function getPaginationOptions(req) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    return { page, limit };
}
