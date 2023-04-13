<template>
  <div class="container-fluid">
    <section class="row m-1" v-if="cards">
      <CardComponent>

      </CardComponent>


    </section>


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger";
import { cardsService } from "../services/CardsService";
import CardComponent from "../components/CardComponent.vue";
export default {
  setup() {
    onMounted(() => {
      getCards();
    });
    async function getCards() {
      try {
        await cardsService.getCards();
      }
      catch (error) {
        logger.error(error.message);
      }
    }
    return {
      cards: computed(() => AppState.cards)
    };
  },
  components: { CardComponent }
};
</script>


<style lang="scss" scoped></style>