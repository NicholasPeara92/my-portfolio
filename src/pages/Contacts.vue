<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-center align-items-center">
        <ProfileCard />
      </div>
      <div class="col contacts pt-5">
        <h2 class="mb-5">CONTACTS</h2>
        <ul>
          <li><i class="fa fa-envelope icon"></i> nicholas.peara@gmail.com</li>
          <li><i class="fa fa-phone icon"></i> +39 3472541305</li>
          <li>
            <i class="fa fa-instagram icon"></i>
            nicholasp_92
          </li>
          <li>
            <i class="fa fa-linkedin icon"></i>
            Nicholas Peara
          </li>
          <li><i class="fa fa-github icon"></i> NicholasPeara92</li>
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
  margin-bottom: 50px;
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
@media only screen and (max-width: 992px) {
  .contacts {
    padding-left: 40px;
  }
}

@media only screen and (max-width: 425px) {
  .contacts {
    padding-left: 0;
    padding-top: 30px;
    text-align: center;

    li {
      font-size: 14px;
    }
  }
}
</style>
