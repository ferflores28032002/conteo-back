import "dotenv/config";

import { get } from "env-var";

/**
 * @fileoverview Este módulo carga y valida las variables de entorno utilizando la librería `env-var`.
 * Asegura que todas las variables de entorno requeridas estén presentes y tengan el tipo correcto.
 * Si falta una variable de entorno requerida o tiene un tipo incorrecto, se lanzará un error.
 */

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  POSTGRES_USER: get("POSTGRES_USER").required().asString(),
  POSTGRES_PASSWORD: get("POSTGRES_PASSWORD").required().asString(),
  POSTGRES_HOST: get("POSTGRES_HOST").required().asString(),
  POSTGRES_PORT: get("POSTGRES_PORT").required().asPortNumber(),
  POSTGRES_DATABASE: get("POSTGRES_DATABASE").required().asString(),
  JWT: get("JWT").required().asString(),
  BREVO_API_KEY: get("BREVO_API_KEY").required().asString(),
  BREVO_SENDER_EMAIL: get("BREVO_SENDER_EMAIL").required().asString(),
  BREVO_SENDER_NAME: get("BREVO_SENDER_NAME").required().asString(),
  VERIFY_ACCOUNT_URL: get("VERIFY_ACCOUNT_URL").required().asString(),
  FORGOT_PASSWORD_URL: get("FORGOT_PASSWORD_URL").required().asString(),
  SUPABASE_URL: get("SUPABASE_URL").required().asString(),
  SUPABASE_KEY: get("SUPABASE_KEY").required().asString(),
  SUPABASE_BUCKET: get("SUPABASE_BUCKET").required().asString(),
};
