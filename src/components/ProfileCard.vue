<template>
  <div class="card card1">
    <div class="border">
      <h2>I miei social</h2>
      <div class="icons">
        <a
          href="https://www.instagram.com/nicholasp_92/"
          class="icon icon--instagram"
          target="_blank"
        >
          <i class="fa fa-instagram icon" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/NicholasPeara92"
          class="icon icon--github"
          target="_blank"
        >
          <i class="fa fa-github icon" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/nicholas-peara-451010210/"
          class="icon icon--linkedin"
          target="_blank"
        >
          <i class="fa fa-linkedin icon" aria-hidden="true"> </i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.border {
  height: 600px;
  width: 480px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
}

.border:hover {
  border: 1px solid #000000;
}

h2 {
  color: #737373;
  margin: 25px;
  opacity: 0;
  transition: opacity 1s;
}

h2:hover {
  color: #8f6e5d;
  cursor: pointer;
}

.fa {
  opacity: 0;
  transition: opacity 1s;
}

.card {
  height: 620px;
  width: 500px;
  background: #808080;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: #000;
  box-shadow: 0 70px 63px -60px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.card1 {
  background: url("../assets/img4.jpeg") center center no-repeat;
  background-size: 620px;
}

.card1:hover {
  background: url("../assets/img4.jpeg") left center no-repeat;
  background-size: 970px;
}

.card1:hover h2 {
  opacity: 1;
}

.card1:hover .fa {
  opacity: 1;
}
.card1:hover a {
  outline: 2px solid;
  transition-property: outline-offset, outline-color, background-color;
  transition-duration: 0.25s;
}
a {
  text-align: center;
  color: #737373;
  text-decoration: none;
  font-size: 26px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  margin: 15px;
}
.icons {
  font-size: 32px;
  position: absolute;
  fill: #737373;
  color: #737373;
  height: 150px;
  top: 226px;
  left: 20px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.icon:hover {
  color: white;
  cursor: pointer;
}
.icon:hover {
  outline-offset: 4px;
}
.icon i {
  margin: auto;
}
.icon:hover i {
  animation: shake 0.25s;
}
.icon--instagram:hover {
  background-image: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  outline-color: #a02d76;
}
.icon--twitter:hover {
  background-color: #1da1f2;
  outline-color: #1da1f2;
}
.icon--linkedin:hover {
  background-color: #0077b5;
  outline-color: #0077b5;
}
.icon--github:hover {
  background-color: #2ea44f;
  outline-color: #2ea44f;
}
@keyframes shake {
  10% {
    transform: rotate(15deg);
  }
  20% {
    transform: rotate(-15deg);
  }
  30% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-15deg);
  }
}
@media only screen and (max-width: 425px) {
  .card {
    width: 300px;
    height: 410px;
  }
  .card1 {
    background-size: 410px;
  }
  .card1:hover {
    background-size: 550px;
  }
  .border {
    height: 380px;
    width: 260px;
  }
  .icons {
    font-size: 16px;
    position: absolute;
    fill: #737373;
    color: #737373;
    top: 160px;
    left: 20px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
