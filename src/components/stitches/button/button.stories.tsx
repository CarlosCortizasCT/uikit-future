// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button kind="primary" label="Save" />,
};

export const Secondary: Story = {
  render: () => <Button kind="secondary" label="Reset" />,
};

export const Small: Story = {
  render: () => <Button size="small" label="Update" />,
};

export const Urgent: Story = {
  render: () => <Button tone="urgent" label="Invalidate" />,
};

export const Disabled: Story = {
  render: () => <Button isDisabled label="Remove" />,
};
