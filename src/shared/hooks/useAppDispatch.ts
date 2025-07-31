import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/(providers)/storeProvider/ui/storeProvider';


export const useAppDispatch = () => useDispatch<AppDispatch>();
