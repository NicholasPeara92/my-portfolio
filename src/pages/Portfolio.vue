<template>
  <section class="portfolio">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card__body">
              <h2 class="card__title">Euphoria</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                reprehenderit! Neque consequatur velit...
              </p>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.portfolio {
  padding: 100px;
}
.card {
  position: relative;
  z-index: 1;
  display: grid;
  place-content: center;
  width: 250px;
  height: 250px;
  color: #a18a96;
  text-align: center;
  background: url("../assets/projects/FireShot\ Capture\ 001\ -\ Spotify\ web\ -\ 127.0.0.1.png")
    center no-repeat;
  background-size: contain;
  padding: 10px;
  border-radius: 20px;
  overflow: hidden;
}
.card::before,
.card::after {
  content: "";
  position: absolute;
  left: 0;
  z-index: -1;
  width: 100%;
  height: calc(60% + 35px);
  background-color: #fff;
  transition: transform 0.5s 0.25s;
}
.card::before {
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0% 100%);
  transform: translateY(-100%);
}
.card::after {
  bottom: 0;
  clip-path: polygon(0 55%, 100% 0, 100% 100%, 0% 100%);
  transform: translateY(100%);
}
.card__body {
  opacity: 0;
  transition: opacity 0.25s;
}
.card__title {
  color: #6a515e;
  margin-bottom: 15px;
}
.card:hover::before,
.card:hover::after {
  transform: translateY(0);
}
.card:hover .card__body {
  opacity: 1;
  transition-delay: 0.75s;
}
</style>
