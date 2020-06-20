<template>
  <div class="imageModal" @click="closeImageModal">
    <div class="image__container">
      <img class="image--original" :src="resolveImgUrl(imgName)" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageModal",
  props: ["imgName"],
  methods: {
    closeImageModal() {
      this.$emit("closeImageModal");
    },
    resolveImgUrl(imgName) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + imgName + ".png");
    }
  }
};
</script>

<style scoped>
.imageModal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000c2;
  z-index: 2000;
}
img {
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  max-height: 80vh;
}

.image__container {
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
}
</style>
