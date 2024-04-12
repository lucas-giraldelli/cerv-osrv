<script>
  import content from '$lib/contents/pages.json';
  import Button from '../components/Button.svelte';
  import PhotoStack from '../components/PhotoStack.svelte';

  const { title, description, buttonText } = content.home;
</script>

<section class="home-section">
  <div class="text-content">
    <h1>{title}</h1>
    <p>{description}</p>
    <Button text={buttonText} size="large" />
  </div>
  <PhotoStack />
</section>

<style lang="scss">
  .home-section {
    height: 100vh;
    display: flex;
    align-items: start;
    justify-content: center;
    max-width: 50rem;
    margin: auto;
    padding: 6em 0;
    gap: 2em;
  }

  .text-content {
    flex-basis: 50%;
    animation: slideInFromLeft 2s ease forwards;

    h1 {
      color: #006ca8;
      line-height: normal;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      width: 16em;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
</style>
