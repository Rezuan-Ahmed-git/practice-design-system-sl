import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
  title: 'UI/molecules/Select',
  component: Select,
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Common = Template.bind({});
Common.args = {
  options: [
    { label: 'Option A', value: 'Option A' },
    { label: 'Option A', value: 'Option A' },
    { label: 'Option A', value: 'Option A' },
  ],
};
