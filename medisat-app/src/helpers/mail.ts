import nodemailer from "nodemailer"

type paramsType={
    name:string,
    email:string
}

export default async function PatientMail(params:paramsType) {
    const {name, email} = params
    const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MEDISAT_EMAIL,
                pass: process.env.MEDISAT_PASSWORD
            }
        });
    
        const info = await transporter.sendMail({
        from: process.env.MEDISAT_EMAIL, // sender address
        to: email, // list of receivers
        subject: "Registrasi", // Subject line
        text: "Registrasi", // plain text body
        html: `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        /* Reset CSS */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        .body {
            padding: 20px;
            line-height: 1.6;
        }

        .footer {
            background-color: #f1f1f1;
            text-align: center;
            padding: 10px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Medisat App</h1>
        </div>
        <div class="body">
            <p>Dear ${name},</p>
            <p>Terima kasih sudah menggunakan layanan kami.</p>
            <p>
            Akun anda sudah terdaftar di aplikasi kami. <br/>
            Anda dapat melakukan login menggunakan email: ${email} dan password yang sudah terdaftar.
            </p>
            <p>Sekian untuk informasinya,<br>Terima Kasih</p>
        </div>
        <div class="footer">
            <p>&copy; Medisat 2024</p>
        </div>
    </div>
</body>

</html>`, // html body
      });

    //   console.log("Message sent: %s", info.messageId)
}

