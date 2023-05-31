<template>
  <section class="portfolio">
    <h1>I MIEI PROGETTI</h1>
    <p>Vi presento alcuni dei progetti che ho realizzato.</p>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div v-for="project in projects" class="col-12 card my-5">
          <div class="card__inner">
            <div class="card__side card__side--front">
              <div class="card__image-wrapper">
                <img
                  :src="project.img"
                  :alt="project.name"
                  class="card__image"
                />
              </div>
              <div class="card__body card__body--flex">
                <h2 class="card__title">{{ project.name }}</h2>
                <span class="card__arrow">&rarr;</span>
              </div>
            </div>
            <div class="card__side card__side--back">
              <div class="card__body">
                <p>
                  {{ project.description }}
                </p>
                <a :href="project.repo">Vai al GITHUB</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Discord",
          description:
            "Riproduzione della homepage del sito utilizzando HTML e CSS.",
          repo: "https://github.com/NicholasPeara92/htmlcss-discord",
          img: "Discord.png",
        },
        {
          name: "WhatsApp",
          description:
            "Creazione della schermata principale dell'omonima web app con ricerca delle chat per nome, possibilità di interazione con le varie chat e aggiornamento delle date in base alle interazioni avvenute con l'utente. Linguaggi utilizzati: HTML, CSS, JAVASCRIPT.",
          repo: "https://github.com/NicholasPeara92/vue-boolzapp",
          img: "/src/assets/projects/WhatsApp.png",
        },
        {
          name: "Design Agency",
          description:
            "Riproduzione dell' homepage di un sito utilizzando HTML, CSS, VUEJS.",
          repo: "https://github.com/NicholasPeara92/proj-html-vuejs",
          img: "/src/assets/projects/WebAgency.png",
        },
        {
          name: "Netflix",
          description:
            "Creazione di una sezione di ricerca ispirata al famoso sito utilizzando chiamate API attraverso AXIOS.",
          repo: "https://github.com/NicholasPeara92/vite-boolflix",
          img: "/src/assets/projects/Netflix.png",
        },
        {
          name: "Deliveroo",
          description:
            "Progetto realizzato in team rivisitando il il sito di delivery. Il sito fornisce all'utente la possibilità di ricercare il suo ristorante preferito filtrando per tipo e ordinare le sue pietanze desiderate. Al termine del form dei propri dati e la conferma del pagamento viene inviata una mail di conferma dell'ordine all'utente. Una seconda sezione è dedicata invece ai ristoratori dove possono registrarsi al sito, inserire i propri ristoranti e i menù, avere un recap degli ordini ricevuti dai clienti. Il tutto è stato realizzato in due parti: front-end con VUEJS, back-end con LARAVEL e il datababase con MYSQL.",
          repo: "https://github.com/NicholasPeara92/deliveboo-front",
          img: "/src/assets/projects/Deliveroo.png",
        },
        {
          name: "DC Comics",
          description:
            "Riproduzione della sezione comics del sito DC utilizzando LARAVEL e chiamate API per fornire la lista dei vari comics.",
          repo: "https://github.com/NicholasPeara92/laravel-dc-comics",
          img: "/src/assets/projects/DCcomics.png",
        },
        {
          name: "Dropbox",
          description:
            "Riproduzione della homepage del famoso sito utilizzando HTML e CSS.",
          repo: "https://github.com/NicholasPeara92/htmlcss-dropbox",
          img: "/src/assets/projects/Dropbox.png",
        },
        {
          name: "Spotify Web",
          description:
            "Copia della famosa web app di streaming musicale utilizzando HTML, CSS e bootstrap.",
          repo: "https://github.com/NicholasPeara92/html-css-spotifyweb",
          img: "/src/assets/projects/SpotifyWeb.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  padding: 100px;
  color: #d5d4c2;
  h1,
  a {
    color: #8f6e5d;
    text-decoration: none;
  }
  a:hover {
    color: rgb(108, 97, 69);
  }
}
img {
  display: block;
  max-width: 100%;
}
/* ======================== */
.card {
  width: 400px;
  height: 450px;
  perspective: 800px;
  background-color: inherit;
  border-color: transparent;
}
.card__inner {
  position: relative;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s;
}
.card:hover .card__inner {
  transform: rotateY(-180deg);
}
.card__side {
  border-radius: 10px;
  position: absolute;
  inset: 0;
  background-color: #151515;
  display: grid;
  grid-template-rows: 350px 1fr;
  backface-visibility: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
.card__side--back {
  transform: rotateY(180deg);
}
.card__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.card__body {
  padding: 16px;
  font-size: 12px;
}
.card__body--flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__title {
  font-size: 16px;
  text-transform: uppercase;
  margin-right: 10px;
}
.card__arrow {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 2px solid #000;
  border-radius: 50%;
}
@media only screen and (max-width: 768px) {
  .portfolio {
    padding: 100px 10px 10px 10px;
  }
}
</style>
