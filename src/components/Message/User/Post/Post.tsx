import axios from "axios";
import React, { useEffect, useState } from "react";
import LinkButton from "../../../LinkButton/LinkButton";
import styles from "./Post.module.css";

// Интерфейс для данных поста
export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

// Интерфейс для пропсов компонента
interface PostProps {
	id: number;
}

const Post: React.FC<PostProps> = ({ id }) => {
	const [post, setPost] = useState<Post | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get<Post>(
					`https://jsonplaceholder.typicode.com/posts/${id}`
				);
				setPost(response.data);
				setLoading(false);
			} catch (err) {
				setError("Failed to fetch post");
				setLoading(false);
			}
		};

		fetchPost();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className={styles.post}>
			{post && (
				<>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</>
			)}
			<LinkButton id={id} />
		</div>
	);
};

export default Post;
