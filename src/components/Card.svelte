<script lang="ts">
  import compContent from '$lib/contents/components.json';
  import { openModal } from 'svelte-modals';

  type card = (typeof compContent.card)[0];

  export let card: card;

  const title = card.title;
  const text = card.text;

  function handleModal(title: string, text: string) {
    openModal(() => import('./Modal.svelte'), {
      title,
      text
    });
  }
</script>

<div class="news-card">
  <div class="image-container">
    <img class="news-image" src={card.imageUrl} alt={card.alt} />
  </div>
  <div class="news-content">
    <div class="news-title">{card.title}</div>
    <div class="news-summary">{card.summary}</div>
    <button on:click={() => handleModal(title, text)}>LEIA MAIS</button>
  </div>
</div>

<style>
  .image-container {
    max-height: 12em;
  }
  .news-card {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 7px 3px rgba(0, 0, 0, 0.1);
    background: #80808029;
  }

  .news-image {
    max-height: 100%;
    width: 30em;
    display: block;
    overflow: hidden;
  }

  .news-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1em;
    height: calc(100% - 13em);
  }

  .news-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5em;
    font-weight: 400;
    min-height: 7em;
  }

  .news-summary {
    font-size: 1em;
    font-weight: 300;
    color: #333;
  }
</style>
