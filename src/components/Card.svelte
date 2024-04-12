<script lang="ts">
  import compContent from '$lib/contents/components.json';

  type card = (typeof compContent.card)[0];

  export let card: card;
</script>

<div class="news-card">
  <img class="news-image" src={card.imageUrl} alt={card.alt} />
  <div class="news-content">
    <div class="news-title">{card.title}</div>
    <div class="news-summary">{card.summary}</div>
  </div>
</div>

<style>
  .news-card {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .news-image {
    width: 30em;
    display: block;
  }

  .news-content {
    padding: 16px;
  }

  .news-title {
    font-size: 1.5em;
    font-weight: 400;
    margin-bottom: 0.8em;
  }

  .news-summary {
    font-size: 1em;
    font-weight: 300;
    color: #333;
  }
</style>
