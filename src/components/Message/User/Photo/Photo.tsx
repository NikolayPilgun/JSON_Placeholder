import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Photo.module.css";

// Интерфейс для пропсов компонента
interface PhotoProps {
	id: number;
}

// Интерфейс для данных фото
export interface Photo {
	albumId: number;
	идентификатор: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

const Photo: React.FC<PhotoProps> = ({ id }) => {
	const [photo, setPhoto] = useState<Photo | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPhoto = async () => {
			try {
				const response = await axios.get<Photo>(
					`https://jsonplaceholder.typicode.com/photos/${id}`
				);
				setPhoto(response.data);
				setLoading(false);
			} catch (err) {
				setError("Failed to fetch photo");
				setLoading(false);
			}
		};

		fetchPhoto();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className={styles.photo}>
			{photo && (
				<img src={photo.url} alt={photo.title} className={styles.image} />
			)}
		</div>
	);
};

export default Photo;
