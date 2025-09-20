declare module 'zeptomail' {
  interface MailOptions {
    from?: { address: string; name?: string };
    to: Array<{ email_address: { address: string; name?: string } }>;
    subject?: string;
    htmlbody?: string;
    textbody?: string;
    template_key?: string;
    template_alias?: string;
    merge_info?: Record<string, unknown>;
  }

  interface SendMailResponse {
    data: unknown[];
    message: string;
  }

  export class SendMailClient {
    constructor(config: { url: string; token: string });
    sendMail(options: MailOptions): Promise<SendMailResponse>;
    sendMailWithTemplate(options: MailOptions): Promise<SendMailResponse>;
  }
}