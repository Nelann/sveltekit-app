<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div>
		<div class="mb-4">
			<h2>More Posts</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
			{#each data.posts as post}
				<div class="border p-4 rounded-md">
					<a href="/posts/{post.id}" class="underline italic" data-sveltekit-preload-data="hover"
						>{post.title.length > 50 ? post.title.slice(0, 50) + '...' : post.title}</a
					>
				</div>
			{/each}
		</div>
	</div>
</div>
