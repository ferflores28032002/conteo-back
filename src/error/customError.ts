enum ErrorType {
  NotFound, // Recurso no encontrado
  ValidationError, // La entrada no cumple con ciertos criterios
  DatabaseError, // Problemas relacionados con la base de datos
  DataConflict, // Por ejemplo, intentar crear un recurso que ya existe

  // Errores de autenticación y autorización
  AuthenticationError, // Falla al autenticar, como credenciales incorrectas
  AuthorizationError, // Autenticado pero sin permisos para realizar la acción
  TokenExpired, // Token de autenticación ha expirado
  TokenInvalid, // Token de autenticación es inválido o ha sido alterado

  // Errores de operación y ejecución
  OperationFailed, // Fallo genérico en una operación (si no se puede especificar más)
  TimeoutError, // Una operación ha superado el tiempo límite permitido

  // Errores de recursos y servicios externos
  ExternalServiceError, // Error al comunicarse con un servicio externo
  RateLimitExceeded, // Superado el límite de peticiones permitidas
  ResourceUnavailable, // Un recurso necesario no está disponible (puede ser temporal)

  // Errores de configuración y sistema
  ConfigurationError, // Problema con la configuración de la app
  SystemError, // Errores de nivel de sistema o servidor, posiblemente irrecuperables
  InternalServerError, // Errores genéricos de servidor

  // Errores de negocio y lógica
  BusinessRuleError, // Violación de una regla de negocio específica
  PreconditionFailed, // Una condición previa para realizar la operación no se cumple

  // Otros errores
  BadRequest, // La solicitud es malformada o tiene datos incorrectos
  UnsupportedAction, // La operación o acción solicitada no está soportada
  TooManyRequests, // Demasiadas peticiones en un corto periodo de tiempo
}

class CustomError extends Error {
  type: ErrorType;
  status: number;

  private constructor(type: ErrorType, status: number, message?: string) {
    super(message);
    this.name = this.constructor.name;
    this.type = type;
    this.status = status;
  }

  static NotFound(message: string = "Resource not found") {
    return new CustomError(ErrorType.NotFound, 404, message);
  }

  static ValidationError(message: string = "Validation failed") {
    return new CustomError(ErrorType.ValidationError, 400, message);
  }

  static DatabaseError(message: string = "Database error occurred") {
    return new CustomError(ErrorType.DatabaseError, 500, message);
  }

  static DataConflict(message: string = "Data conflict occurred") {
    return new CustomError(ErrorType.DataConflict, 409, message);
  }

  static AuthenticationError(message: string = "Authentication failed") {
    return new CustomError(ErrorType.AuthenticationError, 401, message);
  }

  static AuthorizationError(message: string = "Unauthorized action") {
    return new CustomError(ErrorType.AuthorizationError, 403, message);
  }

  static TokenExpired(message: string = "Token has expired") {
    return new CustomError(ErrorType.TokenExpired, 401, message);
  }

  static TokenInvalid(message: string = "Token is invalid or altered") {
    return new CustomError(ErrorType.TokenInvalid, 401, message);
  }

  static OperationFailed(message: string = "Operation failed") {
    return new CustomError(ErrorType.OperationFailed, 500, message);
  }

  static TimeoutError(message: string = "Operation timeout") {
    return new CustomError(ErrorType.TimeoutError, 408, message);
  }

  static ExternalServiceError(message: string = "External service error") {
    return new CustomError(ErrorType.ExternalServiceError, 503, message);
  }

  static RateLimitExceeded(message: string = "Rate limit exceeded") {
    return new CustomError(ErrorType.RateLimitExceeded, 429, message);
  }

  static ResourceUnavailable(message: string = "Resource unavailable") {
    return new CustomError(ErrorType.ResourceUnavailable, 503, message);
  }

  static ConfigurationError(message: string = "Configuration error") {
    return new CustomError(ErrorType.ConfigurationError, 500, message);
  }

  static SystemError(message: string = "System error") {
    return new CustomError(ErrorType.SystemError, 500, message);
  }

  static InternalServerError(message: string = "Internal server error") {
    return new CustomError(ErrorType.InternalServerError, 500, message);
  }

  static BusinessRuleError(message: string = "Business rule violation") {
    return new CustomError(ErrorType.BusinessRuleError, 400, message);
  }

  static PreconditionFailed(message: string = "Precondition failed") {
    return new CustomError(ErrorType.PreconditionFailed, 412, message);
  }

  static BadRequest(message: string = "Bad request") {
    return new CustomError(ErrorType.BadRequest, 400, message);
  }

  static UnsupportedAction(message: string = "Unsupported action") {
    return new CustomError(ErrorType.UnsupportedAction, 400, message);
  }

  static TooManyRequests(message: string = "Too many requests") {
    return new CustomError(ErrorType.TooManyRequests, 429, message);
  }
}

export default CustomError;