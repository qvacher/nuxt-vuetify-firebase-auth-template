class NotifierFactory {
  init(bus) {
    this.bus = bus;
  }

  success({ title = '', message = ''}) {
    this.bus.$emit('notifier-success', { title, message });
  }

  error({ title = '', message = ''}) {
    this.bus.$emit('notifier-error', { title, message });
  }
}

const Notifier = new NotifierFactory();
export default Notifier;