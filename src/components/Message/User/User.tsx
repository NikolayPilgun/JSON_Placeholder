import React from "react";
import { IUser } from "../Message";
import Photo from "./Photo/Photo";
import Post from "./Post/Post";
import styles from "./User.module.css";

interface UserProps {
	user: IUser;
}

const User: React.FC<UserProps> = ({ user }) => {
	return (
		<div className={styles.container}>
			<Photo id={user.id} />
			<div className={styles.user}>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
			<Post id={user.id} />
		</div>
	);
};

export default User;
