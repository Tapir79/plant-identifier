<template lang="html">
  <div is="sui-container">
    <div key="{{totalPoints}}" class="headers">
      Pisteet:
      <br />
      <!-- {{ totalPoints }} / 24 -->
      <p> {{ totalPoints }} / {{Object.keys(this.plants).length}}</p>
    </div>
    <div v-for="value in plants" v-bind:key="value.id">
      <koe :plant="value" :points="totalPoints" @onePoint="totalPoints++"></koe>
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
        // 1: "haapa",
        // 2: "vadelma",
        // 3: "pähkinäpensas",
        // 4: "lehtokuusama",
        // 5: "korpipaatsama",
        // 6: "näsiä",
        // 7: "koiranheisi",
        // 8: "kataja",
        // 9: "taikinamarja",
        // 10: "tuomi",
        // 11: "raita",
        // 12: "lehmus",
        // 13: "lehtikuusi",
        // 14: "mänty",
        // 15: "kuusi",
        // 16: "vaahtera",
        // 17: "tammi",
        // 18: "pihlaja",
        // 19: "saarni",
        // 20: "jalava",
        // 21: "hieskoivu",
        // 22: "rauduskoivu",
        // 23: "tervaleppä",
        // 24: "harmaaleppä",
        25: "ahomansikka",
        26: "harakankello",
        27: "hiirenvirna",
        28: "järvikaisla",
        29: "järviruoko",
        30: "käenkaali",
        31: "kallioimarre",
        32: "kalliokielo",
        33: "kanerva",
        34: "kangasmaitikka",
        35: "karpalo",
        36: "keltakannusruoho",
        37: "keltakurjenmiekka",
        38: "keto-orvokki",
        39: "ketunleipä",
        40: "kielo",
        41: "kultapiisku",
        42: "leveäosmankaami",
        43: "luhtalemmikki",
        44: "lumme",
        45: "maitohorsma",
        46: "mesiangervo",
        47: "metsaimarre",
        48: "metsakorte",
        49: "metsakurjenpolvi",
        50: "metsämaitikka",
        51: "metsäorvokki",
        52: "metsätähti",
        53: "mustikka",
        54: "niittynätkelma",
        55: "nokkonen",
        56: "nuokkuhelmikkä",
        57: "ojakärsamo",
        58: "oravanmarja",
        59: "pietaryrtti",
        60: "pihasaunio",
        61: "poimulehti",
        62: "pujo",
        63: "puna-ailakki",
        64: "puolukka",
        65: "päivänkakkara",
        66: "ranta-alpi",
        67: "rantakukka",
        68: "rentukka",
        69: "rohtovirmanjuuri",
        70: "siankärsämö",
        71: "sinivuokko",
        72: "sudenmarja",
        73: "kissankello",
        74: "suopursu",
        75: "tupasvilla",
        76: "ulpukka",
        77: "vadelma",
        78: "valkopeippi",
        79: "valkovuokko",
        80: "vanamo",
        81: "variksenmarja",
        82: "voikukka",
        83: "suokukka",
        84:"vadelma0"
      }
    };
  },
  components: {
    koe: Koe
  },
  computed: {
    printplants() {
      return this.plants.map(plant => {
        // Console.log(plant)
        return `<koe plant=${plant}></koe>`;
      });
    }
  }
};
</script>

<style scoped>
.headers {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: fixed;
  right: 100px;
  top: 50px;
  font-size: 40px;
}
</style>