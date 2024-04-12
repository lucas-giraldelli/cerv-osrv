<script lang="ts">
  import Issues from '../../components/Issues.svelte';
  import { inview } from 'svelte-inview';
  import content from '$lib/contents/pages.json';

  const imageUrl = 'images/about_children.png';

  let animateIssue: string;

  const options = content.about.options;

  const handleEnter = () => {
    animateIssue = 'inview';
  };
</script>

<section class="container">
  <div class="image-section">
    <img src={imageUrl} alt="Children engaging with technology" class="responsive-image" />
  </div>
  <div class="text-section">
    {#each options as option}
      <article>
        <h2>{option.question}</h2>
        <p>
          {option.answer}
        </p>
        <hr />
      </article>
    {/each}
  </div>
</section>
<section use:inview class={animateIssue} on:inview_enter={handleEnter}>
  <Issues />
</section>

<style lang="scss">
  .container {
    display: flex;
    align-items: flex-start;
    max-width: 1200px;
    margin: auto;
    gap: 20px;
    margin-bottom: 8em;
  }

  .image-section {
    flex-basis: 100%;
    max-width: 100%;
    order: 1;
    animation: slideInFromLeft 1500ms ease forwards;
  }

  .responsive-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .text-section {
    flex: 1;
    order: 2;
    padding: 0 1em;
    animation: slideInFromRight 1500ms ease forwards;
  }

  h2 {
    color: #333;
    padding-bottom: 0;
  }

  article + article {
    padding-top: 0.7em;
  }

  p {
    color: #666;
  }

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }

  article {
    p {
      padding: 0.5em 0;
    }
  }

  @media (min-width: 768px) {
    .image-section,
    .text-section {
      flex-basis: 50%;
    }
    .image-section {
      order: 0;
    }
    .text-section {
      order: 1;
    }
  }
</style>
