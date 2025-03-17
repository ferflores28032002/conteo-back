"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
/**
 * @fileoverview Este módulo carga y valida las variables de entorno utilizando la librería `env-var`.
 * Asegura que todas las variables de entorno requeridas estén presentes y tengan el tipo correcto.
 * Si falta una variable de entorno requerida o tiene un tipo incorrecto, se lanzará un error.
 */
exports.envs = {
    PORT: (0, env_var_1.get)("PORT").required().asPortNumber(),
    POSTGRES_USER: (0, env_var_1.get)("POSTGRES_USER").required().asString(),
    POSTGRES_PASSWORD: (0, env_var_1.get)("POSTGRES_PASSWORD").required().asString(),
    POSTGRES_HOST: (0, env_var_1.get)("POSTGRES_HOST").required().asString(),
    POSTGRES_PORT: (0, env_var_1.get)("POSTGRES_PORT").required().asPortNumber(),
    POSTGRES_DATABASE: (0, env_var_1.get)("POSTGRES_DATABASE").required().asString(),
    JWT: (0, env_var_1.get)("JWT").required().asString(),
    BREVO_API_KEY: (0, env_var_1.get)("BREVO_API_KEY").required().asString(),
    BREVO_SENDER_EMAIL: (0, env_var_1.get)("BREVO_SENDER_EMAIL").required().asString(),
    BREVO_SENDER_NAME: (0, env_var_1.get)("BREVO_SENDER_NAME").required().asString(),
    VERIFY_ACCOUNT_URL: (0, env_var_1.get)("VERIFY_ACCOUNT_URL").required().asString(),
    FORGOT_PASSWORD_URL: (0, env_var_1.get)("FORGOT_PASSWORD_URL").required().asString(),
    SUPABASE_URL: (0, env_var_1.get)("SUPABASE_URL").required().asString(),
    SUPABASE_KEY: (0, env_var_1.get)("SUPABASE_KEY").required().asString(),
    SUPABASE_BUCKET: (0, env_var_1.get)("SUPABASE_BUCKET").required().asString(),
};
