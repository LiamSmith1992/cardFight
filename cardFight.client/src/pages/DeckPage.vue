<template>
  <div class="component">


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { deckService } from "../services/DeckService";
import { logger } from "../utils/Logger";
export default {
  setup() {
    onMounted(() => {
      getDecks()
    })
    async function getDecks() {
      try {
        await deckService.getDecks()

      } catch (error) {
        logger.error(error.message)
      }
    }



    return {
      decks: computed(() => AppState.decks)


    }
  }
};
</script>


<style lang="scss" scoped></style>