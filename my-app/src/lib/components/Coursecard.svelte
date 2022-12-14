<script>
	export let local, name, domain
</script>
<article class="rounded-lg overflow-hidden bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1529034502960-57f42a966080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80)]">
	<header class="h-[60vw] sm:h-[40vw] xl:h-[25vw] text-black p-3 sm:p-4 flex flex-col justify-end">
		<p class="grow tracking-tight tracking-tight leading-none serif text-right sm:text-2xl">{domain}</p>
		<h1 class="text-3xl xl:text-3xl leading-none font-normal tracking-tight">{name}</h1>
		<p class="text-3xl xl:text-3xl font-light">{local}</p>
	</header>
	<footer class="flex items-center justify-between p-4">
		<p class="text-black text-sm">Fevereiro 2023</p>
		<a href="" class="btn btn-xs btn-outline rounded-lg font-normal">Mais info</a>
	</footer>
</article>
