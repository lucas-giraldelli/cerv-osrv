<script>
</script>

<div class="photo-grid">
  <div class="photo-large">
    <img src={largePhoto} alt="Group of joyful children in school uniforms" loading="lazy" />
  </div>
  <div class="photo-small top-right">
    <img src={topRightPhoto} alt="Happy children holding bottles" loading="lazy" />
  </div>
  <div class="photo-small bottom-left">
    <img src={bottomLeftPhoto} alt="Child in a headscarf smiling broadly" loading="lazy" />
  </div>
  <div class="photo-small bottom-right">
    <img src={bottomRightPhoto} alt="Children smiling behind window bars" loading="lazy" />
  </div>
</div>

<style>
  .photo-grid {
    max-width: 300px;
    margin: auto;
  }

  .photo-large,
  .photo-small {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }

  .photo-small {
    width: calc(50% - 5px);
    display: inline-block;
  }

  .top-right {
    float: right;
  }

  .bottom-left,
  .bottom-right {
    clear: both;
  }

  .bottom-right {
    float: right;
  }

  img {
    width: 100%;
    display: block;
    border: 0;
  }
</style>
