<template>
  <div class="hello">
    <h1>{{ $store.getters.mensaje }}</h1>
    <h4>{{ $store.getters.fullName }}</h4>
    <h2>Amigos</h2>
    <input v-model="newFriend" placeholder="Write the name" type="text" />
    <button @click="addNewFriend">Add new friend</button>
    <ul>
      <li
        class="colorFriend"
        v-for="(amigo, index) in $store.state.amigos"
        v-bind:key="index"
      >
        {{ amigo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      newFriend: "",
    };
  },
  methods: {
    addNewFriend: function () {
      this.$store.state.amigo = this.newFriend;
      this.$store.dispatch("addFriendAction");
      this.newFriend = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.colorFriend {
  color: #3385ff;
}
</style>
