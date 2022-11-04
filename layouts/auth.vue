<template>
  <v-app dark>
    <v-main>
      <v-container fluid class="pa-0 fill-height">
        <Nuxt />
      </v-container>
    </v-main>
    <Notifier :event-bus="eventBus" />
  </v-app>
</template>

<script>
  import Vue from 'vue';
  import Notifier from '~/components/common/Notifier.vue';
  import NotifierFactory from '~/services/NotifierFactory';

  export default {
    name: 'AuthLayout',
    components: {
      Notifier
    },
    created() {
      this.eventBus = new Vue();
      NotifierFactory.init(this.eventBus);
    },
    data: () => ({
      eventBus: null,
    }),
  }
</script>