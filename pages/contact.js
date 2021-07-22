/* --------------------------------- IMPORTS -------------------------------- */
/**packages */
import {
	faEnvelope,
	faPaperPlane,
	faSpinner,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
/**icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import Menu from '../app/components/common/Menu/Menu';
/**context */
import styles from './contact.module.sass';

// display header blurry background and form body background in black
function Contact() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSending, setIsSending] = useState(false);
	const [buttonText, setButtonText] = useState('Send Message');
	const [errorMessage, setErrorMessage] = useState(
		'Correct EMail is required.',
	);

	// validate email
	useEffect(() => {
		if (!isEmail(email)) {
			setErrorMessage('Correct EMail is required.');
		} else {
			setErrorMessage('');
		}
	}, [email]);

	const variants = {
		hidden: { scale: 0, display: 'none' },
		visible: { scale: 1, display: 'inline-block' },
		noShow: { opacity: 0 },
		show: { opacity: 1 },
	};

	const sendEmail = async () => {
		setIsSending(true);
		setButtonText('Sending');
		await axios
			.post('/api/email', {
				fullName,
				email,
				message,
			})
			.catch((error) => console.log(error));

		setButtonText('Message Sent');

		setTimeout(() => {
			setButtonText('Send Message');
			setIsSending(false);
		}, 1500);

		// reset states
		setFullName('');
		setEmail('');
		setMessage('');
		setIsSending(false);
		setErrorMessage('');
	};

	return (
		<>
			<Menu />
			<div className={styles.contactContainer}>
				<div id="contactForm" className={styles.contactForm}>
					<h1 className={styles.header}>Contact Form</h1>
					<motion.div
						initial="visible"
						animate={errorMessage !== '' ? 'visible' : 'hidden'}
						variants={variants}
						className={styles.errorMessage}>
						{errorMessage}
					</motion.div>
					<div className={styles.contactFormBody}>
						<label className={styles.label} htmlFor="name">
							<FontAwesomeIcon
								className={styles.nameIcon}
								icon={faUserCircle}
								size="sm"
							/>
						</label>
						<input
							id="name"
							type="text"
							name="full name"
							placeholder="Name"
							className={styles.name}
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>
						<label className={styles.label} htmlFor="email">
							<FontAwesomeIcon
								className={styles.emailIcon}
								icon={faEnvelope}
								size="sm"
							/>
						</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Email *"
							className={styles.email}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<br />
						<textarea
							type="text"
							name="message"
							className={styles.messages}
							placeholder="Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<br />
						<button
							onClick={sendEmail}
							disabled={true}
							className={styles.button}>
							<motion.span
								initial="noShow"
								animate="show"
								variants={variants}
								className={styles.buttonText}>
								{buttonText}
							</motion.span>
							<motion.span
								initial="hidden"
								animate={isSending ? 'hidden' : 'visible'}
								variants={variants}>
								<FontAwesomeIcon
									className={styles.send}
									icon={faPaperPlane}
									size="sm"
								/>
							</motion.span>
							<motion.span
								initial="hidden"
								animate={isSending ? 'visible' : 'hidden'}
								variants={variants}>
								<FontAwesomeIcon
									className={`${styles.send} fa-spin`}
									icon={faSpinner}
									size="sm"
								/>
							</motion.span>
						</button>
						<div className={styles.requiredText}>
							* required fields
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
