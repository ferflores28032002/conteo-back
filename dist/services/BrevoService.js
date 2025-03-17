"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brevo = require("@getbrevo/brevo");
const config_1 = require("../config");
class EmailService {
    constructor() {
        this.apiInstance = new brevo.TransactionalEmailsApi();
        this.apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, config_1.envs.BREVO_API_KEY);
    }
    async sendEmail(props) {
        const { recipient, subject, template } = props;
        try {
            let sendSmtpEmail = new brevo.SendSmtpEmail();
            sendSmtpEmail.subject = subject;
            sendSmtpEmail.sender = {
                email: config_1.envs.BREVO_SENDER_EMAIL,
                name: config_1.envs.BREVO_SENDER_NAME,
            };
            sendSmtpEmail.to = [{ email: recipient.email, name: recipient.name }];
            sendSmtpEmail.htmlContent = template;
            await this.apiInstance.sendTransacEmail(sendSmtpEmail);
        }
        catch (error) {
            throw new Error("Error al enviar el correo");
        }
    }
}
exports.default = EmailService;
