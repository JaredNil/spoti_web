import { useDispatch } from 'react-redux';

import { AppStore } from '@/app/(providers)/storeProvider/ui/storeProvider';

export const useAppDispatch = () => useDispatch<AppStore['dispatch']>();
