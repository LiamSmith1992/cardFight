<template>
  <div class="container-fluid">
    <section class="row">

      <div class="d-flex" v-if="decks">
        <div v-for="d in decks">
          <div class="btn btn-danger mdi mdi-delete mt-1" title="Delete Deck" @click="deleteDeck(d.id)"></div>
          <DeckComponent :decks="d" />

        </div>
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
      decks: computed(() => AppState.decks),

      async deleteDeck(deckId) {
        await deckService.deleteDeck(deckId)
      }



    };
  },
  components: { DeckComponent }
};
</script>


<style lang="scss" scoped></style>