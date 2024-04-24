<script lang="ts">
  import { fly } from 'svelte/transition';

  export let isOpen: boolean;
  export let title: string = '';
  export let text: string = '';
</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fly={{ y: 50 }} on:introstart on:outroend>
    <div class="contents">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    z-index: 4;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }

  .contents {
    min-width: 240px;
    border-radius: 6px;
    padding: 16px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
    max-width: 75vw;
    padding: 3em;
  }

  h2 {
    text-align: center;
    font-size: 24px;
  }

  p {
    text-align: center;
    margin-top: 16px;
  }
</style>
