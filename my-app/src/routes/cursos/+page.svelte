<script>
	
	/**
   * @type {{ courses: { data: any; }; }}
   */
	 export let data;

	 let api_data = data.courses.data;
	let assets = "https://cms.bluedesignalliance.pt/assets/";

	console.log(data.courses)
</script>

<svelte:head>
	<title>Cursos • Blue Design Alliance</title>
</svelte:head>

<header class="m-4 md:m-8 my-4 md:my-8 bg-white">
	<div class="sm:flex items-center">
		<h1 class="grow text-2xl md:text-6xl xl:text-8xl tracking-tight leading-none">Cursos</h1>
		<p class=" basis-1/2 mt-2  md:leading-tight md:text-lg xl:text-3xl sm:text-right  serif text-black/30">Diferentes percursos de aprendizagem com uma formação superior dedicada à água.</p>
	</div>
</header>

<!-- Cards HomePage -->


 <section class="m-4 md:m-8">
	{#each data.courses.data as { lead, cursos_num, course_type, Coordinator, duration_info, credits_info, field, image_cover, status  }}
	{#if status==="published"}
	<article class="p-4 md:p-8 relative  overflow-hidden rounded-lg text-[#FFF] z-10">
		<div class="grid sm:grid-cols-3 gap-8 sm:gap-16">
			<header class="md:col-span-2 flex min-h-[30vh] md:min-h-[50vh] xl:min-h-[60vh] justify-between flex-col-reverse sm:flex-col">
				<p class="leading-none font-normal sm:font-light text-lg md:text-2xl xl:text-3xl text-right sm:text-left">{lead}</p>				
				<h1 class="tracking-tight leading-none text-3xl mb-4 sm:mb-0 md:text-6xl lg:text-7xl xl:text-8xl">{course_type}</h1>				
			</header>
			<div class="flex flex-col justify-between">
				<p class="tracking-tight leading-none serif text-center sm:text-right text-2xl md:text-4xl xl:text-5xl">{field}</p>
				<div>
					
					<dl class="p-0 sm:p-2 flex flex-col justify-center items-center basis-1/3 grow md:basis-1/3 xl:basis-1/5 m-1 ">
						<dt class="serif">Cursos</dt>
						<dd class="text-lg md:text-2xl">{cursos_num}</dd>
						<dt class="serif">Créditos</dt>
						<dd class="text-lg md:text-2xl">{credits_info}</dd>
						<dt class="serif">Duração</dt>
						<dd class="text-lg md:text-2xl">{duration_info}</dd>
						
					</dl>
					
				</div>
				<div>
					<a href="/cursos/" class="btn btn-secondary btn-block rounded-full font-normal">Informações</a>
				</div>
			</div>
		</div>
		<div class="w-[100%] absolute top-0 left-0 right-0 bottom-0 bg-accent -z-10 flex">
			<img class="contrast-[1] mix-blend-multiply grayscale-[100%] w-[100%] object-cover" src="{assets+image_cover}" alt="">
		</div>
	</article>
	{/if}
	{/each}
</section>


