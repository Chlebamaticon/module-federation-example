import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';

import { TextareaComponent } from './textarea.component';

const callbacks = {
  onClick: fn(),
};

const meta: Meta<TextareaComponent> = {
  title: 'Design System/Components/Textarea',
  component: TextareaComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...callbacks,
  },
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Default: Story = {
  args: {
    type: 'standard',
  },
};
