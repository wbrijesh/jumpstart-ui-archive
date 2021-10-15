import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Navbar, NavbarProps } from '../src';

const meta: Meta = {
  title: 'Input/Navbar',
  component: Navbar,
  argTypes: {
    onClick: { action: 'clicked' },
    title: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Storybook Button',
  disabled: false,
};
