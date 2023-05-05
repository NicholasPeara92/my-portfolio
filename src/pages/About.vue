<template>
  <div id="about">
    <section class="image"></section>
    <section class="text my-5 mx-5">
      <h2 class="pb-3">About Me</h2>
      <p>
        Ciao, sono Nicholas, un appassionato di tecnologia e sviluppo web. Ho
        iniziato la mia carriera lavorativa in un campo completamente diverso,
        ma la passione per il web mi ha portato ad abbandonare il mio lavoro e
        dedicarmi completamente alla programmazione.
        <br />
        Sono specializzato in front-end development e prediligo l'utilizzo di
        JavaScript come linguaggio di programmazione. Utilizzo principalmente il
        framework VueJs per la creazione di interfacce utente dinamiche ed
        interattive. Tuttavia, ho anche competenze nel back-end development
        utilizzando PHP e il framework Laravel.
        <br />
        Uno dei miei obiettivi principali è quello di acquisire continuamente
        nuove conoscenze e competenze per poter sviluppare applicazioni web
        sempre più performanti e moderne. Sono in grado di lavorare sia in
        autonomia che in team, e mi piace confrontarmi con colleghi e
        collaboratori per trovare soluzioni innovative ai problemi che
        incontriamo durante lo sviluppo di un progetto.
        <br />
        Nel mio portfolio potrai trovare alcuni dei progetti ai quali ho
        lavorato, che dimostrano le mie competenze nel campo della
        programmazione. Sono sempre alla ricerca di nuove sfide e opportunità,
        quindi se sei interessato a collaborare con me, non esitare a
        contattarmi!
      </p>
    </section>
    <section class="image"></section>
    <div class="row justify-content-between">
      <section class="skills col row justify-content-center p-5">
        <img src="../assets/html5.svg" alt="" class="col" />
        <img src="../assets/css3.svg" alt="" class="col" />
        <img src="../assets/bootstrap.svg" alt="" class="col" />
        <img src="../assets/javascript.svg" alt="" class="col" />
        <img src="../assets/vuejs.svg" alt="" class="col" />
        <img src="../assets/sass.svg" alt="" class="col" />
        <img src="../assets/php.svg" alt="" class="col" />
        <img src="../assets/laravel.svg" alt="" class="col" />
        <img src="../assets/mysql.svg" alt="" class="col" />
        <img src="../assets/nodejs.svg" alt="" class="col" />
      </section>
      <div class="col d-flex justify-content-end">
        <section id="education" class="text my-5 mx-5">
          <h2 class="pb-2">Education And Skills</h2>
          <h4>Jr Full Stack Web Developer Trainee</h4>
          <h6 class="py-2">Boolean</h6>
          <ul>
            <li>
              Corso full-time di 700 ore che riprende alcune delle tecnologie
              Front-end e Back-end.
            </li>
            <li>
              Applicazione delle nozioni apprese durante la creazione di
              progetti reali, replicando siti e applicativi web.
            </li>
            <li>
              Progetto finale svolto in team al fine di riprodurre una web app
              complessa attraverso le istruzioni dei project manager.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#about {
  margin: 0;
  color: #e3d4cc;
  padding-top: 80px;
}
li {
  margin-bottom: 15px;
}

p {
  opacity: 0.8;
}

section {
  padding: 40px 0;
}

.image {
  height: 380px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-image: url("../assets/background.jpg");
}

.text {
  position: relative;
  max-width: 800px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(21px);
  -webkit-backdrop-filter: blur(21px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 24px;
  padding: 48px 24px;
}
:where(h2, p) {
  margin: 0;
}
.skills > img {
  max-width: 8.75rem;
  max-height: 8.75rem;
  margin: 20px;
}
</style>
