<script lang="ts">
  import content from '$lib/contents/pages.json';
  import { inview } from 'svelte-inview';
  import Carousel from '../../components/Carousel.svelte';

  const newsItem = content.news.card;

  let animatePhotos: string;

  const handleEnter = () => {
    animatePhotos = 'inview';
  };
</script>

<section class="news-container">
  <h1>Últimas notícias</h1>
  <div class="news-grid">
    {#each newsItem as item}
      <article class="news-card">
        <div class="news-image" style="background-image: url({item.imageUrl});"></div>
        <div class="news-details">
          <div class="news-title">{item.title}</div>
          <div class="news-summary">{item.summary}</div>
          <button class="news-read-more-button">&rarr;</button>
        </div>
      </article>
    {/each}
  </div>
  <div use:inview class={`photos ${animatePhotos}`} on:inview_enter={handleEnter}>
    <h2>Fotos de eventos</h2>
    <Carousel scrollBy={1} />
  </div>
</section>

<style>
  .news-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.7em;
    animation: grow 1s ease forwards;
  }

  .news-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    border-radius: 0.5em;
    overflow: hidden;
    box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);
  }

  .news-image {
    flex: 1;
    background-size: cover;
    background-position: right;
    margin-top: -5px;
  }

  .news-details {
    flex: 2;
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #e2e8f0;
  }

  .news-title {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .news-summary {
    font-size: 0.9rem;
    color: #566a7f;
  }

  .news-read-more-button {
    background-color: #007bff;
    color: white;
    padding: 0.625em 1.25em;
    border: none;
    border-radius: 0.3125em;
    cursor: pointer;
    align-self: end;
    margin-top: 1.25em;
  }

  h1,
  h2 {
    text-align: center;
    font-size: 2rem;
  }

  h1,
  h2 {
    padding-bottom: 1em;
  }

  h2 {
    padding-top: 2em;
  }

  .photos {
    margin-bottom: 4em;
  }
</style>
