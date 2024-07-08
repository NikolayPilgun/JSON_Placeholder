import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default App;
