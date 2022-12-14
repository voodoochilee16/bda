<script>
	import { onMount } from "svelte";
	/**
   * @type {{ schools: { data: any[]; }; }}
   */
	 export let data;
	console.log(data.schools.data[0]);

	let assets = "https://cms.bluedesignalliance.pt/assets/";
	
</script>

<div class="flex  py-[10vh] md:py-[20vh] bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1616812828436-a6e95adefce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1585&q=80)]">
	<div class="flex justify-center items-center flex-col">
		<h1 class="text-white text-2xl md:text-3xl serif lg:text-5xl leading-tight text-center px-[5vw] lg:px-[10vw] mb-8">Bem-vindo à Blue Design Alliance, o programa de formação superior dedicado a um dos recursos mais preciosos do nosso planeta: a água.</h1>
		<p class="text-white md:text-xl leading-tight text-center px-[10vw] md:px-[20vw]">Aprender a utilizar o design, a ciência, o desporto ou a saúde para prestar respeito aos oceanos, trabalhar com a água nos seus vários estados, comunicar a cultura dos mares ou construir infra-estruturas náuticas. </p>
	</div>
</div>


<div class="flex  py-10 sm:py-20 bg-cover bg-center bg-stone-200">
	<div class="flex justify-center items-center flex-col">
		<h1 class=" text-lg md:text-2xl serif leading-tight text-center px-[10vw] md:px-[20vw]">O propósito da Blue Design Alliance é utilizar as ferramentas do Design para educar e formar para o desenvolvimento de uma vida sustentável que permita a implementação e transferência de ideias e produtos inovadores para o ambiente azul.</h1>
	</div>
</div>

<!-- <div class=" h-[20vh] bg-cover lg:bg-fixed bg-center bg-[url(https://images.unsplash.com/photo-1645181196184-3ae5bf3fc91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80)]"></div> -->
<div class=" h-[20vh] bg-cover lg:bg-fixed bg-center bg-[url(https://images.unsplash.com/photo-1617718724572-c7dd48e5ef62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)]"></div>


<div class="flex  py-10 sm:py-20 bg-cover bg-center bg-stone-200">
	<div class="flex justify-center items-center flex-col">
		<h1 class=" text-lg md:text-2xl serif leading-tight text-center px-[10vw] md:px-[20vw]">O programa formativo da Blue Design Alliance segue a metodologia do Design Thinking. Quer isto dizer que os cursos permitem a reformulação dos conteúdos lecionados tendo em conta a tua curiosidade e ambição, assim como as necessidades do mercado de trabalho. O resultado são aulas práticas direcionadas para a solução de problemas concretos num ambiente experimental e colaborativo. </h1>
	</div>
</div>
<div class=" h-[20vh] bg-cover lg:bg-fixed bg-center bg-[url(https://images.unsplash.com/photo-1658499308844-ac79edf710b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80)]"></div>

<div class="flex  py-10 sm:py-20 bg-cover bg-center bg-stone-200">
	<div class="flex justify-center items-center flex-col">
		<h1 class=" text-lg md:text-2xl serif leading-tight text-center px-[10vw] md:px-[20vw]">As instituições promotoras asseguram perspetivas de atribuição de Bolsas de Estudo e de Mérito, de acolhimento inclusivo de estudantes, de empregabilidade e uma sólida capacidade de intervenção no território da região Norte.
		</h1>
	</div>
</div>
<div class=" h-[20vh] bg-cover lg:bg-fixed bg-center bg-[url(https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)]"></div>

<div class="py-10 sm:py-20 ">
	<div class="flex justify-center items-center flex-col">
		<h1 class=" text-lg md:text-2xl serif leading-tight text-center px-[10vw] md:px-[20vw]">Sediadas no litoral norte e interior norte de Portugal, as Instituições de Ensino Superior que integram Blue Design Alliance proporcionam uma alargada oferta formativa relacionada com as dimensões sociais, culturais, económicas e desportivas da água e dos oceanos através do Design. </h1>
	</div>
</div>

<!-- {#each data.schools.data as {Name} }
	<div>
		<p>
			{Name}
		</p>
	</div>
{/each} -->
<!-- Schools Cards -->
<div class="px-4 md:px-8 mb-16 xl:container xl:mx-auto ">
	{#each data.schools.data as { Name, Initials, Description, Cover, Website_URL, Email, Phone}, i}
	<article class="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8 py-8">
		<div class="flex flex-col justify-start md:col-span-4 lg:col-span-2">
			<p class="text-black/30 uppercase">{Initials}</p>
			<h1 class="text-2xl leading-none mdtext-4xl">{Name}</h1>
			<div class="btn-group py-4">
				<a href="{Website_URL}" class="btn btn-sm btn-secondary rounded-full font-normal">Website</a>
				<a href="mailto:{Email}" class="btn btn-sm btn-secondary rounded-full font-normal">Email</a>
				<a href="tel:{Phone}" class="btn btn-sm btn-secondary rounded-full font-normal">Telefone</a>
			</div>
		</div>
		<figure class="flex flex-col justify-start md:items-center md:col-span-2 lg:col-span-1">
			<span class="">
				<img class="w-20 h-20  md:w-40 md:h-40 object-cover rounded-2xl contrast-[1] mix-blend-multiply grayscale-[100%]" src="{assets+Cover}" alt="">
			</span>
		</figure>

		<div class="md:col-span-6 lg:col-span-3">
			<p>{Description}</p>

		</div>
	</article>
	{/each}
</div>
