import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link to={`/`} className={styles.navLink}>
							Главная
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link to={`about`} className={styles.navLink}>
							О нас
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link to={`contact`} className={styles.navLink}>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
