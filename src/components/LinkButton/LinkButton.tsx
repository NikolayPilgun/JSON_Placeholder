import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
	id: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({ id }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/page/${id}`);
	};

	return (
		<button className={styles.linkButton} onClick={handleClick}>
			Перейти на страницу {id}
		</button>
	);
};

export default LinkButton;
