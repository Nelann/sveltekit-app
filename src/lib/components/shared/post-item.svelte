<script lang="ts">
	import type { Post } from '$lib/types/post';

	let { post }: { post: Post } = $props();

	let wordCount = $state((post.body.match(/\S+/g) || []).length);
	let estimatedReadingTime = $derived(wordCount / 250);
</script>

<div>
	<div class="mb-4">
		<h2 class="font-semibold text-2xl capitalize leading-normal">{post.title}</h2>
		<div>
			<p>Reading time: {Math.round(estimatedReadingTime)} minutes</p>
		</div>
	</div>
	<div>{@html post.body}</div>
</div>
