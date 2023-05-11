<template>
  <div class="container-fluid ">
    <section class=" big-img">

      <section class="row ">
        <div class="col-12 text-center">


          <h1 class="fw-bold text-danger">CARD FIGHT</h1>
          <p>The ultimate deck building game</p>
        </div>
      </section>


      <section class="row">
        <div class="col-12 d-flex text-center">
          <div class="col-2 d-flex ">
            <router-link :to="{ name: 'DeckFormPage' }">
              <h3 class="btn btn-primary ">Build Deck</h3>
            </router-link>
          </div>
          <div class="col-2 d-flex ">
            <router-link :to="{ name: 'CardPage' }">
              <h3 class="btn btn-primary ">Cards</h3>
            </router-link>
          </div>
          <div class="col-2 d-flex ">
            <router-link :to="{ name: 'DeckPage' }">
              <h3 class="btn btn-primary ">Decks</h3>
            </router-link>
          </div>
          <div class="col-2 d-flex ">
            <h3 class="btn btn-primary ">Rules</h3>
          </div>
        </div>
      </section>

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



  .big-img {
    background-image: url('https://e1.pxfuel.com/desktop-wallpaper/567/21/desktop-wallpaper-2400x1500-knight-armor-helmet-weapon-sword-fire-shield-crocodile-skeletons-art-backgrounds-knight-sword-and-shield.jpg');
    width: 100vh;
    height: 100vh;
    border: 5px solid black;
  }
}
</style>
