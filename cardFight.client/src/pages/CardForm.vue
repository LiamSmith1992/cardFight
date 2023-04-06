<template>
  <form @submit.prevent="createCard()">
    <label for="name">Name:</label>
    <input type="text" v-model="editable.name" id="name" name="name"><br>

    <label for="type">Type:</label>
    <input type="text" v-model="editable.type" id="type" name="type"><br>

    <label for="mySelect">Type:</label>
    <select v-model="editable.type" id="mySelect" name="mySelect">
      <option value="none">None</option>
      <option value="peirce">Peirce</option>
      <option value="heal">Heal</option>
      <option value="boost">Boost</option>
      <option value="combust">Combust</option>
      <option value="debuff">Debuff</option>
      <option value="charge">Charge</option>
      <option value="sneak">Sneak</option>
      <option value="vanish">Vanish</option>
      <option value="find">Find</option>
      <option value="summon">Summon</option>
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
      <option value="heal">Heal</option>
      <option value="boost">Boost</option>
      <option value="combust">Combust</option>
      <option value="debuff">Debuff</option>
      <option value="charge">Charge</option>
      <option value="sneak">Sneak</option>
      <option value="vanish">Vanish</option>
      <option value="find">Find</option>
      <option value="summon">Summon</option>
    </select><br>

    <label for="" class="form-label">Picture</label>
    <input type="text" v-model="editable.imgUrl" class="form-control" id="">


    <input type="submit" value="Submit">
  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from "../utils/Logger";
import { cardsService } from "../services/CardsService"
export default {
  setup() {


    const editable = ref({})
    // const form = document.querySelector('form');

    // form.addEventListener('submit', (event) => {
    //   event.preventDefault();

    //   const name = document.querySelector('#name').value;
    //   const type = document.querySelector('#type').value;
    //   const health = document.querySelector('#health').value;
    //   const strength = document.querySelector('#strength').value;
    //   const defense = document.querySelector('#defense').value;
    //   const ability = document.querySelector('#ability').value;

    //   // You can then use these values however you like
    // });






    return {
      editable,

      async createCard() {
        try {
          await cardsService.createCard(editable.value)
          logger.log(editable.value)
          editable.value = {}

        } catch (error) {
          logger.error(error.message)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>