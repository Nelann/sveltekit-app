import type { Post } from '$lib/types/post';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export async function load({}: PageServerLoad) {
	const fetchPosts = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');

		if (!res.ok) {
			error(404, 'Not Found');
		}

		const data = await res.json();
		return data as Post[];
	};

	return {
		posts: await fetchPosts()
	};
}
