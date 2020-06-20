<template>
  <div
    @scroll="handleScroll($event)"
    class="content-container"
    ref="contentContainer"
  >
    <div id="welcome" class="content--invisible" ref="content">
      <section class="content content--yellow">
        <section class="content__welcome" ref="welcome">
          <hr />
          <h1>Showreel: Age of War</h1>
          <hr />
          <article class="articleContainer">
            <p>
              This project is inspired by the original game 'Age of War' from
              Louissi, published on New Grounds in 2007. All used assets are
              created by Nicolas Vondru. The only execption is the soundtrack
              which is used from the original game.
            </p>
            <iframe
              src="http://127.0.0.1:5500/index.html"
              style="border:0px #ffffff none;"
              name="myiFrame"
              scrolling="no"
              frameborder="1"
              marginheight="0px"
              marginwidth="0px"
              height="600px"
              width="960px"
              allowfullscreen
            ></iframe>

            <div class="logoBar">
              <div>Created with:</div>
              <img src="../assets/unity.png" alt="" class="logo--small" />
              <div>+</div>
              <img src="../assets/photoshop.png" alt="" class="logo--small" />
              <div>+</div>
              <img src="../assets/illustrator.png" alt="" class="logo--small" />
              <div>+</div>
              <img src="../assets/audition.png" alt="" class="logo--small" />
            </div>
          </article>
        </section>
      </section>

      <section id="movie" class="content content--red" ref="pictures">
        <section id="pictures" class="content__pictures" ref="pictures">
          <hr />
          <h1>Assets</h1>
          <hr />

          <article class="articleContainer">
            <div class="subTitle">
              <h2>Photoshop</h2>
              <img class="title__logo" src="../assets/photoshop.png" alt="" />
            </div>

            <div
              class="image__container"
              @click="openModal('sm_showreel', $event)"
              @contextmenu="openModal('sm_showreel', $event)"
            >
              <img
                class="image--processed"
                src="../assets/sm_showreel.png"
                alt
              />
            </div>

            <div
              class="image__container"
              @click="openModal('background', $event)"
              @contextmenu="openModal('background', $event)"
            >
              <img
                class="image--processed"
                src="../assets/background.png"
                alt
              />
            </div>
            <div
              class="image__container"
              @click="openModal('base_showreel', $event)"
              @contextmenu="openModal('base_showreel', $event)"
            >
              <img
                class="image--processed"
                src="../assets/base_showreel.png"
                alt
              />
            </div>
            <div
              style="display: inline-flex; height: 400px; margin: 0px 0px 100px 0px"
            >
              <div
                class="image__container"
                @click="openModal('archer', $event)"
                @contextmenu="openModal('archer', $event)"
              >
                <img
                  style="height: 400px; width: auto;"
                  class="image--processed"
                  src="../assets/archer.png"
                  alt
                />
              </div>
              <div
                class="image__container"
                @click="openModal('coin', $event)"
                @contextmenu="openModal('coin', $event)"
              >
                <img
                  style="height: 400px; width: auto; margin-left:120px"
                  class="image--processed"
                  src="../assets/coin.png"
                  alt
                />
              </div>
            </div>
          </article>

          <hr />

          <article class="articleContainer">
            <div class="subTitle">
              <h2>Illustrator</h2>
              <img class="title__logo" src="../assets/illustrator.png" alt="" />
            </div>

            <p></p>

            <div
              style="display: inline-flex; height: 300px; margin: 70px 0px; align-items: center"
            >
              <div
                class="image__container"
                @click="openModal('sword', $event)"
                @contextmenu="openModal('sword', $event)"
              >
                <img
                  style="height: 200px; width: auto;"
                  class="image--processed"
                  src="../assets/sword.png"
                  alt
                />
              </div>
              <div
                class="image__container"
                @click="openModal('bow', $event)"
                @contextmenu="openModal('bow', $event)"
              >
                <img
                  style="height: 200px; width: auto; margin-left:60px"
                  class="image--processed"
                  src="../assets/bow.png"
                  alt
                />
              </div>
              <div
                class="image__container"
                @click="openModal('swapLeft', $event)"
                @contextmenu="openModal('swapLeft', $event)"
              >
                <img
                  style="height: 100px; width: auto; margin-left:60px"
                  class="image--processed"
                  src="../assets/swapLeft.png"
                  alt
                />
              </div>
              <div
                class="image__container"
                @click="openModal('swapRight', $event)"
                @contextmenu="openModal('swapRight', $event)"
              >
                <img
                  style="height: 100px; width: auto; margin-left:60px"
                  class="image--processed"
                  src="../assets/swapRight.png"
                  alt
                />
              </div>
            </div>
          </article>

          <hr />

          <article class="articleContainer">
            <div class="subTitle">
              <h2>Audition</h2>
              <img class="title__logo" src="../assets/audition.png" alt="" />
            </div>
            <p></p>
            <div
              style="display: inline-flex; height: 300px; margin: 70px 0px; align-items: center"
            >
              <div
                class="image__container"
                @click="playSound('swordSound')"
                @contextmenu="openModal('swordSound', $event)"
              >
                <img
                  style="height: 300px; width: auto;"
                  class="image--processed"
                  src="../assets/swordSound.png"
                  alt
                />
              </div>
              <h2 style="margin-left: 120px">Sword swinging sound</h2>
            </div>
            <p></p>
            <div
              style="display: inline-flex; height: 300px; margin: 70px 0px; align-items: center"
            >
              <h2>Bow flinging sound</h2>

              <div
                class="image__container"
                @click="playSound('bowSound')"
                @contextmenu="openModal('bowSound', $event)"
              >
                <img
                  style="height: 300px; width: auto; margin-left:60px"
                  class="image--processed"
                  src="../assets/bowSound.png"
                  alt
                />
              </div>
            </div>
          </article>
        </section>
      </section>
    </div>
    <Footer></Footer>
    <transition name="fade">
      <ImageModal
        v-if="imageModal.open"
        @closeImageModal="imageModal.open = false"
        :imgName="imageModal.imgName"
      ></ImageModal>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
