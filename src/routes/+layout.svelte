<script>
  import Footer from '../components/Footer.svelte';
  import Navigation from '../components/Navigation.svelte';
  import '../css/global.scss';
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import { Modals, closeModal } from 'svelte-modals';
  import { fade } from 'svelte/transition';

  export const prerender = true;
  export const trailingSlash = 'always';
</script>

<Modals>
  <button slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
</Modals>
<SvelteToast />
<Navigation />
<main>
  <slot />
</main>
<Footer />

<style>
  .backdrop {
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
</style>
