<script>
  import content from '$lib/contents/pages.json';
  import ImgQR from '@svelte-put/qr/img/QR.svelte';
  import { inview } from 'svelte-inview';
  import { toast } from '@zerodevx/svelte-toast';

  const data = content.volunteer.pixKey;
  const logo = 'img/logo.png';

  let animateDonation = '';

  const { title: storyTitle, data: impactStories } = content.volunteer.stories;
  const { how } = content.volunteer;
  const { donate: donation } = content.volunteer;

  function copyPixKey() {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        toast.push('Chave PIX copiada para área de transferência!');
      })
      .catch((_) => {
        toast.push('Não foi possível copiar o PIX!');
      });
  }

  const handleEnter = () => {
    animateDonation = 'inview';
  };
</script>

<section class="donation-section">
  <h2>{how.title}</h2>
  <p>{how.description}</p>
</section>

<section class="pix-instructions">
  <h2>{donation.title}</h2>
  <p>{donation.description}</p>
  <div class="pix-qr-code">
    <ImgQR {data} {logo} />
  </div>
  <button on:click={copyPixKey} class="copy-pix">{donation.button}</button>
</section>

<section use:inview class={`impact-stories ${animateDonation}`} on:inview_enter={handleEnter}>
  <h2>{storyTitle}</h2>
  {#each impactStories as story}
    <div class="impact-story">
      <h3>{story.title}</h3>
      <p>{story.content}</p>
    </div>
  {/each}
</section>

<style lang="scss">
  .donation-section,
  .pix-instructions,
  .impact-stories {
    padding: 2rem;
    margin: 1rem 0;
    border-radius: 8px;
    background-color: #f9f9f9;
  }

  .donation-section,
  .pix-instructions {
    animation: grow 1s ease forwards;
  }

  .pix-qr-code {
    width: 18em !important;
  }

  .impact-story {
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .copy-pix {
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
  }
</style>
