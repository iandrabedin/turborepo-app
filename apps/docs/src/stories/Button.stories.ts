import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'test-core-delete';

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryDeprecated: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
