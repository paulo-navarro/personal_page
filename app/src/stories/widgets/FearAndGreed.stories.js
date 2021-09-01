import FearAndGreed from '../../components/widgets/FearAndGreed.vue';

export default {
  title: 'Widgets/Fear and Greed',
  component: FearAndGreed,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { FearAndGreed },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<fear-and-greed v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

