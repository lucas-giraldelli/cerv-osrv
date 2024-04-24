<script>
  import compContent from '$lib/contents/components.json';

  const { imageMain, imageTop, imageMiddle, imageBottom } = compContent.photoStack;
</script>

<article class="photo-stack">
  <img class="photo-main" src={imageMain} alt="Criança pegando um livro" />
  <img class="photo-top" src={imageTop} alt="Criança andando de skate" />
  <img class="photo-middle" src={imageMiddle} alt="Crianças lutando judô" />
  <img class="photo-bottom" src={imageBottom} alt="Criança escrevendo em um caderno" />
</article>

<style lang="scss">
  .photo-stack {
    position: relative;
    width: 28em;
    animation: slideInFromRight 2s ease forwards;

    .photo-main,
    .photo-top,
    .photo-middle,
    .photo-bottom {
      display: block;
      border-radius: 4%;
    }

    .photo-main {
      width: 17.5em;
    }

    .photo-top {
      position: absolute;
      bottom: -12em;
      left: 2em;
      z-index: 3;
      width: 8em;
    }

    .photo-middle {
      position: absolute;
      top: 10em;
      right: -2em;
      z-index: -1;
      width: 16.875em;
    }

    .photo-bottom {
      position: absolute;
      top: -1em;
      right: -2em;
      z-index: 1;
      width: 10em;
    }
  }
</style>
