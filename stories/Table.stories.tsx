import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from '../src';

const meta: Meta = {
  title: 'Data/Table',
  component: Table,
  argTypes: {
    header: {
      control: {
        type: Array,
      },
    },
    content: {
      control: {
        type: Array,
      },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
};

export default meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: ['name', 'strength', 'speed', 'durability', 'power', 'combat'],
  content: [
    ['Ant Man', 6, 25, 20, 35, 55],
    ['The Flash', 100, 100, 100, 100, 80],
    ['Wonder Woman', 6, 25, 20, 35, 55],
    ['Superman', 100, 100, 100, 100, 100],
    ['Thor', 100, 100, 100, 100, 90],
  ],
};
