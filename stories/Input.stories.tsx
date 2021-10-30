import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../src';

const meta: Meta = {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    name: {
      control: {
        type: String,
      },
    },
    placeHolder: {
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

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Phone Number',
  placeHolder: '983753479',
};
