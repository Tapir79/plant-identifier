<template>
  <div>
      <section class="container">
      <div class="one">
           <h2>{{title}}</h2>
            <input class="teksti" v-model="message" placeholder="Mikä kasvi?" />
    <button class="nappi" @click="changeStatus({message})">Arvaa</button>
    <br />
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"> {{status}}</div>
      </div>
      <div class="two">
           <img :src="require(`./assets/${plant}.png`)" />
      </div>
      </section>  
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
      this.$store.dispatch('addPoints')
    },
    changed: function() {
      this.$store.commit('addPoints')
    },
    changeStatus(viesti) {
      if (this.status !== "Oikein") {
        viesti.message === this.plant
          ? ((this.status = "Oikein"), 
          (this.activeColor = "green"), 
          this.title = this.plant, 
          this.$emit('onePoint')
          )
          : (this.status = "Koeta uudelleen");
      }
    }
  }
};
</script>

<style scoped>
.container {
    width: 80%;
    height: 800px;
    background: white;
    margin: auto;
    padding: 10px;
}
.one {
    width: 15%;
    height: 100px;
    background: white;
    float: left;
}
.two {
    margin-left: 15%;
    height: 100px;
    background: white;
}
.teksti{
    font-size: 20px;
}
.nappi{
  background-color: rgb(55, 0, 128);
  padding: 15px 32px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
}
</style>
