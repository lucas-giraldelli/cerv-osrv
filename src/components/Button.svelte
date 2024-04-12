<script lang="ts">
  type buttonSizes = 'small' | 'medium' | 'large';

  export let size: buttonSizes = 'small';
  export let text: string;
</script>

<a href="/volunteer" class={size}>{text}</a>

<style lang="scss">
  .small {
    width: 5em;
    height: 2em;
    font-weight: 700;
  }

  .medium {
    width: 6em;
    height: 2.2em;
  }

  .large {
    width: 10em;
    height: 2em;
  }

  a {
    border-radius: 8px;

    background-color: #ffcd43;
    border: none;

    color: black;
    font-size: 1.2em;
    font-weight: 800;

    display: flex;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
</style>
