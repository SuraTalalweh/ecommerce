import nodemailer from "nodemailer";
export async function sendEmail(to,subject,html){
    const transporter =nodemailer.createTransport({
        service:'gmail',
        // secure:false,
        // port:25,
        auth:{
            user:process.env.EMAILSENDER,
            pass:process.env.PASSWORDSENDER,
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    const info=await transporter.sendMail({
        from: `"T-Shop"<${process.env.EMAILSENDER}>`,//**** */
        to,
        subject,
        html,
    });
    return info;
}