const brevo = require("@getbrevo/brevo");

import { envs } from "../config";

interface EmailServiceProps {
  recipient: { name: string; email: string };
  subject: string;
  template: string;
}

class EmailService {
  private apiInstance: any;

  constructor() {
    this.apiInstance = new brevo.TransactionalEmailsApi();
    this.apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      envs.BREVO_API_KEY
    );
  }

  async sendEmail(props: EmailServiceProps): Promise<void> {
    const { recipient, subject, template } = props;

    try {
      let sendSmtpEmail = new brevo.SendSmtpEmail();
      sendSmtpEmail.subject = subject;
      sendSmtpEmail.sender = {
        email: envs.BREVO_SENDER_EMAIL,
        name: envs.BREVO_SENDER_NAME,
      };
      sendSmtpEmail.to = [{ email: recipient.email, name: recipient.name }];
      sendSmtpEmail.htmlContent = template;

      await this.apiInstance.sendTransacEmail(sendSmtpEmail);
    } catch (error) {
      throw new Error("Error al enviar el correo");
    }
  }
}

export default EmailService;
