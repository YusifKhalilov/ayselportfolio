/* --------------------------------- IMPORTS -------------------------------- */
// packages
import {
	faEnvelope,
	faPaperPlane,
	faTimes,
	faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
// context
// import AppContext from '../../../../context/AppContext';
import styles from './Contact.module.sass';

// display header blurry background and form body background in black
function Contact() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	// const { isContactFormActive, setIsContactFormActive } = AppContext;

	return (
		<div
			// style={
			// 	isContactFormActive ? { display: 'block' } : { display: 'none' }
			// }
			style={{ display: 'none' }}
			className={styles.contactContainer}>
			<div id="contactForm" className={styles.contactForm}>
				<h1 className={styles.header}>
					Contact Form{' '}
					<FontAwesomeIcon
						onClick={() =>
							setIsContactFormActive(!isContactFormActive)
						}
						className={styles.closeIcon}
						icon={faTimes}
						size="lg"
					/>
				</h1>
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
						placeholder="Email"
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
					<button className={styles.button}>
						Send Message{' '}
						<FontAwesomeIcon
							className={styles.send}
							icon={faPaperPlane}
							size="sm"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
