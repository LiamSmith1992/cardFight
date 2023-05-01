<template>
  <div class="container">
    <section class="d-flex" v-if="decks">
      <div v-for="d in decks">


        <DeckComponent :decks="d" />




      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { deckService } from "../services/DeckService";
import { logger } from "../utils/Logger";
import DeckComponent from "../components/DeckComponent.vue";
export default {
  setup() {
    onMounted(() => {
      getDecks();
    });
    async function getDecks() {
      try {
        await deckService.getDecks();
      }
      catch (error) {
        logger.error(error.message);
      }
    }
    return {
      decks: computed(() => AppState.decks)
    };
  },
  components: { DeckComponent }
};
</script>


<style lang="scss" scoped></style>