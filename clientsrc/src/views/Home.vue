<template>
  <div class="home text-center container-fluid">
    <div class="row">
      <div class="col">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>Welcome to Your Daily Food Chart</h1>
        <form class="form-inline" @submit.prevent="addDate">
          <h4>Add new Date</h4>
          <input type="date" placeholder="MM/DD/YYYY" name="date" v-model="newDate.date" />
          <button type="submit" class="btn btn-success">Add Day</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ol>
          <Date v-for="date in dates" :key="date._id" :date="date" />
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import bootstap from "bootstrap";
import Date from "../components/DatesCompontent.vue";
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getAllDates");
  },
  data() {
    return {
      newDate: {}
    };
  },
  computed: {
    dates() {
      return this.$store.state.dates;
    }
  },
  methods: {
    addDate() {
      this.$store.dispatch("addDate", { ...this.newDate });
      this.newDate = {};
    }
  },
  components: {
    Date
  }
};
</script>
