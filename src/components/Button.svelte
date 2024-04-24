<script lang="ts">
  type buttonSizes = 'small' | 'medium' | 'large' | 'read-more';

  export let size: buttonSizes = 'small';
  export let text: string;
  export let onClick: () => void;
</script>

<a href={size === 'read-more' ? null : '/volunteer'} on:click={onClick} class={size}>
  {text}
</a>

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

  .read-more {
    width: 7em;
    height: 2em;
    padding: 1em;
  }

  a {
    border-radius: 8px;
    cursor: pointer;

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

    &:hover {
      background-color: #ffd76b;
    }
  }
</style>
