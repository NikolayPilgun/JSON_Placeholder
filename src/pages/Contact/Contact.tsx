import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Контакты</h1>
			<p>Это страница с контактной информацией.</p>
		</div>
	);
};

export default Contact;
