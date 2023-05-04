<template>
  <div id="about">
    <section class="image"></section>
    <section class="text my-5 mx-5">
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
        facilis voluptatem aliquid natus iure? Rerum porro iste neque quod
        facilis cupiditate possimus voluptatem corrupti, quae beatae asperiores
        omnis illo magni?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
        facilis voluptatem aliquid natus iure? Rerum porro iste neque quod
        facilis cupiditate possimus voluptatem corrupti, quae beatae asperiores
        omnis illo magni?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
        facilis voluptatem aliquid natus iure? Rerum porro iste neque quod
        facilis cupiditate possimus voluptatem corrupti, quae beatae asperiores
        omnis illo magni?
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
  color: #a91e02;
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
