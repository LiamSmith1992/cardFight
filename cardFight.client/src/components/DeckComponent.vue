<template>
  <div v-for="d in decks">
    <div class="">

      <h3 class="text-center">{{ d.name }}</h3>
      <div class="card rounded ">
        <img class="" :src="d.picture" alt="">
      </div>


    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  setup() {



    return {
      decks: computed(() => AppState.decks)


    }
  }
};
</script>


<style lang="scss" scoped></style>