import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types/post';

export const load: PageServerLoad = async ({ params }) => {
	const fetchPost = async (postId: string) => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

		if (!res.ok) {
			error(404, 'Not Found');
		}

		const data = await res.json();
		return data as Post;
	};

	return { post: await fetchPost(params.postId) };
};
