import { lazy } from 'react';
import { TrackWindowProps } from './TrackWindow';

export const TrackWindowAsync = lazy<React.FC<TrackWindowProps>>(async () => import('./TrackWindow'));
