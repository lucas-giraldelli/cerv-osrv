<script lang="ts">
  import Button from '../components/Button.svelte';
  import compContent from '$lib/contents/components.json';

  const nav = compContent.nav;
</script>

<nav>
  <a class="logo" href="/">{nav.header_title}</a>
  <ul>
    <li><a href="/about">{nav.first_menu_item}</a></li>
    <li><a href="/news">{nav.second_menu_item}</a></li>
    <li><a href="/volunteer">{nav.third_menu_item}</a></li>
    <li><a href="/tranparency">{nav.fourth_menu_item}</a></li>
  </ul>
  <Button text={nav.button} />
</nav>

<style lang="scss">
  .logo {
    font-size: 1.8em;
    font-weight: 700;
    color: #0369a1;
    text-decoration: none;
  }
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    box-shadow: 0px 3.538894px 7.077788px 0px #00000014;
  }
  ul {
    margin-left: 0;
    display: flex;
    gap: 1.5em;
    li {
      list-style-type: none;
      color: #1d1929;
      a {
        text-decoration: none;
        color: #1d1929;
      }
    }
  }
</style>
