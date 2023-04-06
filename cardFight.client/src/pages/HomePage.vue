<template>
  <div class="container-fluid">
    <section class="row text-center">
      <h1 class="fw-bold text-danger">CARD FIGHT</h1>
      <p>The ultimate deck building game</p>
      <div class="col-2 d-flex ">
        <router-link :to="{ name: 'CardForm' }">
          <h3 class="btn btn-primary ">Build Card</h3>
        </router-link>
      </div>
      <div class="col-2 d-flex ">
        <h3 class="btn btn-primary ">Build Deck</h3>
      </div>
      <div class="col-2 d-flex ">
        <h3 class="btn btn-primary ">Cards</h3>
      </div>
      <div class="col-2 d-flex ">
        <h3 class="btn btn-primary ">Decks</h3>
      </div>
      <div class="col-2 d-flex ">
        <h3 class="btn btn-primary ">Rules</h3>
      </div>


    </section>


  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
