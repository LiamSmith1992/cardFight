<template>
  <div class="col-3">
    <router-link :to="{ name: 'DeckDetailsPage', params: { deckId: decks.id } }">
      <div class="">

        <h3 class="text-center">{{ decks.name }}</h3>
        <div class="card rounded ">
          <img class="" :src="decks.picture" alt="">
        </div>


      </div>
    </router-link>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  props: {
    decks: { type: Array, required: true }
  },
  setup(props) {



    return {



    }
  }
};
</script>


<style lang="scss" scoped></style>