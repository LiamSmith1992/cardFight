<template>
  <form @submit.prevent="createCard">
    <label for="name">Name:</label>
    <input type="text" v-model="editable.name" id="name" name="name"><br>

    <label for="mySelect">Type:</label>
    <select v-model="editable.type" id="mySelect" name="mySelect">
      <option value="human">Human</option>
      <option value="ghost">Ghost</option> <!-- heal, vanish, summon, stun-->
      <option value="knight">Knight</option><!-- pierce, charge, bash, defend -->
      <option value="mage">Mage</option><!-- heal, find, combust, boost-->
      <option value="ninja">Ninja</option><!-- pierce, sneak vanish, assassinate -->
      <option value="undead">Undead</option><!-- de-buff, poison, bash, bite-->
      <option value="beast">Beast</option><!-- charge, sneak, find, beastMode -->
      <option value="cyborg">Cyborg</option><!--combust, find, bash, laser-->
      <option value="witch">Witch</option><!--de-buff, summon, poison, curse -->

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
      <div v-if="editable.type != ''">
        <div v-if="editable.type == 'human'">
          <option value="none">None</option>
        </div>
        <div v-if="editable.type == 'knight' | 'ninja'">
          <option value="peirce">Peirce</option>
          <!-- Knight, Ninja           ignore defense -->
        </div>
        <div v-if="editable.type == 'mage' | 'ghost'">
          <option value="heal">Heal</option>
          <!-- Mage, Ghost                     heal a ally 5pt -->
        </div>
        <div v-if="editable.type == 'witch' | 'cyborg' | 'mage'">
          <option value="combust">Combust</option>
          <!-- Witch, Cyborg, mage              does damage equal to half magic to all defenders 1-20 to do 2x card dies-->
        </div>
        <div v-if="editable.type == 'undead' | 'witch'">
          <option value="debuff">Debuff</option>
          <!-- Undead, Witch                 lowers stats of select card-->
        </div>
        <div v-if="editable.type == 'knight' | 'beast'">
          <option value="charge">Charge</option>
          <!-- Knight, Beast           if two or more cards use charge on turn ignore 2ish defense points-->
        </div>
        <div v-if="editable.type == 'ninja' | 'beast'">
          <option value="sneak">Sneak</option>
          <!-- Ninja, Beast            cannot be hit on defensive turn must attack on next turn-->
        </div>
        <div v-if="editable.type == 'ghost' | 'ninja'">
          <option value="vanish">Vanish</option>
          <!-- Ghost, ninja                  hide from table can be activated on summon-->
        </div>
        <div v-if="editable.type == 'cyborg' | 'beast'">
          <option value="find">Find</option>
          <!-- Cyborg, Beast           one in 10 chance to grab card from hiding card cannot attack next turn-->
        </div>
        <div v-if="editable.type == 'mage' | 'ghost'">
          <option value="summon">Summon</option>
          <!-- Mage, Ghost               1 in 20 summon a demon to fight with no armor but health and attack is 2x of magic from summoner-->
        </div>
        <div v-if="editable.type == 'undead' | 'witch'">
          <option value="poison">Poison</option>
          <!-- Undead,  witch           takes health equal to poison every other turn-->
        </div>
        <div v-if="editable.type == 'knight' | 'cyborg' | 'undead'">
          <option value="bash">Bash</option>
          <!-- Knight, Cyborg, undead              extra damage if critical stuns enemy 1 in 10 chance-->
        </div>


        <!-- NOTE this is specials for class -->

        <div v-if="editable.type == 'knight'">
          <option value="defend">Defend</option>
          <!-- Knight                  if multiple knights all get +1 armor and cannot be ignored-->
        </div>
        <div v-if="editable.type == 'ghost'">
          <option value="stun">Stun</option>
          <!-- Gohst               card is frozen for one turn-->
        </div>
        <div v-if="editable.type == 'mage'">
          <option value="boost">Boost</option>
          <!-- Mage                    adds points to allies-->
        </div>
        <div v-if="editable.type == 'ninja'">
          <option value="assassinate">Assassinate</option>
          <!-- ninja                 makes card return to hand-->
        </div>
        <div v-if="editable.type == 'undead'">
          <option value="bite">Bite</option>
          <!-- undead                   10% chance to turn card into undead with the same stats as biting undead-->
        </div>
        <div v-if="editable.type == 'beast'">
          <option value="beastMode">Beast Mode</option>
          <!-- beast                   1 in ten chance for defense and attack to go up 3 points for one round-->
        </div>
        <div v-if="editable.type == 'cyborg'">
          <option value="laser">Laser</option>
          <!-- cyborg                 1 in 20 chance to one shot kill any enemy or do 2x the damage strength to player if no defenders -->
        </div>
        <div v-if="editable.type == 'witch'">
          <option value="curse">Curse</option>
          <!-- witch                1 in 15 chance all stats are set to the lowest stat for two turns -->
        </div>
      </div>






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