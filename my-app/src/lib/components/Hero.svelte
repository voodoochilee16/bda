<script>
	import Metadata from '../components/Metadata.svelte';
	import Lead from '../components/Lead.svelte';
</script>

<header class="py-8">
	<div class="px-4 md:px-8 xl:container xl:mx-auto">
		<div class="breadcrumbs mb-4 text-black/50">
			<ul>
			  <li><a href="/cursos">Cursos</a></li> 
			  <li><a href="/cursos/pos-graduacao">Pós-Graduação</a></li> 
			  <li>Design de Comunicação e Literacia da Água</li>
			</ul>
		</div>
		<p class="serif text-2xl sm:text-4xl text-black/30">Pós-Graduação</p>
		<h1 class="text-4xl md:text-8xl tracking-tight leading-none">Design de Comunicação e Literacia da Água</h1>
	</div>
</header>

<main>
	<div class="course-cover h-[60vh] bg-cover lg:bg-fixed bg-center bg-[url(https://images.unsplash.com/photo-1531745180312-6d01f766beef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80)]"></div>
	<nav class="px-4 md:px-8 xl:container xl:mx-auto sticky top-16 z-[1000] bg-white/30 backdrop-blur-lg py-2 mt-4">
		<div class=" flex justify-center md:justify-start md:justify-center align-middle">
			<span class="hidden md:flex flex-col justify-center grow text-xl">Design de Comunicação e Literacia da Água</span>
			<button class="btn btn-sm md:btn-md rounded-full btn-outline gap-2 mr-1 font-normal"> Request Information </button>
			<a href="#" class="btn btn-sm rounded-full md:btn-md btn-accent ml-1 font-normal">Apply Now</a>
		</div>
	</nav>

	<Metadata />
	
	<section class="body-text px-4 lg:px-0 sm:text-xl pt-8 flex justify-center">
		<div class="max-w-4xl prose md:prose-xl prose-headings:font-normal prose-p:leading-6 prose-li:leading-6 md:prose-p:leading-8 md:prose-li:leading-8">
			<p>A Pós-Graduação em Design de Comunicação e Literacia da Água, especialização em Design Circular e Sustentável da Água, é lecionada na ESAD - Escola Superior de Artes e Design, Matosinhos. As unidades curriculares são complementadas com visitas a empresas, organizações, centros de investigação e laboratórios que estimulam a tua aprendizagem num contexto prático e profissional. </p>
			<p>A especialização em Design Circular e Sustentável da Água apresenta-se orientada por valores sensíveis ao potencial do design e a explorar formas culturais, sociais, económicas e territoriais que moldam os ecossistemas contemporâneos. O projeto é valorizado na sua interação sinérgica com uma ecologia azul, onde os recursos hídricos, fluviais e oceânicos são imensos e urgem ser cuidados, preservados e comunicados.</p>
			<p>A Pós-Graduação em Design de Comunicação e Literacia da Água, proporciona a consolidação de conhecimentos, métodos e ferramentas que contribuem para a literacia comunicacional da água, a visualização da informação e o potenciar das possibilidades projetuais da comunicação, capacitando o estudante a dar forma a soluções inteligentes e inclusivas de digitalização de informação e representação visual promotoras de uma cultura azul crítica e sustentada.</p>
			<p>O estudante, para além das competências específicas adquiridas em cada módulo curricular por si escolhido, tem a possibilidade de adquirir e consolidar conhecimentos contextuais, metodológicos e projetuais, formativos para o seu desempenho profissional. Consequentemente, será integrado num contexto promotor da autonomia e colaboração, do pragmatismo e da especulação, dos conhecimentos de ferramentas técnicas e materiais bem como da exploração. Assim, criatividade e cientificidade, experimentação e consciencialização aliam-se em diálogo com o território, os seus agentes e recursos locais e valores globais que conformam emergências do mundo contemporâneo.</p>
		</div>
	</section>
	<section class="action flex flex-row justify-center py-16">
		<a href="" class="btn btn-outline rounded-full font-normal">Informações Detalhadas</a>
	</section>


	<Lead />

	<section>
		<div class="body-text px-4 lg:px-0 sm:text-xl py-4 flex justify-center pb-32">
			<div class="max-w-4xl">
				<h1 class="text-2xl lg:text-4xl py-8">Perguntas Frequentes — FAQ's</h1>
				<div tabindex="0" class="collapse collapse-arrow border-t-[1px] border-gray-300">
					<div class="collapse-title md:text-xl font-regular">
						Quais são as vantagens das microcredenciais?
					</div>
					<div class="collapse-content prose md:prose-xl prose-headings:font-normal prose-p:leading-6 prose-li:leading-6 md:prose-p:leading-8 md:prose-li:leading-8"> 
					  <p>Permitem uma aquisição orientada de aptidões e competências, adaptada a uma sociedade e a um mercado de trabalho em rápida mutação sem, no entanto, substituir as qualificações tradicionais. Constituem percursos de aprendizagem mais flexíveis e modulares Uma maior aceitação das microcredenciais contribuirá para: a inovação social, económica e pedagógica para todas as finalidades - empregabilidade, desenvolvimento pessoal, envelhecimento ativo na era digital, etc.); para que os sistemas de ensino se tornem mais inclusivos; para facilitar as transições no mercado de trabalho.</p>
					</div>
				</div>
				<div tabindex="0" class="collapse collapse-arrow border-t-[1px] border-gray-300">
					<div class="collapse-title md:text-xl font-regular">
						A quem se destinam estas formações?
					</div>
					<div class="collapse-content prose md:prose-xl prose-headings:font-normal prose-p:leading-6 prose-li:leading-6 md:prose-p:leading-8 md:prose-li:leading-8"> 
					  <p>A quem quiser atualizar os seus conhecimentos, aptidões e competências para preencher a lacuna entre a sua educação atual e as necessidades de uma sociedade em rápidas mudanças.</p>
					  <ul>

						  <li>A quem quiser garantir a sua capacitação pessoal, social e profissional através do aperfeiçoamento e/ou requalificação e/ou aquisição de novas competências para participar de modo gratificante na sociedade. </li>
						  <li>Aos agentes e partes interessadas públicas e privadas, em toda a Europa, que procuram formas de ensino e formação mais flexíveis e centradas no formando.</li>
					  </ul>
					</div>
				</div>
				<div tabindex="0" class="collapse collapse-arrow border-t-[1px] border-b-[1px] border-gray-300">
					<div class="collapse-title md:text-xl font-regular">
						Utilidade
					</div>
					<div class="collapse-content prose md:prose-xl prose-headings:font-normal prose-p:leading-6 prose-li:leading-6 md:prose-p:leading-8 md:prose-li:leading-8"> 
					  <p>As microcredenciais são disponibilizadas por instituições de ensino superior e de formação profissional, bem como por organismos privados e podem ser particularmente úteis para as pessoas que pretendam:</p>
					  <ul>
						<li>Consolidar conhecimentos já adquiridos sem concluir um programa completo de ensino superior;</li>
						<li>Melhorar as competências que possuem ou requalificar-se para satisfazer as necessidades do mercado de trabalho ou desenvolver-se profissionalmente após terem começado a trabalhar.</li>
					  </ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>



<style lang="scss">
	.course-cover{
		// min-height: 50vh;
	}
	.body-text{
		
		p{
			margin: 1em 0;
		}
		h1{
			// font-weight: 600;
		}

	}
	.text-vw{
		font-size: calc(8vw);
		// letter-spacing: -.02em;
		line-height: .9em;
	}
	.text-vw-half{
		font-size: 4vw;
		line-height: .9em;
	}
</style>