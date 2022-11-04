<template>
  <v-alert
    :color="`${alert.color}`"
    :type="alert.type"
    elevation="4"
    dark
    dismissible
    class="rounded-lg"
    border="left"
    :icon="alert.icon"
    transition="slide-x-transition"
    close-icon="mdi-close"
    @input="dismissHandler"
  >
    <h4 v-if="alert.title">{{ alert.title }}</h4>
    {{ alert.message }}
  </v-alert>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    id: {
      type: Number,
      default: 0
    },
    alert: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
    timeoutId: null,
  }),
  created() {
    this.timeoutId = setTimeout(this.timeoutHandler, this.alert.duration || 10000);
  },
  methods: {
    timeoutHandler() {
      this.$emit('timeout', this.id);
    },
    dismissHandler() {
      this.$emit('dismiss', this.id);
    }
  }
}
</script>

<style>

</style>