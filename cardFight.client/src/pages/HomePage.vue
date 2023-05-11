<template>
  <div class="container-fluid ">




    <section class="row">
      <div class="col-12 d-flex text-center justify-content-around mt-2">
        <div class="col-2  ">
          <router-link :to="{ name: 'DeckFormPage' }">
            <h3 class="btn btn-primary ">Build Deck</h3>
          </router-link>
        </div>
        <div class="col-2  ">
          <router-link :to="{ name: 'CardPage' }">
            <h3 class="btn btn-primary ">Cards</h3>
          </router-link>
        </div>
        <div class="col-2  ">
          <router-link :to="{ name: 'DeckPage' }">
            <h3 class="btn btn-primary ">Decks</h3>
          </router-link>
        </div>
        <div class="col-2  ">
          <router-link :to="{ name: 'RulesPage' }">
            <h3 class="btn btn-primary ">Rules</h3>
          </router-link>
        </div>
      </div>
    </section>

    <section class=" large-image img-fluid">
      <div class="col-12 text-center image-text">
        <h1 class="fw-bold text-danger">CARD FIGHT</h1>
        <p>The ultimate deck building game<br> Challange your friends and play online</p>
      </div>
    </section>


  </div>
</template>

<script>
import { onMounted } from "vue";

import { logger } from "../utils/Logger";

export default {

  setup() {




    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
}

.large-image {
  position: relative;
  display: inline-block;
  width: 100%;
  /* Set the desired width of the container */
  height: 0;
  /* Height will be determined by the padding-bottom */
  padding-bottom: 60%;
  /* Set the desired aspect ratio (height/width) */
  background-image: url('https://e1.pxfuel.com/desktop-wallpaper/567/21/desktop-wallpaper-2400x1500-knight-armor-helmet-weapon-sword-fire-shield-crocodile-skeletons-art-backgrounds-knight-sword-and-shield.jpg');
  background-size: cover;
  background-position: center;
  border: 5px solid black;
}

.large-image .image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
