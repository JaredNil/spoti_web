import { StateSchema } from 'app/providers/StoreProvider';

export const getAlbumCommonData = (state: StateSchema) => state.albums.commonAlbums;
export const getAlbumUserData = (state: StateSchema) => state.albums.userAlbums;
