import nodemailer from "nodemailer";
export async function sendEmail(to,subject,html){
    const transporter =nodemailer.createTransport({
        service:'gmail',
        // secure:false,
        // port:25,
        auth:{
            user: "tariqshreem00@gmail.com",
            pass: "dcgo lpvp opgn ezdh",
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    const info=await transporter.sendMail({
        from: '"Fred Foo 👻"<tariqshreem00@gmail.com>',//**** */
        to,
        subject,
        html,
    });
    return info;
}