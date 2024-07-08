import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../../components/Message/Message";
import { Photo } from "../../components/Message/User/Photo/Photo";
import { Post } from "../../components/Message/User/Post/Post";
import styles from "./PagePost.module.css";

const PagePost: React.FC = () => {
	const { id } = useParams<Record<string, string>>();

	const [post, setPost] = useState<Post | null>(null);
	const [user, setUser] = useState<IUser | null>(null);
	const [photo, setPhoto] = useState<Photo | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [postResponse, userResponse, photoResponse] = await Promise.all([
					axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`),
					axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`),
					axios.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`),
				]);

				setPost(postResponse.data);
				setUser(userResponse.data);
				setPhoto(photoResponse.data);
				setLoading(false);
			} catch (err) {
				setError("Failed to fetch data");
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	if (loading) {
		return <div className={styles.loading}>Loading...</div>;
	}

	if (error) {
		return <div className={styles.error}>{error}</div>;
	}

	return (
		<div className={styles.container}>
			{photo && (
				<div className={styles.photo}>
					<h2>{photo.title}</h2>
					<img src={photo.url} alt={photo.title} />
				</div>
			)}
			{user && (
				<div className={styles.user}>
					<h2>{user.name}</h2>
					<p>{user.email}</p>
				</div>
			)}
			{post && (
				<div className={styles.post}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			)}
		</div>
	);
};

export default PagePost;
