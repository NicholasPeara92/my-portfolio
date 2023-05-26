<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-start align-items-center ps-5">
        <ProfileCard />
      </div>
      <div class="col contacts">
        <h2 class="mb-5">CONTACTS</h2>
        <ul>
          <li><i class="fa fa-envelope icon"></i> nicholas.peara@gmail.com</li>
          <li><i class="fa fa-phone icon"></i> +39 3472541305</li>
          <li>
            <i class="fa fa-instagram icon"></i>
            instagram.com/nicholasp_92
          </li>
          <li>
            <i class="fa fa-linkedin icon"></i>
            linkedin.com/in/nicholas-peara-451010210/
          </li>
          <li><i class="fa fa-github icon"></i> github.com/NicholasPeara92</li>
        </ul>
      </div>
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
  .contacts {
    color: #d5d4c2;
    ul {
      list-style: none;
      font-size: 1.8rem;
      padding-left: 0;
      li {
        margin-bottom: 40px;
        i {
          color: #8f6e5d;
        }
      }
    }
  }
}
</style>
