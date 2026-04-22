<script>
	import Nav from './components/Nav.svelte';
	import Hero from './components/Hero.svelte';
	import About from './components/About.svelte';
	import Projects from './components/Projects.svelte';
	import Skills from './components/Skills.svelte';
	import Resume from './components/Resume.svelte';
	import Contact from './components/Contact.svelte';
	import Footer from './components/Footer.svelte';
	import Blobs from './components/Blobs.svelte';

	let lightMode = $state(false);
	let navOpen = $state(false);

	$effect(() => {
		document.body.classList.toggle('light-mode', lightMode);
		document.body.classList.toggle('nav-open', navOpen);
	});
</script>

<Blobs />
<Nav bind:lightMode bind:navOpen />
<Hero />
<About />
<Projects />
<Skills />
<Resume />
<Contact />
<Footer />
