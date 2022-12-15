import mailer from 'nodemailer'

export default class MailingService {
    constructor() {
        this.client = mailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: "samuelmayo456@gmail.com",
                pass: 'bqrhwbzzfuuoekvv'
            }
        })
    }
    sendMail= async({from,to,subject,html,attachments=[]})=>{
        let result= await this.client.sendMail({
            from,
            to,
            subject,
            html,
            attachments
        })
        return result
    }
}