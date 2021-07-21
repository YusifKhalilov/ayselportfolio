/* ----------------------------- SEND EMAIL API ----------------------------- */

/**Imports */
import nodemailer from 'nodemailer';

export default function handler(req, res) {
	const { message, fullName, email } = req.body;
	const userName = process.env.EMAIL_USERNAME;
	console.log(`🚀 ~ file: email.js ~ line 9 ~ handler ~ userName`, userName);
	const pass = process.env.EMAIL_PASSWORD;
	console.log(`🚀 ~ file: email.js ~ line 11 ~ handler ~ pass`, pass);
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: userName,
			pass: pass,
		},
	});

	const mailOptions = {
		from: 'Girlfromsurakhany@gmail.com',
		to: email,
		subject: `Website contact email from ${fullName}`,
		text: message,
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			res.status(500).json({ error: error.message });
		} else {
			console.log('Email sent: ' + info.response);
			res.status(200).json({ text: info.response });
		}
	});
}
