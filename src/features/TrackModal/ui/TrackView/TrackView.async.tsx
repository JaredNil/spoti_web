import { lazy } from 'react';
import { TrackViewProps } from './TrackView';

export const TrackViewAsync = lazy<React.FC<TrackViewProps>>(async () => import('./TrackView'));
