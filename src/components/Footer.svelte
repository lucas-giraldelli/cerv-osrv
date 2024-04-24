<script lang="ts">
  import Social from './Social.svelte';
  import type { SocialIconsProps } from '@rodneylab/svelte-social-icons/types/SocialIcons.svelte';
  import { openModal } from 'svelte-modals';

  function handleOpen(title: string, text: string = '') {
    openModal(() => import('./Modal.svelte'), {
      title,
      text,
      text2
    });
  }

  const socials = [
    {
      name: 'facebook' as SocialIconsProps['network'],
      href: 'https://www.facebook.com/osrafaelverlangieri/'
    },
    {
      name: 'instagram' as SocialIconsProps['network'],
      href: 'https://www.instagram.com/osrafaelverlangieri/'
    }
  ];
  const title = 'Nosso endereço e contato';
  const text = `Endereço: Rua Nova Mutum, quadra 31 lote 8  - Jardim Renascer, Cuiabá - MT, 78061-360`;
  const text2 = `Telefone: (65) 99649-3092`;
</script>

<footer>
  <h2>OSRV</h2>
  <ul>
    <li><a href="/tranparency">Transparência</a></li>
    <li><button on:click={() => handleOpen(title, text)}>Endereço e Contato</button></li>
  </ul>

  <ul class="social-icons">
    {#each socials as social}
      <li>
        <a href={social.href} target="_blank">
          <Social network={social.name} />
        </a>
      </li>
    {/each}
  </ul>
</footer>

<style lang="scss">
  footer {
    gap: 2em;
    padding: 3em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    background-color: #0f172a;

    h2 {
      font-size: 5rem;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      gap: 2em;
      padding: 0 !important;

      li {
        list-style: none;

        button {
          background: none;
          color: white;
          border: none;
        }

        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
</style>
