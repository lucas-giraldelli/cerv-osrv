<script>
  import Footer from '../components/Footer.svelte';
  import Navigation from '../components/Navigation.svelte';
  import '../css/global.scss';
  import { SvelteToast } from '@zerodevx/svelte-toast';

  export const prerender = true;
  export const trailingSlash = 'always';
</script>

<SvelteToast />
<Navigation />
<main>
  <slot />
</main>
<Footer />
