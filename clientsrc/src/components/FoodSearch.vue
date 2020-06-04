<template></template>





<script>
import axios from "axios";
var api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "3416be864fd9d058394400e1d0d2c71e",
    "x-app-id": "097f4cf7"
  }
});

export default {};
</script>