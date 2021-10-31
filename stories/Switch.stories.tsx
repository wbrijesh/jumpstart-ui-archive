import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch, SwitchProps } from '../src';

const meta: Meta = {
  title: 'Form/Switch',
  component: Switch,
  argTypes: {},
  parameters: {
    controls: { expanded: false },
  },
};

export default meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'User Role',
  options: ['Admin', 'Author', 'Subscriber', 'Guest'],
  defaultValue: 'Author',
};
