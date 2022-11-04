<template>
  <div class="notifier">
    <Alert
      v-for="alert in alerts"
      :id="alert.id"
      :key="alert.id"
      :alert="alert"
      @timeout="removeAlert"
      @dismiss="removeAlert"
    />
  </div>
</template>

<script>
  import Alert from '~/components/common/Alert.vue';

  export default {
    name: 'Notifier',
    components: {
      Alert,
    },
    props: {
      eventBus: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      alerts: [],
      uniqueIdStepper: 0,
      alertIcons: {
        success: 'mdi-check-circle',
        error: 'mdi-alert-circle'
      },
      alertColors: {
        success: 'success',
        error: 'error'
      },
      alertDurations: {
        success: 4000,
        error: 10000
      }
    }),
    created() {
      if(this.eventBus) this.addListeners(this.eventBus);
    },
    beforeDestroy() {
      if(this.eventBus) this.removeListeners(this.eventBus);
    },
    methods: {
      addListeners(bus) {
        bus.$on('notifier-success', this.successFeedback);
        bus.$on('notifier-error', this.errorFeedback);
      },
      removeListeners(bus) {
        bus.$on('notifier-success', this.successFeedback);
        bus.$on('notifier-error', this.errorFeedback);
      },
      successFeedback(success) {
        this.createAlert(success.message, success.title, 'success');
      },
      errorFeedback(error) {
        this.createAlert(error.message, error.title, 'error');
      },
      createAlert(message, title, type) {
        const color = this.alertColors[type];
        const duration = this.alertDurations[type];
        const icon = this.alertIcons[type];
        this.uniqueIdStepper += 1;
        this.alerts.push({
          id: this.uniqueIdStepper,
          duration,
          title,
          message,
          color,
          type,
          icon,
          count: 0,
        });
      },
      removeAlert(id) {
        const alertIndex = this.alerts.findIndex((alert) => alert.id === id);
        if(alertIndex > -1) this.alerts.splice(alertIndex, 1);
      },
    },
    watch: {
      eventBus(newBus, oldBus) {
        if(oldBus) this.removeListeners(oldBus);
        if(newBus) this.addListeners(newBus);
      }
    }
  }
</script>

<style lang="scss">
  .notifier {
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 999;
    width: 100%;
    max-width: 320px;
    height: auto;
  }
</style>