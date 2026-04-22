<script>
	const projects = [
		{
			image: '/media/mtg-3.png',
			title: 'Magic: The Cataloger',
			description:
				'An application that helps me organize and keep track of my cards. You can also build decks and view the stats and cost for your deck to see what needs improving.',
			note: "if you would like a demo, send me a message and I'll get you setup",
			tags: [
				'React',
				'Tailwind',
				'Node.js (Express)',
				'Supabase',
				'PostgreSQL',
				'SQLite',
				'Mobile friendly'
			],
			link: 'https://mtg.horizonlab.dev'
		},
		{
			image: '/media/finance-1.png',
			title: 'Finance Tracker',
			description:
				'This helps me keep track of the numerous credit cards my family uses. At a quick glance, I am able to know how much money has been spent and where and how much money we have left in the budget.',
			tags: ['React', 'Tailwind', 'PocketBase', 'PWA', 'Mobile first']
		},
		{
			title: 'HomeLab',
			description:
				'I created a homelab server to learn about Infrastructure and VMs. I have also introduced a NAS for storage, so now I have my own private cloud that I can access from anywhere in the world. I also have my own local AI model running in a VM. Now I have my own personal "ChatGPT" locally, accessible to me anywhere and all data stays with me.',
			tags: ['ProxMox', 'NAS', 'Ubuntu Server', 'Raspberry Pi', 'TailScale', 'Local LLM Ai']
		}
	];
</script>

<section id="projects">
	<h2 class="section-title">Projects</h2>
	<p class="section-subtitle">A selection of things I've built and hosting myself.</p>

	<div class="projects-grid">
		{#each projects as project}
			<div class="project-card">
				{#if project.image}
					<div class="project-image">
						<img src={project.image} alt="{project.title} screenshot" />
					</div>
				{/if}
				<div class="project-body">
					<h3 class="project-title">{project.title}</h3>
					<p class="project-description">
						{project.description}
						{#if project.note}
							<br /><br />
							<i>{project.note}</i>
						{/if}
					</p>
					<div class="project-tags">
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
					{#if project.link}
						<div class="project-links">
							<a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo →</a>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
