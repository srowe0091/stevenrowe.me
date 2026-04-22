<script>
	const categories = [
		{
			id: 'languages',
			label: 'Languages',
			skills: [
				{ name: 'TypeScript', level: 'core' },
				{ name: 'JavaScript', level: 'core' },
				{ name: 'SQL', level: 'proficient' },
				{ name: 'NoSQL', level: 'proficient' },
				{ name: 'Python', level: 'familiar' },
				{ name: 'Java', level: 'familiar' }
			]
		},
		{
			id: 'frontend',
			label: 'Frontend',
			skills: [
				{ name: 'React', level: 'core' },
				{ name: 'Next.js', level: 'core' },
				{ name: 'React Query', level: 'core' },
				{ name: 'Zustand', level: 'core' },
				{ name: 'Styled Components', level: 'core' },
				{ name: 'Tailwind CSS', level: 'core' },
				{ name: 'CSS/Sass', level: 'core' },
				{ name: 'Material UI', level: 'core' },
				{ name: 'Vite', level: 'core' },
				{ name: 'Webpack', level: 'core' },
				{ name: 'ESBuild', level: 'core' },
				{ name: 'Websockets', level: 'proficient' },
				{ name: 'Redux', level: 'proficient' },
				{ name: 'Storybook', level: 'proficient' },
				{ name: 'React Native', level: 'familiar' }
			]
		},
		{
			id: 'testing',
			label: 'Testing',
			skills: [
				{ name: 'Jest', level: 'core' },
				{ name: 'Mocha', level: 'core' },
				{ name: 'Cypress', level: 'proficient' },
				{ name: 'React Testing Library', level: 'proficient' }
			]
		},
		{
			id: 'backend',
			label: 'Backend & APIs',
			skills: [
				{ name: 'Node.js', level: 'core' },
				{ name: 'Express', level: 'core' },
				{ name: 'REST APIs', level: 'core' },
				{ name: 'GraphQL APIs', level: 'core' },
				{ name: 'tRPC', level: 'core' },
				{ name: 'Websockets', level: 'proficient' },
				{ name: 'PostgreSQL', level: 'proficient' },
				{ name: 'MongoDB', level: 'proficient' },
				{ name: 'Redis', level: 'proficient' },
				{ name: 'ElasticSearch', level: 'familiar' },
				{ name: 'DynamoDB', level: 'familiar' }
			]
		},
		{
			id: 'infra',
			label: 'Infrastructure & DevOps',
			skills: [
				{ name: 'Automation', level: 'core' },
				{ name: 'GitHub Actions', level: 'core' },
				{ name: 'Docker', level: 'core' },
				{ name: 'Auth0', level: 'core' },
				{ name: 'Supabase', level: 'core' },
				{ name: 'Nginx', level: 'core' },
				{ name: 'AWS', level: 'proficient' },
				{ name: 'Terraform', level: 'proficient' },
				{ name: 'CircleCI', level: 'proficient' },
				{ name: 'Kubernetes', level: 'familiar' }
			]
		},
		{
			id: 'tools',
			label: 'Tools & Practices',
			skills: [
				{ name: 'Git', level: 'core' },
				{ name: 'PWA', level: 'core' },
				{ name: 'Technical Leadership', level: 'core' },
				{ name: 'Agile / Scrum', level: 'core' },
				{ name: 'UI/UX Design', level: 'core' },
				{ name: 'Figma', level: 'core' },
				{ name: 'Open Source', level: 'core' },
				{ name: 'AI-assistance (Claude Code, ChatGPT)', level: 'core' }
			]
		}
	];
</script>

<section id="skills">
	<h2 class="section-title">Skills Tree</h2>
	<p class="section-subtitle">Technologies and tools I've worked with across my career</p>

	<div class="skills-legend">
		<div class="legend-item"><span class="legend-dot legend-core"></span>Core / Expert</div>
		<div class="legend-item"><span class="legend-dot legend-proficient"></span>Proficient</div>
		<div class="legend-item"><span class="legend-dot legend-familiar"></span>Familiar</div>
	</div>

	<div class="skills-tree-grid">
		{#each categories as category}
			<div class="skill-category-card skill-category--{category.id}">
				<div class="skill-category-header">
					<span class="skill-category-label">{category.label}</span>
				</div>
				<div class="skill-badges">
					{#each category.skills as skill}
						<span class="skill-badge skill-{skill.level}">{skill.name}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
