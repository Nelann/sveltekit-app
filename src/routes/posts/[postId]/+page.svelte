<script lang="ts">
	import PostItem from '$lib/components/shared/post-item.svelte';
	import { Button } from '$lib/components/ui/button';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.body} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="mb-4">
		<Button href="/">&larr; Back</Button>
	</div>
	<div>
		<PostItem post={data.post} />
	</div>
</div>
