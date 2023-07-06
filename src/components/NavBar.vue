<!-- 
https://v3.router.vuejs.org/guide/essentials/named-routes.html
-->
<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'quienes-somos' }">Quienes somos</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
};
</script>