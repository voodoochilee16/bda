<script>
	let Metadata = [
		{ description: 'Data início', value: 'Fevereiro 2023'},
		{ description: 'Proprina', value: '€ 360'},
		{ description: 'Créditos', value: '120 ECTS'},
		{ description: 'Duração', value: '4 Semestres'},
		{ description: 'Bolsa', value: 'Impulso Adulto · € 1375'},
		{ description: 'Coord. Científica', value: 'Margarida Azevedo'},
		{ description: 'Coordenação', value: 'José Luís Simões'},
		{ description: 'Local', value: 'IPVC'},
	]
</script>


<div class="px-4 md:px-8 xl:container xl:mx-auto py-5 flex justify-start md:justify-center lg:text-center flex-wrap">
	{#each Metadata as { description, value }, i}
		<dl class="p-2 flex flex-col justify-center basis-1/3 grow md:basis-1/3 xl:basis-1/5 border-black m-1 bg-error/10 rounded-xl">
			<dt class="serif text-error">{description}</dt>
			<dd class="text-lg md:text-2xl text-error">{value}</dd>
		</dl>
	{/each}
</div>