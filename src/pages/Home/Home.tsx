import React from "react";
import Message from "../../components/Message/Message";
import styles from "./Home.module.css";

const Home: React.FC = () => {
	return (
		<div className={styles.container}>
			<Message />
		</div>
	);
};

export default Home;
