import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>О нас</h1>
			<p>Это страница с информацией о нас.</p>
		</div>
	);
};

export default About;
