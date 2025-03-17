"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["NotFound"] = 0] = "NotFound";
    ErrorType[ErrorType["ValidationError"] = 1] = "ValidationError";
    ErrorType[ErrorType["DatabaseError"] = 2] = "DatabaseError";
    ErrorType[ErrorType["DataConflict"] = 3] = "DataConflict";
    // Errores de autenticación y autorización
    ErrorType[ErrorType["AuthenticationError"] = 4] = "AuthenticationError";
    ErrorType[ErrorType["AuthorizationError"] = 5] = "AuthorizationError";
    ErrorType[ErrorType["TokenExpired"] = 6] = "TokenExpired";
    ErrorType[ErrorType["TokenInvalid"] = 7] = "TokenInvalid";
    // Errores de operación y ejecución
    ErrorType[ErrorType["OperationFailed"] = 8] = "OperationFailed";
    ErrorType[ErrorType["TimeoutError"] = 9] = "TimeoutError";
    // Errores de recursos y servicios externos
    ErrorType[ErrorType["ExternalServiceError"] = 10] = "ExternalServiceError";
    ErrorType[ErrorType["RateLimitExceeded"] = 11] = "RateLimitExceeded";
    ErrorType[ErrorType["ResourceUnavailable"] = 12] = "ResourceUnavailable";
    // Errores de configuración y sistema
    ErrorType[ErrorType["ConfigurationError"] = 13] = "ConfigurationError";
    ErrorType[ErrorType["SystemError"] = 14] = "SystemError";
    ErrorType[ErrorType["InternalServerError"] = 15] = "InternalServerError";
    // Errores de negocio y lógica
    ErrorType[ErrorType["BusinessRuleError"] = 16] = "BusinessRuleError";
    ErrorType[ErrorType["PreconditionFailed"] = 17] = "PreconditionFailed";
    // Otros errores
    ErrorType[ErrorType["BadRequest"] = 18] = "BadRequest";
    ErrorType[ErrorType["UnsupportedAction"] = 19] = "UnsupportedAction";
    ErrorType[ErrorType["TooManyRequests"] = 20] = "TooManyRequests";
})(ErrorType || (ErrorType = {}));
class CustomError extends Error {
    constructor(type, status, message) {
        super(message);
        this.name = this.constructor.name;
        this.type = type;
        this.status = status;
    }
    static NotFound(message = "Resource not found") {
        return new CustomError(ErrorType.NotFound, 404, message);
    }
    static ValidationError(message = "Validation failed") {
        return new CustomError(ErrorType.ValidationError, 400, message);
    }
    static DatabaseError(message = "Database error occurred") {
        return new CustomError(ErrorType.DatabaseError, 500, message);
    }
    static DataConflict(message = "Data conflict occurred") {
        return new CustomError(ErrorType.DataConflict, 409, message);
    }
    static AuthenticationError(message = "Authentication failed") {
        return new CustomError(ErrorType.AuthenticationError, 401, message);
    }
    static AuthorizationError(message = "Unauthorized action") {
        return new CustomError(ErrorType.AuthorizationError, 403, message);
    }
    static TokenExpired(message = "Token has expired") {
        return new CustomError(ErrorType.TokenExpired, 401, message);
    }
    static TokenInvalid(message = "Token is invalid or altered") {
        return new CustomError(ErrorType.TokenInvalid, 401, message);
    }
    static OperationFailed(message = "Operation failed") {
        return new CustomError(ErrorType.OperationFailed, 500, message);
    }
    static TimeoutError(message = "Operation timeout") {
        return new CustomError(ErrorType.TimeoutError, 408, message);
    }
    static ExternalServiceError(message = "External service error") {
        return new CustomError(ErrorType.ExternalServiceError, 503, message);
    }
    static RateLimitExceeded(message = "Rate limit exceeded") {
        return new CustomError(ErrorType.RateLimitExceeded, 429, message);
    }
    static ResourceUnavailable(message = "Resource unavailable") {
        return new CustomError(ErrorType.ResourceUnavailable, 503, message);
    }
    static ConfigurationError(message = "Configuration error") {
        return new CustomError(ErrorType.ConfigurationError, 500, message);
    }
    static SystemError(message = "System error") {
        return new CustomError(ErrorType.SystemError, 500, message);
    }
    static InternalServerError(message = "Internal server error") {
        return new CustomError(ErrorType.InternalServerError, 500, message);
    }
    static BusinessRuleError(message = "Business rule violation") {
        return new CustomError(ErrorType.BusinessRuleError, 400, message);
    }
    static PreconditionFailed(message = "Precondition failed") {
        return new CustomError(ErrorType.PreconditionFailed, 412, message);
    }
    static BadRequest(message = "Bad request") {
        return new CustomError(ErrorType.BadRequest, 400, message);
    }
    static UnsupportedAction(message = "Unsupported action") {
        return new CustomError(ErrorType.UnsupportedAction, 400, message);
    }
    static TooManyRequests(message = "Too many requests") {
        return new CustomError(ErrorType.TooManyRequests, 429, message);
    }
}
exports.default = CustomError;
