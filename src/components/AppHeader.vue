<template>
  <div>
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-4 col-md-3 logo-col">
            <img src="../assets/darkHeader.png" alt="" />
          </div>
          <nav class="col-8 col-md-9 nav-col">
            <ul>
              <li>
                <router-link :to="{ name: 'homepage' }">HOME</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'about' }">ABOUT</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'portfolio' }">PORTFOLIO</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'contacts' }">CONTACTS</router-link>
              </li>
            </ul>
            <div class="navbar">
              <div class="container nav-container">
                <input class="checkbox" type="checkbox" name="" id="" />
                <div class="hamburger-lines">
                  <span class="line line1"></span>
                  <span class="line line2"></span>
                  <span class="line line3"></span>
                </div>
                <ul class="menu-items">
                  <li>
                    <router-link :to="{ name: 'homepage' }">HOME</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'about' }">ABOUT</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'portfolio' }"
                      >PORTFOLIO</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'contacts' }"
                      >CONTACTS</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
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
  box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 101;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #000000 50%,
    #d5d4c2 110%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #000000 50%,
    #d5d4c2 110%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  .nav-col {
    display: flex;
    align-items: center;
    margin-right: 0;
  }
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
    li {
      margin-right: auto;
      margin-left: auto;

      a {
        text-align: center;
        color: #737373;
        text-decoration: none;
      }
      :hover {
        color: #8f6e5d;
      }
    }
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
}
.logo-col {
  img {
    max-width: 80px;
  }
}
.navbar {
  width: 100%;
  @media only screen and (min-width: 768px) {
    display: none;
  }
}

.nav-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 62px;
}

.navbar .menu-items {
  display: flex;
}

.navbar .nav-container li {
  list-style: none;
}

.navbar .nav-container a {
  text-decoration: none;
  color: #737373;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.7rem;
}

.navbar .nav-container a:hover {
  color: #8f6e5d;
}

.nav-container {
  display: block;
  position: relative;
  height: 60px;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  right: 0;
  margin-right: 12px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  right: 0;
  margin-right: 12px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #8f6e5d;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
  margin-top: 80px;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.116);
  width: 150%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  margin-left: -90px;
  transition: transform 0.5s ease-in-out;
  text-align: center;
  padding-left: 0;
}

.navbar .menu-items li {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo {
  display: none;
}
</style>
