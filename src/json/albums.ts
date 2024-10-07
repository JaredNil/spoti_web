import { AlbumsPost } from "entities/Album/model/types/albumsSchema"

import trapMetalImg from 'shared/assets/trap_metal.webp';
import heavyMetalImg from 'shared/assets/heavy_metal.webp';
import atmImg from 'shared/assets/atm.png';

export const ALBUMS: AlbumsPost = [
        {
            author: "Spotify",
            id: 0,
            imagePath: trapMetalImg,
            title: "Trap Metal",
            user_id: 0
        },
        {
            author: "Spotify",
            id: 1,
            imagePath: heavyMetalImg,
            title: "Heavy Metal",
            user_id: 0
        },
        {
            author: "Spotify",
            id: 2,
            imagePath: atmImg,
            title: "Atmosphera",
            user_id: 0
        },
        {
            author: "user",
            id: 3,
            imagePath: atmImg,
            title: "UserAlbum",
            user_id: 1
        }
]