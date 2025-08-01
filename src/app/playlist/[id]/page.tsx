
import { PlaylistPageClient } from "./client.page";

export default async function PlaylistPage() {

	// const res = await fetch('http://localhost:3000/api/users');
	// const data = await res.json();

    return (
		<>
			<PlaylistPageClient />
			{/* {data.map((user: any) => (
			<li key={user.id}>{user.name}</li>
			))} */}
		</>	
	);
};
