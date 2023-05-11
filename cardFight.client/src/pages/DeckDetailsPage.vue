<template>
  <div class="container-fluid" v-if="deck">

    <section class="row">
      <div class="col-12">
        <h1 class="text-center fw-bold text-secondary">{{ deck.name }}</h1>
        <router-link :to="{ name: 'BattlePage', params: { deckId: deck.id } }">
          <h3 class=" btn btn-info">Battle!</h3>
        </router-link>
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
      <div class="d-flex col-3" v-for="c in cards" v-if="cards">
        <CardComponent :cards="c" />
        <div>
          <p class="btn btn-danger mdi mdi-delete mt-2" title="Delete" @click="deleteCard(c)"></p>
          <p class="btn btn-info mdi mdi-pencil mt-2" title="Edit"></p>
        </div>
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
import { cardsService } from "../services/CardsService";
import Pop from "../utils/Pop";
export default {
  setup() {
    const route = useRoute();

    onMounted(() => {
      getDeckById();
      getDeckCards();
    });


    async function getDeckById() {
      try {
        await deckService.getDeckById(route.params.deckId);
      }
      catch (error) {
        logger.error(error);
      }
    }

    async function getDeckCards() {
      try {
        await cardsService.getCards()
      } catch (error) {
        logger.error(error)
      }
    }



    return {
      deck: computed(() => AppState.activeDeck),
      cards: computed(() => AppState.cards.filter(i => i.deckId == route.params.deckId)),

      async deleteCard(card) {

        if (await Pop.confirm('are you sure')) {
          await cardsService.deleteCard(card.id)
          const thisDeck = AppState.activeDeck
          let total = card.health + card.strength + card.defense + card.magic
          thisDeck.points = thisDeck.points + total
          await deckService.editDeck(thisDeck)
        }
      }


    };
  },
  components: { CardComponent }
};
</script>


<style lang="scss" scoped></style>