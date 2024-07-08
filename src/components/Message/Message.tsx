import React from "react";
import styles from "./Message.module.css";
import User from "./User/User";

import axios from "axios";
import { useEffect, useState } from "react";

interface Geo {
	lat: string;
	lng: string;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

const Message: React.FC = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get<IUser[]>(
					"https://jsonplaceholder.typicode.com/users",
					{
						params: {
							_limit: 10,
						},
					}
				);
				setUsers(response.data);
				setLoading(false);
			} catch (err) {
				setError("Failed to fetch posts");
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}
	return (
		<div className={styles.message}>
			{users.map((user) => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
};

export default Message;
