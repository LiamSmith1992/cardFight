<template>
  <div class="col-3 card rounded p-2">
    <div class="d-flex justify-content-between">
      <h5 class="">{{ cards.name }} </h5>
      <h5 class="text-danger text-end  "><span class="text-dark">HP:</span> {{ cards.health }}</h5>
    </div>
    <img :src="cards.picture" alt="">
    <p>Strength: {{ cards.strength }}</p>
    <p>Defense: {{ cards.defense }}</p>
    <p>Magic: {{ cards.magic }}</p>
    <p>{{ cards.type }}: <span>{{ cards.ability }}</span></p>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import CardForm from "../pages/CardForm.vue";
export default {
  props: {
    cards: { type: Array, required: true }
  },
  setup(props) {





    return {

    }
  }
};
</script>


<style lang="scss" scoped></style>