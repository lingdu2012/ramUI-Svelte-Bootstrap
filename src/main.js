import App from './App.svelte';
import "./scss/custom.scss";

const app = new App({
	target: document.body,
	props: {
		name: 'RamUI-Svelte-Bootstrap'
	}
});

export default app;