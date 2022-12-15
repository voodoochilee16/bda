<script>

	export let data;

	let assets = "https://cms.bluedesignalliance.pt/assets/";


	let api_data = data.pgz.data;

</script>

<svelte:head>
	<title>CTESP • Blue Design Alliance</title>
</svelte:head>

<header class="m-4 md:m-8 my-4 md:my-8">
	<div class="sm:flex items-center">
		<h1 class="grow text-2xl md:text-6xl xl:text-8xl tracking-tight leading-none">Cursos Técnicos Superiores Profissionais</h1>
		<p class=" basis-1/2 mt-2  md:leading-tight md:text-lg xl:text-3xl sm:text-right  serif text-black/30">Aprofunde os seus conhecimentos no âmbito da Economia Azul num percurso formativo modular.</p>
	</div>
	<div class="pt-4 flex">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-sm btn-outline m-1 font-normal rounded-full">Domínios</label>
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[350px]">
			  <li><a>Literacia e Cultura da Água</a></li>
			  <li><a>Design, Gestão e Marketing de Recursos Hídricos</a></li>
			  <li><a>Construção Naval, Logística e Transporte Marítimo</a></li>
			  <li><a>Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia</a></li>
			</ul>
		</div>
		<div class="dropdown">
			<label tabindex="0" class="btn btn-sm btn-outline m-1 font-normal rounded-full">Locais</label>
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
			  <li><a>ESAD</a></li>
			  <li><a>IPVC</a></li>
			  <li><a>ESB.UCP</a></li>
			  <li><a>EHB.IPB</a></li>
			</ul>
		</div>
	</div>



</header>

<!-- Gets PG's from directus -->
<section class=" m-4 md:m-8 md:my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
	
	{#each api_data as { id, Title, domains, school, main_img, type_course, slug, type, date_ini }}
	{#if type.course_type === "CTESP"}    <!-- Gets PG's from directus -->
	<article class="relative overflow-hidden rounded-lg text-[#FFF] z-10">
		<header class="h-[50vw] sm:h-[30vw] xl:h-[30vw] p-3 sm:p-4 flex flex-col justify-end sm:pb-0 pb-0">
			<p class="grow text-2xl md:text-3xl lg:text-4xl tracking-tight md:leading-none  md:leading-none serif text-right "></p>
			<h1 class="text-2xl md:text-3xl lg:text-4xl md:leading-none font-normal tracking-tight leading-none">{Title}</h1>
			<p class="text-2xl sm:text-3xl font-light  hidden">{school}</p>
		</header>
		<footer class="flex items-center justify-between p-4">
			<p class=" text-sm lg:text-lg">{date_ini}</p>
			<a href="{`/cursos/ctesp/${slug}`}" class="btn btn-xs xl:btn-md btn-secondary rounded-full font-normal">Mais info</a>
		</footer>
		<div class="w-[100%] absolute top-0 left-0 right-0 bottom-0 bg-accent -z-10 flex">
			<!-- <img class="contrast-[1] mix-blend-multiply grayscale-[100%] w-[100%] object-cover" src="{assets + main_img.id}" alt=""> -->
		</div>
	</article>
	{/if}
	{/each}
	
</section>