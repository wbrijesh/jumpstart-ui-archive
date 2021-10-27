import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Action/Button',
  component: Button,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    link: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'ghost',
          'link',
          'fullWidth',
          'success',
          'warning',
          'danger',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    icon: {
      control: {
        type: 'text',
      },
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Delete Account',
  link: 'https://brijesh-wawdhane.com',
  variant: 'danger',
  size: 'small',
  icon: 'delete',
  iconPosition: 'left',
};
