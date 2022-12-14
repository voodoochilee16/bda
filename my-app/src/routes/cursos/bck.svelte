<script>
	let ctesp = [
		// { id: '1', name: 'Design de Interfaces – Comunicação para a Economia Azul', domain: '', local: 'ESAD' , image: 'https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80'},
		{ id: '1', name: 'Design de Interfaces – Comunicação para a Economia Azul', domain: '', local: 'ESAD' , image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'},
		{ id: '2', name: 'Design de Comunicação – Produto Alimentar', domain: '', local: 'ESAD' , image: 'https://images.unsplash.com/photo-1555480844-b56f06ac39f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'},
		// { id: '2', name: 'Design de Produto – Marítimo e Fluvial', domain: '', local: 'ESAD' , image: 'https://images.unsplash.com/photo-1598585980563-6617a5144878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'}
		{ id: '2', name: 'Design de Produto – Marítimo e Fluvial', domain: '', local: 'ESAD' , image: 'https://images.unsplash.com/photo-1574852859542-1b41217a7815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'}
	];
	let pgs = [
		{ id: '1', name: 'Design de Comunicação e Literacia da Água', domain: 'Literacia e Cultura da Água', local: 'ESAD' , image: 'https://images.unsplash.com/photo-1555412654-72a95a495858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'},
		{ id: '2', name: 'Artes e Património Náutico', domain: 'Literacia e Cultura da Água', local: 'IPVC' , image: 'https://images.unsplash.com/photo-1443933223857-9ca346228f72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3435&q=80'},
		{ id: '3', name: 'Design de Produto e Espaços Marítimos e Fluviais', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD' , image: 'https://images.unsplash.com/photo-1531745180312-6d01f766beef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80'},
		{ id: '4', name: 'Marketing para a Economia do Mar', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'IPVC' , image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80'},
		{ id: '5', name: 'Gestão de Recursos Hídricos na Economia do Mar', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'IPVC' , image: 'https://images.unsplash.com/photo-1608346985823-35edb5763c14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'},
		{ id: '6', name: 'Construção Naval', domain: 'Construção Naval, Logística e Transporte Marítimo', local: 'IPVC' , image: 'https://images.unsplash.com/photo-1621114458838-4a15f1e7b214?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'},
		{ id: '7', name: 'Logística e Transporte Marítimo', domain: 'Construção Naval, Logística e Transporte Marítimo', local: 'IPVC' , image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80'},
		{ id: '8', name: 'Inovação Alimentar', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UCP' , image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'},
		{ id: '9', name: 'Saúde e Bem-Estar', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'EHB.IPB' , image: 'https://images.unsplash.com/photo-1665159693681-9fbad00a9a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80'}
	];
	let ccd =[
		{ id: '0', name: 'Media e Projetos Visuais para a Sustentabilidade da Água', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Comunicação da Biodiversidade dos Ecossistemas Oceânicos e Fluviais', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Design e Tecnologia da Madeira: Artefactos Culturais do Universo Náutico e Fluvial', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Património Marítimo-Fluvial: Estuque Decorativo', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Tecelagem e Tapeçaria: Recursos Educativos Marítimo-Fluvial', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Comunicação e Disseminação de Ciência Comunitária', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Curadoria e Serviço Educativo aplicado aos Domínios Náutico e Subaquático', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Infografia e Ecossistemas Azuis', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Mapeamento Visual e Literacia da Água', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Ilustração Científica de Ecossistemas Oceânicos', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Design Editorial, Sistemas de Organização Visual e Literacia da Água', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Cultura Marítima: Documentação e Materialidades', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Documentarismo e Património Náutico', domain: 'Literacia e Cultura da Água', local: 'ESAD'},
		{ id: '0', name: 'Design de Espaços e Equipamentos para as Frentes Marítima e Fluvial', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Design de Interiores de Embarcações', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Tratamento e Reutilização de Águas Residuais', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Gestão de Comunicação aplicada aos Desportos Náuticos e Aquáticos', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Gestão de Segurança e Comunicação em Desportos da Água', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Gestão Portuária ', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Identificação de Pressões e Requalificação de Sistemas Fluviais e Lacustres', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Sistemas de Informaçãoo e Apoio na Gestão de Recursos Hídricos', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Métodos de Investigação, Planeamento e Análise de Dados (ESH.UCP)', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Design de Produtos e Serviços da Água', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Design de Produto: Reutilização e Reciclagem de Desperdícios', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: '"Green Design" de Embarcações', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Materiais e Sustentabilidade: Circularidade e Eficiência', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Empreendedorismo e Inovação no contexto da Circularidade e Sustentabilidade da Economia Azul', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Estratégias e Competitividade na Economia do Mar', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Marketing Digital na Economia do Mar', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Princípios de Marketing Estratégico e Economia do Mar', domain: 'Design, Gestão e Marketing de Recursos Hídricos', local: 'ESAD · IPVC'},
		{ id: '0', name: 'Construção Naval', domain: 'Construção Naval, Logística e Transporte Marítimo', local: 'IPVC'},
		{ id: '0', name: 'Máquinas e Sistemas Marítimos ', domain: 'Construção Naval, Logística e Transporte Marítimo', local: 'IPVC'},
		{ id: '0', name: 'Suporte Básico de Vida com DEA a Bordo', domain: 'Construção Naval, Logística e Transporte Marítimo', local: 'IPVC'},
		{ id: '0', name: 'Logística Marítima intermodal', domain: 'Construção Naval, Logística e Transporte Marítimo', local: 'IPVC'},
		{ id: '0', name: 'Logística e Transporte Marítimo ', domain: 'Construção Naval, Logística e Transporte Marítimo', local: 'IPVC'},
		{ id: '0', name: 'Marketing', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Estudos do Consumidor', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Gestão do Ambiente', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Gestão, Marketing e Empreendedorismo', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Métodos de Investigação, Planeamento e Análise de Dados', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Design de Embalagem de Produto Alimentar (ESAD)', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Fotografia Criativa aplicada à Produção Alimentar (ESAD)', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Extração de Filacoides de Macroalgas - Agar, Carragenanas e Alginates (IPVC)', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Atendimento ao Cliente no Sector do Turismo', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Design de Produtos e Experiências Turísticas', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Fitoterapia e Terapias de Água', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Hidrobalneoterapia Avançada', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Análise Sensorial', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Mindfulness e Coaching de Saúde e Bem-Estar', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Qualidade da Água e Segurança em estabelecimentos Termais e Spas', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Salutogenese através da Água', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Técnicas avançadas em Hidrocinesioterapias', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Promoção Turística em regiões de Bem-Estar', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Cultura de Serviços no Setor Turístico', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Marketing do Turismo Outdoor e do Mar (IPVC)', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Nutrição, Ciclo de Vida e Saúde (ESB.UCP)', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Práticas Ambientais Sustentáveis', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Bioativos algas', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Inteligência Emocional', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Gestão Estratégica da Inovação ', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Gestão de Projetos', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Nutrição, Ciclo de Vida e Saúde', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Ciência e Tecnologia Alimentar', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Recursos Aquáticos e Mercado', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
		{ id: '0', name: 'Gestão da Segurança Alimentar', domain: 'Saúde e Bem-Estar: Turismo, Desporto e Biotecnologia', local: 'ESB.UC · EHB.IPB'},
	];
</script>

<svelte:head>
	<title>Cursos • Blue Design Alliance</title>
</svelte:head>
<header class="pt-1 pb-6 bg-white">
	<div class="px-4 sm:px-8 md:px-16 sm:px-0">
		<div class="text-sm breadcrumbs mb-8">
			<ul>
				<!-- <li><a href="/cursos">Cursos</a></li>  -->
			</ul>
		</div>
		<!-- <p class=" text-2xl sm:text-4xl text-accent">Blue Design Alliance</p> -->
		<h1 class="serif text-4xl sm:text-8xl tracking-tight leading-none ">Cursos</h1>
		<p class="mt-2 text-md md:text-2xl xl:text-4xl leading-5 font-normal text-accent">Diferentes percursos de aprendizagem com uma formação superior dedicada à água.</p>
	</div>
</header>

<!-- <div class="mb-4 course-cover h-[20vh] bg-cover lg:bg-fixed bg-center bg-[url(https://images.unsplash.com/photo-1628695381518-c5446c6358a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80)]"></div> -->

<section class="px-2 sm:px-8 md:px-16 sm:px-0 " >
	<section class="mb-4">
		<header class="px-4 sticky top-[64px] bg-base-100 z-50 pb-1">
			<h1 class="text-xl xl:text-3xl leading-tight font-normal tracking-tight text-center serif">Cursos Técnicos Superiores Profissionais</h1>
		</header>
		<h2 class="pb-4 my-2 leading-tight text-gray-400 text-center">Impulso Jovens STEAM</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4">
			{#each ctesp as { id, name, domain, local, image }, i}
			<article class="relative overflow-hidden rounded-lg text-[#FFF] z-10">
				<header class="h-[35vw] sm:h-[30vw] xl:h-[20vw] p-3 sm:p-4 flex flex-col justify-end sm:pb-0 pb-0">
					<p class="grow tracking-tight tracking-tight leading-none serif text-right sm:text-2xl  ">{domain}</p>
					<h1 class="text-2xl sm:text-3xl leading-none font-normal tracking-tight ">{name}</h1>
					<p class="text-2xl sm:text-3xl font-light hidden">{local}</p>
				</header>
				<footer class="flex items-center justify-between p-4">
					<p class=" text-sm">Fevereiro 2023</p>
					<a href="/cursos/pos-graduacao/slug" class="btn btn-xs btn-secondary rounded-full font-normal">Mais info</a>
				</footer>
				<div class="w-[100%] absolute top-0 left-0 right-0 bottom-0 bg-[#9BE4D1] -z-10 flex">
					<img class="contrast-[1] mix-blend-multiply grayscale-[100%] object-cover" src="{image}" alt="">
				</div>
			</article>
			{/each}
		</div>
	</section>


	<section class="mb-4">
		<header class="px-4 sticky top-[64px] bg-base-100 z-50 pb-1">
			<h1 class="text-xl xl:text-3xl leading-tight font-normal tracking-tight text-center serif">Pós-Graduações</h1>
		</header>
		<h2 class="pb-4 my-2 leading-tight text-gray-400 text-center">Impulso Adulto</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4">
			{#each pgs as { id, name, domain, local, image }, i}
			<article class="relative overflow-hidden rounded-lg text-[#FFF] z-10">
				<header class="h-[35vw] sm:h-[30vw] xl:h-[30vw] p-3 sm:p-4 flex flex-col justify-end sm:pb-0 pb-0">
					<p class="grow tracking-tight tracking-tight leading-none serif text-right sm:text-3xl  ">{domain}</p>
					<h1 class="text-2xl sm:text-4xl leading-none font-normal tracking-tight ">{name}</h1>
					<p class="text-2xl sm:text-3xl font-light  hidden">{local}</p>
				</header>
				<footer class="flex items-center justify-between p-4">
					<p class=" text-sm">Fevereiro 2023</p>
					<a href="/cursos/pos-graduacao/slug" class="btn btn-xs btn-secondary rounded-full font-normal">Mais info</a>
				</footer>
				<div class="w-[100%] absolute top-0 left-0 right-0 bottom-0 bg-[#9BE4D1] -z-10 flex">
					<img class="contrast-[1] mix-blend-multiply grayscale-[100%] object-cover" src="{image}" alt="">
				</div>
			</article>
			{/each}
		</div>
	</section>
	<section class="mb-4">
		<header class="px-4 sticky top-[64px] bg-base-100 z-50 pb-1">
			<h1 class="text-xl xl:text-3xl leading-tight font-normal tracking-tight text-center serif">Cursos de Curta Duração</h1>
		</header>
		<h2 class="pb-4 my-2 leading-tight text-gray-400 text-center">Impulso Adulto</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4">

			{#each ccd as { id, name, domain, local, image }, i}
			<article style="background-image:{image};" class="rounded-lg bg-cover bg-center bg-white">
				<header class="h-[35vw] sm:h-[30vw] xl:h-[15vw] p-3 sm:p-4 flex flex-col justify-end sm:pb-0 pb-0 ">
					<p class="grow tracking-tight tracking-tight leading-none serif text-right sm:text-2xl text-stone-400 ">{domain}</p>
					<h1 class="text-2xl sm:text-3xl leading-none font-normal tracking-tight text-stone-700">{name}</h1>
					<p class="text-2xl sm:text-3xl font-light text-stone-400 hidden">{local}</p>
				</header>
				<footer class="flex items-center justify-between p-4">
					<p class="text-black text-sm">Fevereiro 2023</p>
					<a href="" class="btn btn-xs btn-outline rounded-lg font-normal">Mais info</a>
				</footer>
			</article>
			{/each}
		</div>

	</section>
</section>


<style lang="postcss">

</style>
