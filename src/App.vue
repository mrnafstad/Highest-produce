<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      Highest produce
      <v-spacer></v-spacer>Click to remove
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
