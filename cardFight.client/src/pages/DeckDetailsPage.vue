<template>
  <div class="component">


  </div>
</template>


<script>
import { useRoute } from "vue-router";
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { deckService } from "../services/DeckService";
import { logger } from "../utils/Logger";
export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getDeckById()
    })

    async function getDeckById() {
      try {
        await deckService.getDeckById(route.params.deckId)
      } catch (error) {
        logger.error(error)
      }
    }


    return {
      deck: computed(() => AppState.activeDeck)

    }
  }
};
</script>


<style lang="scss" scoped></style>