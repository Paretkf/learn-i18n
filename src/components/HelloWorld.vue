<template>
  <div class="hello">
    <button @click="switchLocale()">{{ displayLocale }}</button> <br>
    <h1>{{ $t("message.hello") }}</h1>
    <p>{{ $n(100, 'currency') }}</p>
    <p>{{ $n(0.53, 'percent') }}</p>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $d(new Date(), 'long') }}</p>
    <p>{{ $tc("message.cake", 1) }}</p>
    <p>{{ $tc("message.cake", 2) }}</p>
    <p>{{ $tc("message.candy", 0) }}</p>
    <p>{{ $tc("message.candy", 1) }}</p>
    <p>{{ $tc("message.candy", 10, { count: 10 }) }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    displayLocale () {
      if (this.$i18n.locale === 'th') {
        return 'en'
      }
      return 'th'
    }
  },
  methods: {
    switchLocale () {
      if (this.$i18n.locale === 'th') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'th'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
