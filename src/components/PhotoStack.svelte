<script>
  import compContent from '$lib/contents/components.json';

  const { imageMain, imageTop, imageMiddle, imageBottom } = compContent.photoStack;
</script>

<article class="photo-stack">
  <img class="photo-main" src={imageMain} alt="Main children laughing" />
  <img class="photo-top" src={imageTop} alt="Top children laughing" />
  <img class="photo-middle" src={imageMiddle} alt="Middle children laughing" />
  <img class="photo-bottom" src={imageBottom} alt="Bottom children laughing" />
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
    }

    .photo-main {
      width: 17.5em;
    }

    .photo-top {
      position: absolute;
      bottom: -10em;
      left: 3em;
      z-index: 3;

      width: 10em;
    }

    .photo-middle {
      position: absolute;
      top: 9em;
      right: -2em;
      z-index: -1;

      width: 16.875em;
    }

    .photo-bottom {
      position: absolute;
      top: -1em;
      right: -1em;
      z-index: 1;

      width: 10em;
    }
  }
</style>
