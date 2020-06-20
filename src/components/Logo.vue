<template>
  <div class="logo">
    <img ref="logo" src="../assets/logo.png" alt />
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Logo",
  props: ["scrolledPercent"],

  mounted() {
    var timeline = gsap.timeline({
      onComplete: () => {
        this.$emit("logoLoaded");
        timeline.to(this.$refs.logo, 1.5, {
          height: "10vh",
          ease: "EaseInOut"
        });
      }
    });
    var refs = this.$refs;

    timeline.fromTo(
      this.$refs.logo,
      2,
      { scale: 0, rotation: -720 },
      { scale: 1, rotation: 0, ease: "EaseInOut" }
    );
  },
  watch: {
    scrolledPercent: {
      handler() {
        let rotationDeg = (360 / 100) * this.scrolledPercent;
        this.$refs.logo.style.transform = "rotate(" + rotationDeg + "deg)";
      }
    }
  }
};
</script>

<style scoped>
.logo {
  height: 40vh;
  text-align: center;
}
</style>