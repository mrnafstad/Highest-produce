<template>
  <v-container fluid class="text-center">
    <v-row align="center" justify="center">
      <v-col v-for="(num, idx) in numbers" :key="idx">
        <v-btn color="secondary" @click="remove(idx)">{{ num }}</v-btn>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="3">
        <v-list>
          <v-text-field type="number" v-model="toAdd" label="Regular"></v-text-field>
          <v-list-item>
            <v-btn @click="addNumber" color="success">Add to list</v-btn>
            <v-spacer />
            <v-btn @click="getHighest" color="info">Produce</v-btn>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-row v-if="highestProduce" justify="center">
      <v-col>The highest product:</v-col>
      <v-col>{{ highestProduce }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      numbers: [1, 5, 6, -2, -11],
      toAdd: null,
      highestProduce: null,
    };
  },
  methods: {
    getHighest() {
      //assuming only positive integers. Find more general solution
      //this.highestProduce =
      //this.maxValues[0] * this.maxValues[1] * this.maxValues[2];
      var max = this.numbers[0] * this.numbers[1] * this.numbers[2];
      const numNeg = this.numbers.filter((v) => v < 0);
      console.log(numNeg);
      if (numNeg.length < 2) {
        this.highestProduce = max;
      } else {
        max =
          this.numbers[0] *
          this.numbers[this.numbers.length - 1] *
          this.numbers[this.numbers.length - 2];
        this.highestProduce = max;
      }
    },
    addNumber() {
      this.numbers.push(this.toAdd);
      this.numbers.sort((a, b) => {
        return b - a;
      });
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>
