<script>
  import compContent from '$lib/contents/components.json';

  const issues = compContent.issues;
</script>

<section class="issues">
  <div class="issues-header">
    <h2>Problemas</h2>
    <p>
      Buscamos alcançar melhores resultados e um desenvolvimento sustentável que nos permita
      proporcionar uma melhor qualidade de vida a comunidade do Bairro Jardim Renascer e arredores,
      em Cuiabá - MT, ofertando atividades como: Alfabetização e letramento matemático, xadrez,
      judô, esportes radicais (slackline, skate e escalada) e trabalhos manuais e artesanias.
    </p>
  </div>

  <div class="issues-container">
    {#each issues as issue}
      <div class="issue-card">
        <div class="issue-icon-container">
          <img src={issue.icon} alt={issue.title} class="issue-icon" />
        </div>
        <h3 class="issue-title">{issue.title}</h3>
        <p class="issue-description">{issue.description}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .issues {
    max-width: 75rem;
    margin: 0 auto;
    padding: 2rem 1rem 5rem 1rem;
  }

  .issues-header h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .issues-header p {
    text-align: center;
    max-width: 50rem;
    margin: 0 auto 4rem;
    font-size: 1rem;
  }

  .issues-container {
    display: grid;
    grid-template-columns: repeat(4, 0.1fr);
    gap: 2em;
    justify-content: center;
    align-items: center;
  }

  .issue-card {
    background: #ffffff;
    border-radius: 0.5em;
    box-shadow: 0 0.25em 0.375em rgba(0, 0, 0, 0.1);
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15em;
    max-height: 24em;
  }

  .issue-icon-container {
    width: 5em;
    height: 5em;
    margin-bottom: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .issue-icon {
    width: 4em;
    height: 4em;
  }

  .issue-title {
    font-size: 1.2rem;
    margin-bottom: 1em;
    text-align: center;
  }

  .issue-description {
    text-align: center;
    margin-bottom: 2em;
  }
</style>
