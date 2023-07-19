<script lang="ts">
	import '../assets/styles.css';
	import xyz from '../assets/questions.json';
	let arr = xyz.items.map((x) => x);

	let item = xyz.items[0];

	function getRandomItem() {
		if (arr.length !== 0) {
			const randomIndex = Math.floor(Math.random() * arr.length);
			item = arr[randomIndex];
			arr.splice(randomIndex, 1);
		} else {
			arr = xyz.items.map((x) => x)
		}
	}
</script>

<div class="bgcolor">
	<div class="bgimg" />
	<div class="content">
		<p>Ein einfaches Fragenset für tiefe Gespräche</p>
		<div class="card">{item}</div>
		<button on:click={getRandomItem}>Neues Thema</button>
	</div>
</div>

<style>
	.bgcolor {
		background-image: linear-gradient(180deg, #fff0f0 50%, #3a0000 50%);
		height: 100%;
		width: 100%;
		position: absolute;
	}
	.bgimg {
		position: absolute;
		width: 100%;
		height: 50%;
		bottom: 0;
		background-image: url('../assets/terazzo.svg');
	}
	.content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	@media only screen and (max-width: 800px) {
		.content {
			width: 80%;
		}
	}
	@media only screen and (max-width: 500px) {
		.content {
			width: 95%;
		}
		h1 {
			font-size: 56px;
		}
	}
</style>
