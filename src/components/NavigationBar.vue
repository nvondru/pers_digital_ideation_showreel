<template>
  <header id="header">
    <div ref="progressBar" class="progressBar"></div>

    <nav class="navigation-bar" ref="navigationBar">
      <a class="link" href="#welcome">Game</a>
      <a class="logo" ref="logo" href="#welcome">
        <Logo
          :scrolledPercent="scrolledPercent"
          @logoLoaded="loadNavigationBar"
        ></Logo>
      </a>
      <a class="link" href="#movie">Assets</a>
    </nav>
  </header>
</template>

<script>
import gsap from "gsap";
import Logo from "./Logo";

export default {
  name: "NavigationBar",
  components: {
    Logo
  },
  props: ["scrolledPercent", "activeContent"],
  data() {
    return {};
  },

  methods: {
    loadNavigationBar() {
      this.$emit("logoLoaded");
      var timeline = gsap.timeline();
      timeline.to(this.$refs.navigationBar, 1.5, {
        gridTemplateColumns: "1fr 10vh 1fr",
        ease: "EaseInOut"
      });
      timeline.to(".link", 1, { opacity: 1.5, ease: "EaseInOut" }, "<");
    }
  },
  watch: {
    scrolledPercent: {
      handler() {
        this.$refs.progressBar.style.width = this.scrolledPercent + "%";
      }
    },
    activeContent: {
      handler() {
        if (this.activeContent === "pictures") {
          this.$refs.progressBar.style.backgroundColor = "#C4AF5E";
        } else if (this.activeContent === "movie") {
          this.$refs.progressBar.style.backgroundColor = "#C8C7AD";
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation-bar {
  display: grid;
  grid-template-columns: 1fr 50vh 1fr;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: #997c67;
}

#header {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 30px;
  cursor: pointer;
  transition: transform 100ms;
  position: relative;
  z-index: 10;
}

.logo {
  height: 100%;
}

.link {
  opacity: 0;
}

.progressBar {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 10vh;
  background-color: #c4af5e;
  transition: background-color 250ms ease-in-out;
}

@media only screen and (max-width: 600px) {
  a {
    font-size: 15px;
  }
}

@media only screen and (max-width: 900px) {
  a {
    font-size: 20px;
  }
}

@media only screen and (orientation: portrait) {
  .navigation-bar {
    grid-template-columns: 1fr 50vw 1fr;
  }
}
</style>
