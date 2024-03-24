import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import toastr from 'toastr';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { curTrackReducer } from 'features/TrackModal/model/slice/curTrackSlice';

export interface TrackViewProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducerList = {
	curTrack: curTrackReducer,
};

const TrackView: React.FC<TrackViewProps> = memo((props: TrackViewProps) => {
	const { className, onSuccess } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	return <DynamicModuleLoader reducers={initialReducers}>вфывы</DynamicModuleLoader>;
});

export default TrackView;
