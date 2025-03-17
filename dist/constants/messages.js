"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_MESSAGES = exports.PRODUCT_MESSAGES = void 0;
exports.PRODUCT_MESSAGES = {
    IMAGE_REQUIRED: "No se ha proporcionado una imagen",
    PRODUCT_EXISTS: "El producto ya existe!",
    PRODUCT_CREATED: "Producto creado con éxito",
    PRODUCT_NOT_FOUND: "Producto no encontrado",
    PRODUCT_UPDATED: "Producto actualizado con éxito",
    PRODUCT_DELETED: "Producto eliminado correctamente",
    UNAUTHORIZED: "Unauthorized",
    VALIDATION_ERRORS: "Errores de validación",
    INTERNAL_SERVER_ERROR: "Error interno del servidor",
};
exports.USER_MESSAGES = {
    EMAIL_ALREADY_EXISTS: (email) => `El correo electrónico '${email}' ya está registrado. Por favor, utiliza otro.`,
    USER_NOT_FOUND: "Usuario no encontrado.",
    USER_CREATED: "Se ha enviado un correo de verificación a tu cuenta.",
    USER_UPDATED: "Usuario actualizado correctamente.",
    USER_DELETED: "Usuario eliminado correctamente.",
    UNAUTHORIZED: "Unauthorized",
    USER_NOT_VERIFIED: "El usuario no está verificado. Por favor, revise su correo electrónico para completar la verificación.",
    INVALID_CREDENTIALS: "Credenciales incorrectas.",
    TOKEN_GENERATION_ERROR: "Error al generar el token de autenticación.",
    TOKEN_INVALID_OR_EXPIRED: "Token inválido o expirado.",
    USER_VERIFIED_SUCCESS: "Tu cuenta ha sido verificada exitosamente. Ahora puedes iniciar sesión.",
    PASSWORD_RESET_SENT: "Se ha enviado un correo electrónico para restablecer tu contraseña.",
    PASSWORD_UPDATED: "Contraseña actualizada con éxito.",
    INTERNAL_SERVER_ERROR: "Error interno del servidor.",
};
