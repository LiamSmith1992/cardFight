<template>
  <div class="container-fluid" v-if="deck">

    <section class="row">
      <div class="col-12">
        <h1 class="text-center fw-bold text-secondary">{{ deck.name }}</h1>
        <h3 class="text-end">Points Left: <span class="text-danger fw-bold">{{ deck.points }}</span> </h3>
      </div>
    </section>

    <section class="row">
      <div class="col-2 m-2">
        <router-link :to="{ name: 'CardForm', params: { deckId: deck.id } }">
          <h5 class="mdi mdi-plus btn btn-primary" title="Add Card"></h5>
        </router-link>
      </div>
    </section>

    <section class="row">
      <div class="col-12" v-for="d in deck" v-if="deck.cards > 0">
        <CardComponent :cards="d.cards" />
      </div>
    </section>




  </div>
</template>


<script>
import { useRoute } from "vue-router";
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { deckService } from "../services/DeckService";
import { logger } from "../utils/Logger";
import CardComponent from "../components/CardComponent.vue";
export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getDeckById();
    });
    async function getDeckById() {
      try {
        await deckService.getDeckById(route.params.deckId);
      }
      catch (error) {
        logger.error(error);
      }
    }
    return {
      deck: computed(() => AppState.activeDeck)
    };
  },
  components: { CardComponent }
};
</script>


<style lang="scss" scoped></style>