import type { Meta, StoryObj } from '@storybook/react';
import { Pipeline } from './Pipeline';

const meta: Meta<typeof Pipeline> = {
  title: 'Example/Pipeline',
  component: Pipeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Pipeline>;

export const Light: Story = {
  args: {
    name: 'Pipeline Name',
    title: 'Your pipeline is being configured',
    subTitle: 'The build process can take up to two hours.\nWe will send you an email when setup is complete',
    status: 'Building',
    totalTime: 10000,
    elapsedTime: 1000,
    theme: 'light',
  },
};

export const Dark: Story = {
  args: {
    name: 'Pipeline Name',
    title: 'Your pipeline is being configured',
    subTitle: 'The build process can take up to two hours.\nWe will send you an email when setup is complete',
    status: 'Building',
    totalTime: 10000,
    elapsedTime: 1000,
    theme: 'dark',
  },
};

export const Completed: Story = {
  args: {
    name: 'Pipeline Name',
    title: 'Your pipeline is complete',
    subTitle: 'The build process can take up to two hours.\nWe will send you an email when setup is complete',
    status: 'Completed',
    totalTime: 10000,
    elapsedTime: 10000,
    theme: 'light',
  },
};