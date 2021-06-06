import React from 'react';
import Menu from './components/common/Menu/Menu';
import styles from './contact.module.sass';

function Contact() {
	return (
		<div className={styles.contactContainer}>
			<Menu />
			<div className={styles.contactForm}>
				<h1 className={styles.header}>Contact Form</h1>
				<input
					type="text"
					name="full name"
					placeholder="Name"
					className={styles.name}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					className={styles.email}
				/>
				<br />
				<textarea
					type="text"
					name="message"
					className={styles.messages}
					placeholder="Message"
				/>
				<br />
				<button className={styles.button}>Send Message</button>
			</div>
		</div>
	);
}

export default Contact;
