<template>
  <div class="container-fluid pt-4">
    <nav class="nav">
      <h6 class="sm-header">Seguimi su</h6>
      <div class="line"></div>
      <ul class="nav-list">
        <li class="nav-item">
          <a
            href="https://www.instagram.com/nicholasp_92/"
            class="nav-link"
            target="_blank"
            ><i class="fa fa-instagram icon"></i
          ></a>
        </li>
        <li class="nav-item">
          <a
            href="https://github.com/NicholasPeara92"
            class="nav-link"
            target="_blank"
            ><i class="fa fa-github icon"></i
          ></a>
        </li>

        <li class="nav-item">
          <a
            href="https://www.linkedin.com/in/nicholas-peara-451010210/"
            class="nav-link"
            target="_blank"
            ><i class="fa fa-linkedin icon"></i
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
a {
  color: #d5d4c2;
}
/* General styles end*/
.nav {
  max-width: 80rem;
  height: 80px;
  display: flex;
  align-items: center;
  pointer-events: none;
}
.nav:hover {
  pointer-events: auto;
}
.sm-header {
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  pointer-events: auto;
  color: #d5d4c2;
  padding-left: 20px;
  margin-bottom: 0;
}
.line {
  width: 15rem;
  height: 3px;
  background-color: #d5d4c2;
  margin-left: 2rem;
  margin-right: 2rem;
  transform: scaleX(0.2);
  transform-origin: left;
  transition: transform 0.5s;
}
.nav:hover .line {
  transform: scaleX(1);
}
.nav-list {
  display: flex;
  list-style: none;
  margin-bottom: 0;
}
.nav-item {
  margin-inline: 2rem;
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
}
.nav-item:nth-child(odd) {
  transform: translateY(5rem);
}
.nav-item:nth-child(even) {
  transform: translateY(-5rem);
}
.nav:hover .nav-item {
  opacity: 1;
  transform: translateY(0);
}
.nav-link {
  font-size: 3.6rem;
}
.nav-link i {
  transition: color 0.5s;
}
.nav-link:hover i.fa-github {
  color: #3b5998;
}
.nav-link:hover i.fa-instagram {
  color: #dd4b39;
}

.nav-link:hover i.fa-linkedin {
  color: #0077b5;
}
@media only screen and (max-width: 768px) {
  .sm-header {
    font-size: 1rem;
    padding-left: 0;
    margin-bottom: 0;
  }
  .nav-link {
    font-size: 2rem;
  }
  .nav-item {
    margin-inline: 0.5rem;
  }
  .nav-list {
    padding-left: 0;
  }
  .line {
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }
}
@media only screen and (max-width: 425px) {
  .sm-header {
    margin-bottom: 5px;
  }
  .line {
    margin-left: 0;
  }
}
</style>
