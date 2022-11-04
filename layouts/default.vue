<template>
  <v-app dark>
    <v-main>
      <v-container fluid class="pa-6">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',
  }
</script>

<style lang="scss" scoped>
  ::v-deep .v-main__wrap {
    background-color: var(--v-priBlueGrey-base);
  }
</style>