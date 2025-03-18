import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';

import { SidebarComponent } from './sidebar.component';

const callbacks = {
  onClick: fn(),
};

const meta: Meta<SidebarComponent> = {
  title: 'Design System/Components/Sidebar',
  component: SidebarComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...callbacks,
  },
};

export default meta;
type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
  args: {
    type: 'standard',
  },
};
