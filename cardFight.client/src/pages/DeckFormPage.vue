<template>
  <div class="component">

    <form @submit.prevent="createDeck">
      <label for="name">Name:</label>
      <input type="text" v-model="editable.name" id="name" name="name"><br>

      <label for="" class="form-label">Picture</label>
      <input type="text" v-model="editable.picture" class="form-control" id="">
      <label for="" class="form-label">Description</label>
      <input type="text" v-model="editable.description" class="form-control" id="">


      <input type="submit" value="Submit">
    </form>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { deckService } from "../services/DeckService";
import { logger } from "../utils/Logger";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter()
    const editable = ref({})


    return {
      editable,
      async createDeck() {
        debugger
        try {
          editable.value.points = 200

          const deck = await deckService.createDeck(editable.value)
          logger.log(editable.value)
          editable.value = {}
          router.push({ name: 'DeckDetailsPage', params: { deckId: deck.id } })

        } catch (error) {
          logger.error(error.message)
        }
      }

    }
  }
};
</script>


<style lang="scss" scoped></style>