import Footer from "./Footer";
import ImageModal from "./ImageModal";

export default {
  name: "ContentContainer",
  components: {
    Footer,
    ImageModal
  },
  props: ["loaded"],
  data() {
    return {
      scrolledUnits: 0,
      activeContent: "welcome",
      isMobile: false,
      imageModal: {
        open: false,
        imgName: ""
      }
    };
  },
  watch: {
    loaded: {
      handler() {
        if (this.loaded) {
          gsap.to(this.$refs.content, 1.5, { opacity: 1, ease: "EaseInOut" });
        }
      }
    }
  },
  mounted() {
    // device detection
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      this.isMobile = true;
    }
  },
  methods: {
    handleScroll(event) {
      this.scrolledUnits = this.$refs.contentContainer.scrollTop;
      let height =
        this.$refs.contentContainer.scrollHeight -
        document.body.clientHeight +
        document.body.clientHeight / 10;
      let scrolledPercent = (this.scrolledUnits / height) * 100;

      if (this.scrolledTo("movie")) {
        this.activeContent = "movie";
      } else {
        this.activeContent = "pictures";
      }

      if (this.scrolledTo("pictures")) {
        this.$emit("reachedFirstPicture");
      }

      this.$emit("scrolled", scrolledPercent, this.activeContent);
    },
    openModal(imgName, event) {
      if (this.isMobile && event.type === "contextmenu") {
        event.preventDefault();
        this.createModal(imgName);
      } else if (!this.isMobile && event.type === "click") {
        this.createModal(imgName);
      }
    },
    playSound(soundName) {
      var path = require.context("../assets/sounds/", false, /\.mp3$/);
      var audio = new Audio(path("./" + soundName + ".mp3"));
      audio.play();
    },
    createModal(imgName) {
      this.imageModal.imgName = imgName;
      this.imageModal.open = true;
    },
    scrolledTo(elem) {
      let elemPosition =
        this.$refs[elem].offsetTop - document.body.clientHeight / 10;
      if (
        this.scrolledUnits >= elemPosition ||
        !(Math.abs(this.scrolledUnits - elemPosition) > 1)
      ) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped>
.content-container {
  width: 100%;
  text-align: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  height: 100%;

  /* #CF5230 */
  background-color: #c8c7ad;
  box-sizing: border-box;
}
.content {
  padding: 2vw 12vw;
}

.content--invisible {
  opacity: 0;
}

.content--yellow {
  height: 90vh;
}

.content--red {
  background-color: #c4af5e;
}
.content--red * {
  color: #292411;
}

hr {
  background-color: #6e352c;
  color: #6e352c;
  border: 2px #6e352c solid;
}
.articleContainer {
  margin: 2% 10%;
}
img {
  width: 100%;
  border-radius: 1vw;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  display: block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.image__container {
  position: relative;
  margin: 80px 0px;
}
p {
  font-size: 1.5rem;
}
h1 {
  font-size: 200%;
}

.logo {
  max-width: 400px;
  display: initial;
  position: relative;
}

@media only screen and (max-width: 1200px) {
  h1 {
    font-size: 150%;
  }
  .content {
    padding: 2vw 8vw;
  }
  .articleContainer {
    margin: 4% 6%;
  }
  p {
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 900px) {
  h1 {
    font-size: 120%;
  }
  .content {
    padding: 2vw 6vw;
  }
  .articleContainer {
    margin: 4% 4%;
  }
  p {
    font-size: 1.2rem;
  }
}

.logoBar {
  display: inline-flex;
  align-items: center;
  font-size: 30px;
}

.logoBar * {
  margin-left: 20px;
}
.logo--small {
  height: 60px;
  border-radius: 0px;
  width: auto;
}
.title__logo {
  height: 80px;
  width: auto;
  border-radius: 0px;
  margin-left: 40px;
}
.subTitle {
  display: inline-flex;
  align-items: center;
  margin-bottom: 30px;
}
</style>
