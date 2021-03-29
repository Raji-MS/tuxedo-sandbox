import {FC, HTMLAttributes} from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  variation: string;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {label, type = 'button', variation = 'primary', ...rest} = props;
  return (
    <button type={type} className={variation} {...rest}>
      {label}
    </button>
  );
};
