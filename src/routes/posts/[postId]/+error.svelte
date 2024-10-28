<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.error?.message}</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div>
		<h1>Error: {$page.error?.message}</h1>
		<p>Status: {$page.status.toString()}</p>
		<button class="px-4 py-2 rounded-md border shadow-sm">
			<a href="/">&larr; Back</a>
		</button>
	</div>
</div>
