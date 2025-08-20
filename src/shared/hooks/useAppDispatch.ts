import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/(providers)/storeProvider/ui/storeProvider'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
