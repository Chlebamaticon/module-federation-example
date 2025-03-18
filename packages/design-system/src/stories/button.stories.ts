import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';

import {ButtonComponent} from '../../button/src/lib/button.component';

const callbacks = {
    onClick: fn(),
}

const meta: Meta<ButtonComponent> = {
    title: 'Button',
    component: ButtonComponent,
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    args: {
        ...callbacks
    },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
    args: {
        type: 'standard',
    }
}

export const Primary: Story = {
    args: {
        type: 'primary',
    }
}

export const Secondary: Story = {
    args: {
        type: 'secondary',
    }
}

export const Outline: Story = {
    args: {
        type: 'outline',
    }
}

export const Ghost: Story = {
    args: {
        type: 'ghost',
    }
}