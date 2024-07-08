import React from "react";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>404 - Страница не найдена</h1>
			<p className={styles.message}>
				Извините, но страница, которую вы ищете, не существует.
			</p>
			<Link to="/" className={styles.homeLink}>
				Вернуться на главную
			</Link>
		</div>
	);
};

export default ErrorPage;
