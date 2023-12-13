import React, { useContext } from "react";
import styles from "../sass/pages/contact.module.scss";
import DarkModeContext from "../context/DarkModeContext";

function Contact() {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className={`${styles.contact} ${darkMode}`}>
			<div className={styles.container}>
				<h1>Contact</h1>

				<form
					className={styles.contactForm}
					action="https://formsubmit.co/a91fdbb25681a4f6a5934e8a93a4251c"
					method="POST"
				>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="text" placeholder="Subject" />
					<textarea placeholder="Your query or feedback" />
					<input type="submit" value="Send" className="submitBtn" />
				</form>
				<div className={styles.socials}>
					<button className="container">
						<i className="fab fa-linkedin"></i>
					</button>
					<button className="container">
						<i className="fab fa-github-square"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
