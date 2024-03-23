export const countSkeleton = (): number => {
	// Функция простая - выведение под кастом хук не требуется,
	// динамически изменять значение для ререндера тоже
	// ибо лишний для всех слушатель просто будет грузить девайс

	const widthPageOfDocument = document.body.offsetWidth;
	console.log('widthPageOfDocument');
	console.log(widthPageOfDocument);
	if (widthPageOfDocument < 640) return 4;
	if (widthPageOfDocument < 1024) return 6;
	// If need more responsive - add new line
	// if (widthPageOfDocument < 1280) return 8;
	// if (widthPageOfDocument > 1280) return 8;

	// For 1024 and wider
	return 8;
};
