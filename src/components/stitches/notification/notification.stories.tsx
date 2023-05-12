import type { Meta, StoryObj } from '@storybook/react';
import Constraints from '@commercetools-uikit/constraints';

import Notification from './notification';

const meta: Meta<typeof Notification> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Notification',
  component: Notification,
};

// eslint-disable-next-line react-refresh/only-export-components
export default meta;
type Story = StoryObj<typeof Notification>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Info: Story = {
  render: () => 
    <Constraints.Horizontal max={10}>
      <Notification
        type="info"
        message="New data is available."
      />
    </Constraints.Horizontal>
};

export const Success: Story = {
  render: () => 
    <Constraints.Horizontal max={10}>
      <Notification
        type="success"
        message="Your password has been correctly updated."
      />
    </Constraints.Horizontal>
};

export const Warning: Story = {
  render: () => 
    <Constraints.Horizontal max={10}>
      <Notification
        type="warning"
        message="Your account will expire in 10 days."
      />
    </Constraints.Horizontal>
};

export const Error: Story = {
  render: () => 
    <Constraints.Horizontal max={10}>
      <Notification
        type="error"
        message="You don't have enough permissions to update these settings."
      />
    </Constraints.Horizontal>
};
