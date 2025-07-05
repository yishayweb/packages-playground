import type { Meta, StoryObj } from '@storybook/react';
import ButtonComponent from './CustomButton';
import { ButtonVariantEnum } from './CustomButton.types';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Component Lib/Inputs/Buttons',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
  args: {
    children: 'Primary button',
  },
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: Object.values(ButtonVariantEnum),
      description: 'The variant of the button',
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Primary button',
    disabled: true,
  },
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: Object.values(ButtonVariantEnum),
      description: 'The variant of the button',
    },
  },
};
