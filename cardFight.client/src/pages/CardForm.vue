<template>
  <form @submit.prevent="createCard">
    <label for="name">Name:</label>
    <input type="text" v-model="editable.name" id="name" name="name"><br>

    <label for="mySelect">Type:</label>
    <select v-model="editable.type" id="mySelect" name="mySelect">
      <option value="human">Human</option>
      <option value="ghost">Ghost</option>
      <option value="knight">Knight</option>
      <option value="mage">Mage</option>
      <option value="ninja">Ninja</option>
      <option value="undead">Undead</option>
      <option value="beast">Beast</option>
      <option value="cyborg">Cyborg</option>
      <option value="witch">Witch</option>

    </select><br>

    <label for="health">Health:</label>
    <input type="number" v-model="editable.health" id="health" name="health"><br>

    <label for="strength">Strength:</label>
    <input type="number" v-model="editable.strength" id="strength" name="strength"><br>

    <label for="defense">Defense:</label>
    <input type="number" v-model="editable.defense" id="defense" name="defense"><br>

    <label for="magic">Magic:</label>
    <input type="number" v-model="editable.magic" id="magic" name="magic"><br>


    <label for="mySelect">Ability:</label>
    <select v-model="editable.ability" id="mySelect" name="mySelect">
      <option value="none">None</option>
      <option value="peirce">Peirce</option>
      <!-- Knight, Ninja -->
      <option value="heal">Heal</option>
      <!-- Mage, Gohst -->
      <option value="boost">Boost</option>
      <!-- Mage -->
      <option value="combust">Combust</option>
      <!-- Mage, Cyborg -->
      <option value="debuff">Debuff</option>
      <!-- Undead, Mage -->
      <option value="charge">Charge</option>
      <!-- Knight, Beast -->
      <option value="sneak">Sneak</option>
      <!-- Ninja, Beast -->
      <option value="vanish">Vanish</option>
      <!-- Gohst, ninja -->
      <option value="find">Find</option>
      <!-- Cyborg, Beast -->
      <option value="summon">Summon</option>
      <!-- Mage, Ghost -->
      <option value="poison">Poison</option>
      <!-- Undead, Ninja, Beast -->
      <option value="defend">Defend</option>
      <!-- Knight -->

    </select><br>

    <label for="" class="form-label">Picture</label>
    <input type="text" v-model="editable.picture" class="form-control" id="">


    <input type="submit" value="Submit">
  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from "../utils/Logger";
import { cardsService } from "../services/CardsService"
import { useRoute, useRouter } from "vue-router";
import { deckService } from "../services/DeckService";
import Pop from "../utils/Pop";
export default {
  setup() {
    onMounted(() => {
      getDeckById()
    })

    const route = useRoute()
    const editable = ref({})
    const router = useRouter()

    async function getDeckById() {
      try {
        debugger
        await deckService.getDeckById(route.params.deckId);
      }
      catch (error) {
        logger.error(error);
      }
    }



    return {
      editable,
      deck: computed(() => AppState.activeDeck),


      async createCard() {
        try {
          const thisDeck = AppState.activeDeck
          let total = editable.value.health + editable.value.strength + editable.value.defense + editable.value.magic
          thisDeck.points = thisDeck.points - total
          if (thisDeck.points > 0) {
            editable.value.deckId = route.params.deckId
            await cardsService.createCard(editable.value)
            await deckService.editDeck(thisDeck)
            editable.value = {}
            router.push({ name: 'DeckDetailsPage', params: { deckId: route.params.deckId } })
          } else Pop.error('Not Enough Points')
          logger.error(error.message)
          logger.log(editable.value)

        } catch (error) {
          logger.error(error.message)
        }
      }





    }
  }
};
</script>


<style lang="scss" scoped></style>