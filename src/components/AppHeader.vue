<template>
  <div>
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 logo-col">
            <img src="../assets/darkHeader.png" alt="" />
          </div>
          <nav class="col-9 nav-col d-flex align-center">
            <ul>
              <li v-for="link in links">
                <a :href="link.link">{{ link.name }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      links: [
        {
          name: "HOME",
          link: "#home",
        },
        {
          name: "ABOUT ME",
          link: "#about",
        },
        {
          name: "PROJECTS",
          link: "#projects",
        },
        {
          name: "CONTACTS",
          link: "#contacts",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 101;
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
    li {
      margin-right: 60px;
      margin-left: 60px;

      a {
        text-align: center;
        color: #737373;
        text-decoration: none;
      }
      :hover {
        color: #8f6e5d;
      }
    }
  }
}
.logo-col {
  img {
    max-width: 80px;
  }
}
</style>
