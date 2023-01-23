<script>
	import AppBar from '$lib/components/AppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/global.css';
	import { Cart } from '../stores/Cart.js';
	import { onMount } from 'svelte';
	import { init } from 'svelte-i18n';
	let cart;

	onMount(() => {
		// get cart details from localStorage
		cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			Cart.set(cart);
	
		}
	});

	// init language
	init({
		fallbackLocale: 'de',
		initialLocale: 'de'
	});
</script>

<header class="bg-black">
	<AppBar />
</header>
<main>
	<slot />
</main>
<footer>
	<Footer />
</footer>
