/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import Button from 'shared/ui/Button/Button';
import FileUpload from './FileUpload';

export const Upload: React.FC = () => {
	const [audio, setAudio] = useState(null);

	useEffect(() => {
		console.log('audio UPDATE');
		console.log(audio);
	}, [audio]);

	const next = () => {
		const formData = new FormData();
		formData.append('audio', audio);
		axios.post('http://localhost:5000/tracks', formData);
	};

	return (
		<div>
			Uploader
			<FileUpload setFile={setAudio as Dispatch<SetStateAction<any>>} accept="audio/*">
				<button type="button">Загрузить аудио</button>
			</FileUpload>
			<Button onClick={next}>Далее</Button>
		</div>
	);
};
