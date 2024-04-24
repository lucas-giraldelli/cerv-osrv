<script lang="ts">
  import Card from '../../components/Card.svelte';
  import compContent from '$lib/contents/components.json';
  import content from '$lib/contents/pages.json';

  const { title } = content.tranparency;
  const cards = compContent.card;
</script>

<section>
  <h1>{title}</h1>
  <article class="card-container">
    {#each cards as card}
      <Card {card} />
    {/each}
  </article>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    animation: slideInFromLeft 2s ease forwards;

    h1 {
      margin-bottom: 1em;
    }

    & .card-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1em;
      padding: 1em 0 4em 0;
    }
  }
</style>
