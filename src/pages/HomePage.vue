<template>
  <section class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <img src="../assets/heroLogo.png" alt="" />
          <a href="../assets/CV.pdf" download>SCARICA CV</a>
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <ProfileCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";
export default {
  components: {
    ProfileCard,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 80px;
}
img {
  max-width: 800px;
}
</style>
