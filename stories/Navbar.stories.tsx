import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Navbar, NavbarProps } from '../src';

const meta: Meta = {
  title: 'Input/Navbar',
  component: Navbar,
  argTypes: {
    onClick: { action: 'clicked' },
    appName: {
      control: {
        type: 'text',
      },
    },
    appLogo: {
      control: {
        type: 'text',
      },
    },
    homePageUrl: {
      control: {
        type: 'text',
      },
    },
    height: {
      constrol: {
        type: 'text',
      },
    },
    buttonFilledTitle: {
      control: {
        type: 'text',
      },
    },
    buttonFilledUrl: {
      control: {
        type: 'text',
      },
    },
    buttonBlankTitles: {
      control: {
        type: 'array',
      },
    },
    buttonBlankUrls: {
      control: {
        type: 'array',
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
  appName: 'Jumpstart UI',
  appLogo: 'https://assets.brijesh-wawdhane.com/jumpstart-ui-logo.svg',
  homePageUrl: 'https://brijesh-wawdhane.com',
  height: '30',
  buttonFilledTitle: 'Get Started',
  buttonFilledUrl: 'https://brijesh-wawdhane.com',
  buttonBlankTitles: ['Documentation', 'Github'],
  buttonBlankUrls: ['https://google.com', 'https://github.com'],
};
