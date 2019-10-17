<template>
  <div id="app">
    <h1 class="otsikko">{{ title }}</h1>
    <koelista></koelista>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Kasvilajien tunnistuskoe'
    }
  }
}
</script>

<style>
.otsikko{
  font-size: 60px;
}
</style>
