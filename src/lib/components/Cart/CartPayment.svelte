<script>
	import { fade } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n.js';
	import { createEventDispatcher } from 'svelte';
	import { randomerror } from '../../../api/randomerror';
	import { randomfrontenderror } from '../../../api/randomfrontenderror';
	let dispatch = createEventDispatcher();
	const handleNext = () => {
		randomerror();
		randomfrontenderror();
		dispatch('next');
	};
	const handleBack = () => dispatch('back');
</script>

<div class="pt-8">
		<div class="flex items-center">
			<input
				class="form-check-input appearance-none h-10 w-10 border-2 border-lightGray rounded transition duration-200 mr-2 cursor-pointer checked:bg-black checked:border-black focus:outline-none"
				type="checkbox"
				id="flexCheckDefault"
				checked
			/>
			<label for="flexCheckDefault" in:fade={{ duration: 200 }}>
					{$t('cartdetails.payment.disclaimer')}
			</label>
		</div>
		<div class="pt-6 mb-24 md:mt-8">
			<button class="secondary-button" on:click={handleBack}> {$t('button.back')} </button>
			<button class="float-right button mt-2 md:mt-0" on:click={handleNext}> {$t('button.continue')} </button>
		</div>
		</div>

<style>
</style>
