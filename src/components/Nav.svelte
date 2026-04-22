<script>
	let { lightMode = $bindable(false), navOpen = $bindable(false) } = $props();

	let links = ['About', 'Projects', 'Skills', 'Resume', 'Contact'];
</script>

<nav>
	<div class="nav-container">
		<div class="nav-logo">Steven Rowe</div>
		<div class="nav-right">
			<ul class="nav-links">
				{#each links as link}
					<li><a href={`#${link.toLowerCase()}`} onclick={() => (navOpen = false)}>{link}</a></li>
				{/each}
			</ul>

			<button
				class="theme-btn"
				onclick={() => (lightMode = !lightMode)}
				title="Toggle theme"
				aria-label="Toggle theme"
			>
				{#if lightMode}
					<span class="theme-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<defs>
								<linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stop-color="#C8AAFF" />
									<stop offset="100%" stop-color="#7EC8FF" />
								</linearGradient>
							</defs>
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="url(#moonGrad)" />
						</svg>
					</span>
				{:else}
					<span class="theme-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<circle cx="12" cy="12" r="5" fill="#FFD700" />
							<g fill="#FFA500" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round">
								<line x1="12" y1="1.5" x2="12" y2="4" />
								<line x1="12" y1="20" x2="12" y2="22.5" />
								<line x1="1.5" y1="12" x2="4" y2="12" />
								<line x1="20" y1="12" x2="22.5" y2="12" />
								<line x1="4.4" y1="4.4" x2="6.2" y2="6.2" />
								<line x1="17.8" y1="17.8" x2="19.6" y2="19.6" />
								<line x1="19.6" y1="4.4" x2="17.8" y2="6.2" />
								<line x1="6.2" y1="17.8" x2="4.4" y2="19.6" />
							</g>
						</svg>
					</span>
				{/if}
			</button>

			<button class="hamburger" onclick={() => (navOpen = !navOpen)} aria-label="Toggle navigation">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</div>
</nav>
