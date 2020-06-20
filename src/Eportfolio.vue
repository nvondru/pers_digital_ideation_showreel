<template>
  <div id="app" ref="app" class="noEvents">
    <div class="bar--red" ref="bar__red"></div>
    <div id="nav__wrapper" ref="nav__wrapper">
      <NavigationBar
        @logoLoaded="loadWebsite"
        :scrolledPercent="scrolledPercent"
        :activeContent="activeContent"
      ></NavigationBar>
    </div>
    <div id="content__wrapper" ref="content__wrapper">
      <ContentContainer
        @scrolled="setScrolled"
        @reachedFirstPicture="showTutorialPanel"
        :loaded="loaded"
        ref="contentContainer"
      ></ContentContainer>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import ContentContainer from "./components/ContentContainer.vue";

import gsap from "gsap";

export default {
  name: "e-portfolio",
  components: {
    NavigationBar,
    ContentContainer
  },
  data() {
    return {
      loaded: false,
      scrolledPercent: 0,
      activeContent: "welcome",
      tutorialShown: false,
      tutorialActive: false
    };
  },

  methods: {
    loadWebsite() {
      this.loaded = true;
      var timeline = gsap.timeline({
        onComplete: () => this.$refs.app.classList.remove("noEvents")
      });
      timeline.to(this.$refs.nav__wrapper, 1.5, {
        height: "10%",
        ease: "EaseInOut"
      });
      timeline.to(
        this.$refs.bar__red,
        1.5,
        {
          height: "0%",
          ease: "EaseInOut"
        },
        "<"
      );
      timeline.to(
        this.$refs.content__wrapper,
        1.5,
        { height: "90%", ease: "EaseInOut" },
        "<"
      );
    },
    setScrolled(scrolledPercent, activeContent) {
      this.scrolledPercent = scrolledPercent;
      this.activeContent = activeContent;
    },
    showTutorialPanel() {
      if (!this.tutorialShown) {
        this.tutorialShown = true;
        this.tutorialActive = true;
      }
    },
    openImageModal(imgName) {
      this.$refs.contentContainer.createModal(imgName);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap");
* {
  font-family: "Nunito Sans", sans-serif;
  color: #6e352c;
}
#app {
  height: 100vh;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
}
.noEvents {
  pointer-events: none;
}
html,
body {
  margin: 0px;
  padding: 0px;
}
::-webkit-scrollbar {
  /* display: none; */
}
.bar--red {
  background-color: #c4af5e;
  height: 25%;
}
#nav__wrapper {
  height: 50%;
}
/* #content__wrapper {
  height: 25%;
} */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
p {
  text-align: left;
}
</style>
