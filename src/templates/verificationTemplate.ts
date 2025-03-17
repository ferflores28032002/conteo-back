interface IsVerifiedTemplateProps {
  name: string;
  verifyLink: string;
}

function verificationTemplate(props: IsVerifiedTemplateProps): string {
  const { name, verifyLink } = props;

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
            <h1>¡Bienvenido, ${name}!</h1>
          </div>
         <div class="content">
          <p>¡Bienvenido a <strong>Conteo</strong>! 🎉</p>
          <p>Nos emociona que formes parte de nuestra plataforma líder en gestión de productos. Con Conteo, podrás organizar, controlar y optimizar tu inventario de manera rápida y eficiente.</p>
          <p>Para comenzar a aprovechar todas nuestras herramientas, verifica tu cuenta haciendo clic en el botón a continuación:</p>
          <a href="${verifyLink}" class="button">Verificar Cuenta</a>
          <p>Si no solicitaste este registro, simplemente ignora este mensaje.</p>
          <p>Estamos aquí para ayudarte a mejorar tu gestión de productos. ¡Optimiza tu inventario con nosotros! 🚀</p>
        </div>

          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Conteo. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
    </html>
      `;
}

export default verificationTemplate;
