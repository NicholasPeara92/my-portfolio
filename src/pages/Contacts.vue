<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-start align-items-center ps-5">
        <ProfileCard />
      </div>
      <div class="col"></div>
    </div>
  </div>
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
.container-fluid {
  padding-top: 120px;
  padding-bottom: 100px;
}
</style>
