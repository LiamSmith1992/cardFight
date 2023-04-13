<template>
  <div class="component">
    <section class="row">
      <div v-for="c in cards" class="col-3 card rounded">

      </div>
    </section>

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





    return {}
  }
};
</script>


<style lang="scss" scoped></style>