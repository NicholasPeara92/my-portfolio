<template>
  <section class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <img src="../assets/heroLogo.png" alt="" />
          <a href="../assets/CV.pdf" class="btn" download>SCARICA CV</a>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  margin-top: 80px;
}
img {
  max-width: 800px;
}
</style>
