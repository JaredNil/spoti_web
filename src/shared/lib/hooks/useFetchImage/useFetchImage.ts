import { useEffect, useState } from 'react';

// 

export const useFetchImage = (path: string) => {
	const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);
    const [image, setImage] = useState<null | string>(null)
	
    useEffect(() => {
        new Promise<string>(async () => {
            let res = await import('shared/assets/atm.png');
            console.log(res)
            setImage(res)
            setIsLoadingImage(false)
        }).then(res => {
       
        }).catch(()=> console.log('catch')).finally(()=> console.log('fina'))
        
	}, []);

	return {isLoadingImage, image};
};


// const fetchImage = async (path: string) => {
//     let res : string = await (import(`${path}`)).then((res) => {
//         return res
//     });
//     return res
// }




// let albumsCollection = albumsJson.albums.map(async (alb) => {
//     let image = await fetchImage(alb.imagePath);
//     debugger

//     return await {
//         ...alb,
//         imagePath: image
//     };
// }) as unknown as AlbumsPost;
