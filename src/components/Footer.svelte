<script lang="ts">
  import Social from './Social.svelte';
  import type { SocialIconsProps } from '@rodneylab/svelte-social-icons/types/SocialIcons.svelte';

  const socials: Array<SocialIconsProps['network']> = ['facebook', 'twitter', 'instagram'];
</script>

<footer>
  <h2>OSRV</h2>
  <ul>
    <li><a href="/">Apoiadores</a></li>
    <li><a href="/">Transparência</a></li>
    <li><a href="/">Endereços</a></li>
    <li><a href="/">Contato</a></li>
  </ul>

  <ul>
    {#each socials as name}
      <li>
        <a href="/">
          <Social network={name} />
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
      li {
        list-style: none;

        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
</style>
