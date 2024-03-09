/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from '@reduxjs/toolkit';
import React, { ChangeEvent, ReactNode, SetStateAction, useRef } from 'react';

interface FileUploadProps {
	accept: string;
	setFile: Dispatch<SetStateAction<any>>;
	children: ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {
	const ref = useRef<HTMLInputElement | null>(null);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		let ob = event.target.files[0];
		console.log(ob);
		setFile(ob);
	};

	return (
		<div onClick={() => ref?.current?.click()}>
			<input type="file" accept={accept} ref={ref} onChange={onChange} />
			{children}
		</div>
	);
};

export default FileUpload;
