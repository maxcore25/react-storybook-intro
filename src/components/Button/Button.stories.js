import Button from './Button';
import '../../index.css';

export default {
  title: 'UI/Button',
  component: 'Button',
  argTypes: {
    variant: {
      type: 'string',
      description: 'This is a variant of a Button Component',
      table: { defaultValue: { summary: 'primary' } },
      options: ['primary', 'square', 'link'],
      control: {
        type: 'radio',
      },
    },
    size: {
      type: 'string',
      description: 'This is a variant of size of a Button Component',
      table: { defaultValue: { summary: '' } },
      options: ['', 'large'],
      control: {
        type: 'radio',
      },
    },
    type: {
      type: 'string',
      description: 'This is a type of a Button Component',
      table: { defaultValue: { summary: 'button' } },
      options: ['button', 'submit'],
      control: {
        type: 'radio',
      },
    },
    children: {
      type: 'string',
      name: 'MyLabel',
      defaultValue: 'Cliiick Meee!!!',
    },
  },
};

const Template = arg => <Button {...arg} />;

// export const Default = () => <Button>Click Me</Button>;

export const Default = Template.bind({});
Default.args = {
  children: 'Press me',
  variant: 'primary',
  size: '',
  type: 'button',
};

export const Large = Template.bind({});
Large.args = {
  children: 'This is big',
  variant: 'primary',
  size: 'large',
  type: 'button',
};
