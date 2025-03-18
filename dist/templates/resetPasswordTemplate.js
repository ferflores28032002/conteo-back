"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordTemplate = void 0;
const resetPasswordTemplate = (props) => {
    const { name, resetLink } = props;
    return `
        <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f3f4f6;
            color: black;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #6C63FF, #3B82F6);
            color: white;
            text-align: center;
            padding: 30px 20px;
            word-wrap: break-word;
          }
          .header h1 {
            font-size: 28px;
            margin: 0;
            font-weight: bold;
            overflow-wrap: break-word;
          }
          .content {
            padding: 30px 20px;
            text-align: center;
            font-size: 18px;
            line-height: 1.8;
            color: #374151;
          }
          .content p {
            margin: 15px 0;
          }
          .button {
            display: inline-block;
            margin-top: 25px;
            padding: 14px 28px;
            background-color: #3B82F6;
            color: #ffffff !important;
            text-decoration: none;
            font-weight: bold;
            border-radius: 50px;
            font-size: 18px;
            transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .button:hover {
            background-color: #2563EB;
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          }
          .footer {
            padding: 20px;
            background-color: #E5E7EB;
            text-align: center;
            font-size: 14px;
            color: #6B7280;
          }
          .footer a {
            color: #3B82F6;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Hola, ${name}</h1>
          </div>
          <div class="content">
            <p>Recibimos una solicitud para restablecer tu contraseña en <strong>Conteo</strong>.</p>
            <p>Para continuar con el proceso, haz clic en el botón a continuación:</p>
            <a href="${resetLink}" class="button">Restablecer Contraseña</a>
            <p>Si no solicitaste este cambio, puedes ignorar este mensaje. Tu cuenta está segura.</p>
            <p>Estamos aquí para ayudarte, ¡siempre que lo necesites!</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Conteo. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
    </html>
      `;
};
exports.resetPasswordTemplate = resetPasswordTemplate;
