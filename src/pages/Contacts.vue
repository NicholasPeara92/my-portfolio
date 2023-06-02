<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col d-flex align-items-center">
        <ProfileCard />
      </div>
      <div class="col contacts pt-5">
        <h2 class="mb-5">CONTACTS</h2>
        <ul>
          <li>
            <i class="fa fa-envelope icon"></i>
            <a href="mailto:nicholas.peara@gmail.com">
              nicholas.peara@gmail.com</a
            >
          </li>
          <li>
            <i class="fa fa-phone icon"></i>
            <a href="tel:+393472541305"> +39 3472541305</a>
          </li>
          <li>
            <i class="fa fa-instagram icon"></i>
            <a
              href="https://www.instagram.com/nicholasp_92/"
              target="_blank"
              rel="noopener noreferrer"
            >
              nicholasp_92</a
            >
          </li>
          <li>
            <i class="fa fa-linkedin icon"></i>
            <a
              href="https://www.linkedin.com/in/nicholas-peara-451010210/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nicholas Peara</a
            >
          </li>
          <li>
            <i class="fa fa-github icon"></i>
            <a
              href="https://github.com/NicholasPeara92"
              target="_blank"
              rel="noopener noreferrer"
            >
              NicholasPeara92</a
            >
          </li>
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
.d-flex {
  justify-content: center;
}
.container-fluid {
  padding-top: 120px;
  margin-bottom: 90px;
  h2 {
    color: #8f6e5d;
  }
  .contacts,
  a {
    color: #d5d4c2;
    text-decoration: none;
    transition: all 0.5s;
    ul {
      list-style: none;
      font-size: 1.8rem;
      padding-left: 0;
      li {
        margin-bottom: 40px;
        a:hover {
          color: #8f6e5d;
        }
        i {
          color: #8f6e5d;
        }
      }
    }
  }
}
@media only screen and (min-width: 1200px) {
  .d-flex {
    justify-content: flex-start;
    padding-left: 50px;
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
