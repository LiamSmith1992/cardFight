<template>
  <div v-for="c in cards" class="col-3 card rounded">
    <div class="d-flex justify-content-between">
      <h5 class="">{{ c.name }} </h5>
      <h5 class="text-danger text-end  ">{{ c.health }}</h5>
    </div>
    <img :src="c.picture" alt="">
    <p>Strength: {{ c.strength }}</p>
    <p>Defense: {{ c.defense }}</p>
    <p>Magic: {{ c.magic }}</p>
    <p>{{ c.type }}: <span>{{ c.ability }}</span></p>

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
      cards: computed(() => AppState.cards)
    }
  }
};
</script>


<style lang="scss" scoped></style>