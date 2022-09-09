// YourComponent.stories.ts

import { Meta, Story } from '@storybook/angular';


import { ButtonComponent } from './button.component';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: ButtonComponent,
  args: {
    rounded: false,
    label: 'Label default',
    variation: 'primary',
    enabled: true,
  },
  argTypes: {
    variation: { control: 'select', options: [ 'primary', 'secondary' ] }
  }
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  variation: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variation: 'secondary',
};
