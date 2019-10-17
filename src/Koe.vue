<template>
  <div>
    <h2>{{title}}</h2>
    <input class="plant-text" v-model="message" placeholder="Mikä kasvi?" />
    <button class="guess-button" @click="changeStatus({message})">Arvaa</button>
    <br />
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">{{status}}</div>
    <br />
    <img :src="require(`./assets/${plant}.png`)" />
    <hr />
  </div>
</template>

<script>
export default {
  props: ["plant"],
  data: function() {
    return {
      status: " ",
      title: " ",
      activeColor: "black",
      fontSize: 30
    };
  },
  methods: {
    addPoints() {
      // Dispatch the action to add points
      this.$store.dispatch("addPoints");
    },
    changed: function() {
      this.$store.commit("addPoints");
    },
    changeStatus(viesti) {
      if (this.status !== "Oikein") {
        viesti.message.toLowerCase() === this.plant
          ? ((this.status = "Oikein"),
            (this.activeColor = "green"),
            (this.title = this.plant),
            this.$emit("onePoint"))
          : (this.status = "Koeta uudelleen");
      }
    }
  }
};
</script>

<style scoped>
.plant-text {
  font-size: 20px;
}
.guess-button {
  background-color: rgb(55, 0, 128);
  padding: 15px 32px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
}
</style>
