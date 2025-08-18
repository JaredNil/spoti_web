import { PlaylistPageClient } from './client.page'

export default async function PlaylistPage({
    params,
}: {
    params: { id: string }
}) {
    // const res = await fetch('http://localhost:3000/api/users');
    // const data = await res.json();
    const { id } = await params

    return (
        <>
            <span>{id}</span>
            <PlaylistPageClient />
            {/* {data.map((user: any) => (
			<li key={user.id}>{user.name}</li>
			))} */}
        </>
    )
}
