<script context="module">
	export function load({ error }) {
		return {
			props: { message: error.message }
		};
	}
</script>

<script>
export let message
</script>
<div>
    <a href="/products">View all Products..</a>

    <br><br><br>
</div>

