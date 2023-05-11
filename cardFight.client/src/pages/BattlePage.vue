<template>
  <div class="component">
    <section class="row large-image img-fluid m-0 ">

      <img v-if="deck" class="deck-img image-text " :src="deck.picture" alt="">
      <div>
        <img @click="setActiveCard(cards[drawIndex].id)" data-bs-toggle="modal" data-bs-target="#viewHand"
          v-if="drawIndex" class="selectable deck-img image-card" :src="cards[drawIndex].picture" alt="">

      </div>




    </section>







    <Modal id="viewHand">
      <!-- <CardComponent /> -->
    </Modal>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { deckService } from "../services/DeckService";
import { useRoute } from "vue-router";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Modal from "../components/Modal.vue";
import CardComponent from "../components/CardComponent.vue";



export default {
  setup() {
    onMounted(() => {
      getDeckById();
      getDeckCards();
    });
    const route = useRoute();
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
        await cardsService.getCards();
        let card = AppState.cards.filter(i => i.deckId == route.params.deckId);
        if (card.length > 0) {
          let randomCard = Math.floor(Math.random() * card.length);
          logger.log(randomCard);
          AppState.drawCard = randomCard;
        }
      }
      catch (error) {
        logger.error(error);
      }
    }
    return {
      deck: computed(() => AppState.activeDeck),
      cards: computed(() => AppState.cards.filter(i => i.deckId == route.params.deckId)),
      drawIndex: computed(() => AppState.drawCard),

      async getOneCard(cardId) {
        try {
          await cardsService.getOneCard(cardId)
        } catch (error) {
          logger.error(error)
        }
      }


    };
  },
  components: { Modal, CardComponent }
};
</script>


<style lang="scss" scoped>
.large-image {
  position: relative;
  display: inherit;
  width: 100%;
  /* Set the desired width of the container */
  height: 0;
  /* Height will be determined by the padding-bottom */
  padding-bottom: 65%;
  /* Set the desired aspect ratio (height/width) */
  background-image: url('https://www.pockettactics.com/wp-content/uploads/2021/10/the-lord-of-the-rings-rise-to-war-4-1.jpg');
  background-size: fill;
  background-position: center;


}

.large-image .image-text {
  position: absolute;
  top: 88%;
  left: 92%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}


.deck-img {
  height: 20%;
  width: 10%;
  border: 2px solid black;
  border-radius: 10px;
  object-fit: fill;
  padding: 0;
}

.large-image .image-card {
  position: absolute;
  top: 87%;
  left: 40%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>