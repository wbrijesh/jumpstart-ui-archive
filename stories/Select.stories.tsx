import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, SelectProps } from '../src';

const meta: Meta = {
  title: 'Form/Select',
  component: Select,
  argTypes: {
    name: {
      control: {
        type: String,
      },
    },
    options: {
      control: {
        type: Array,
      },
    },
    defaultValue: {
      control: {
        type: String,
      },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
};

export default meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'User Role',
  options: ['Admin', 'Author', 'Subscriber', 'Guest'],
  defaultValue: 'Author',
};
