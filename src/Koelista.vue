<template>
  <div>
    <div key="{{totalPoints}}" class="headers">
      Pisteet:
      <br />
      {{ totalPoints }} / 24
    </div>
    
    <div v-for="value in plants" v-bind:key="value.id">
      <koe :plant="value" :id="value.id" :points="totalPoints" @onePoint="totalPoints++"></koe>
    </div>
  </div>

  <!-- <koe puu="haapa"></koe>
  -->
</template>

<script>
import Koe from "./Koe";

export default {
  data: function() {
    return {
      totalPoints: 0,
      plants: {
        1: "haapa",
        2: "vadelma",
        3: "pähkinäpensas",
        4: "lehtokuusama",
        5: "korpipaatsama",
        6: "näsiä",
        7: "koiranheisi",
        8: "kataja",
        9: "taikinamarja",
        10: "tuomi",
        11: "raita",
        12: "lehmus",
        13: "lehtikuusi",
        14: "mänty",
        15: "kuusi",
        16: "vaahtera",
        17: "tammi",
        18: "pihlaja",
        19: "saarni",
        20: "jalava",
        21: "hieskoivu",
        22: "rauduskoivu",
        23: "tervaleppä",
        24: "harmaaleppä"
      }
    };
  },
  components: {
    koe: Koe
  },
  computed: {
    printplants() {
      return this.plants.map(plant => {
        return `<koe plant=${plant}></koe>`;
      });
    }
  }
};
</script>

<style scoped>
.headers {
  background-color:rgba(0, 0, 0, 0.5);
  color: white;
  position: fixed;
  right:100px;
  top:50px;
  font-size: 40px;
}
</style>