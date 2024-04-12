<script lang="ts">
  import compContent from '$lib/contents/components.json';
  export const items = compContent.carousel.items;
  export const scrollBy = 4;

  const paginationFactor = 175;
  const totalPaginationPixels = scrollBy * paginationFactor;

  $: offset = 0;
  $: atStart = offset === 0;
  $: atEnd = offset <= paginationFactor * (items.length - scrollBy) * -1;

  const move = (direction: number) => {
    if (direction > 0 && !atEnd) {
      offset -= totalPaginationPixels;
    } else if (direction < 0 && !atStart) {
      offset += totalPaginationPixels;
    }
  };
</script>

<section>
  <div class="items" style="transform: translateX({offset}px);">
    {#each items as item}
      <div class="card" style="background-image: url({item.imageUrl});">
        <div class="card-date">{item.date}</div>
        <div class="card-text">{item.text}</div>
        <button class="card-button">→</button>
      </div>
    {/each}
  </div>
</section>

<div>
  <button disabled={atStart} on:click={() => move(-1)}>&larr;</button>
  <button disabled={atEnd} on:click={() => move(1)}>&rarr;</button>
</div>

<style lang="scss">
  section {
    display: flex;
    max-width: 1200px;
    overflow: hidden;
  }

  .items {
    display: flex;
    transition: transform 0.4s ease-in-out;
    transform: translateX(0px);
  }

  div {
    display: flex;
    gap: 1em;

    button {
      background-color: #007bff;
      color: white;
      padding: 0.625em 1.25em;
      border: none;
      border-radius: 0.3125em;
      cursor: pointer;
      align-self: end;
      margin-top: 1.25em;
    }
  }

  .card {
    margin-right: 1em;
    position: relative;
    height: 380px;
    width: 300px;
    border-radius: 15px;
    overflow: hidden;
    color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
  }

  .card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));
  }

  .card-date {
    position: absolute;
    top: 16px;
    left: 16px;
    font-size: 1.2em;
    z-index: 1;
  }

  .card-text {
    position: absolute;
    bottom: 60px;
    left: 16px;
    font-size: 1.2em;
    z-index: 1;
  }

  .card-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 1;
    background-color: transparent;
    color: white;
    font-size: 1em;
    cursor: pointer;
    border: white 1px double;
    border-radius: 2em;
  }
</style>
