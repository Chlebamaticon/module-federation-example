import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';

import { CardComponent } from './card.component';

const callbacks = {
  onClick: fn(),
};

const meta: Meta<CardComponent> = {
  title: 'Design System/Components/Card',
  component: CardComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.\*Data$/,
  tags: ['autodocs'],
  args: {
    ...callbacks,
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    type: 'standard',
  },
};
