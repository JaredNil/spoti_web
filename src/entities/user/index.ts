// export { authByCookie } from './model/service/authByCookie';
// export { authByUsername } from './model/service/authByUsername';
// export { logoutByServer } from './model/service/logoutByServer';

export { getUserSearch } from './model/selectors/getSearched'

export { getIsLoadingUser } from './model/selectors/getIsLoadingUser'

export { userReducer, userAction } from './model/slice/userSlice'

export type { UserSchema } from './model/types/user'

export { getUsername } from './model/selectors/getUsername'
