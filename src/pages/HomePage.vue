<template>
  <section class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col justify-content-center align-items-center">
          <img src="../assets/heroLogo.png" alt="" />
        </div>
        <div
          id="text-col"
          class="col-12 col-md-6 justify-content-center align-items-center"
        >
          <h1 class="title" style="--duration: 1s">
            <span style="--delay: 0.5s">Nicholas Peara</span>
            <span style="--delay: 1s">Web Developer</span>
          </h1>
          <p>
            Sono un Full-Stack Web Developer specializzato nello sviluppo di
            siti e applicazioni web.
          </p>
          <a href="../src/assets/CV.pdf" class="btn" download>SCARICA CV</a>
        </div>
      </div>
      <Socials />
    </div>
  </section>
</template>

<script>
import Socials from "../components/Socials.vue";
export default {
  components: {
    Socials,
  },
};
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  img {
    width: 100%;
    object-fit: contain;
    max-width: 800px;
    max-height: 650px;
  }
}
.title span {
  --total: calc(var(--duration) + var(--delay));
  position: relative;
  display: block;
  color: transparent;
  overflow: hidden;
  animation: reveal 1s var(--total) forwards;
}
.title span::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: left;
  background-color: black;
  animation: rollIn var(--duration) var(--delay) forwards,
    rollOut var(--duration) var(--total) forwards;
}
.title span:nth-child(2)::after {
  border-top: 3px solid black;
}
@keyframes reveal {
  to {
    color: #d5d4c2;
  }
}
@keyframes rollIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
@keyframes rollOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(105%);
  }
}
#text-col {
  padding-top: 200px;
  padding-right: 80px;
  padding-left: 0;
  text-align: center;
  h1 {
    font-size: 4rem;
    // color: #d5d4c2;
    span {
      // color: black;
      font-weight: bold;
    }
  }
  p {
    font-size: 1.5rem;
    color: #d5d4c2;
  }
}
.btn {
  width: 200px;
  height: 2.3em;
  margin: 0.5em;
  background: black;
  color: white;
  border: none;
  border-radius: 0.625em;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

a:hover {
  color: black;
}

a:after {
  content: "";
  background: white;
  position: absolute;
  z-index: -1;
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-45deg) scale(0, 1);
  transition: all 0.5s;
}

a:hover:after {
  transform: skewX(-45deg) scale(1, 1);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.home {
  padding-top: 40px;
  padding-bottom: 40px;
}
@media only screen and (max-width: 1199px) {
  #text-col {
    padding-top: 100px;
    padding-right: 0;
    h1 {
      font-size: 3rem;
      padding-left: 5px;
      padding-right: 5px;
      padding-bottom: 15px;
      span {
        padding-top: 5px;
      }
    }
    p {
      font-size: 1.5rem;
    }
  }
}
@media only screen and (max-width: 768px) {
  #text-col {
    padding-top: 0;
    padding-right: 0;
    h1 {
      font-size: 2rem;
      padding-left: 5px;
      padding-right: 5px;
      padding-bottom: 15px;
      span {
        padding-top: 5px;
      }
    }
    p {
      font-size: 1rem;
    }
  }
}
</style>
