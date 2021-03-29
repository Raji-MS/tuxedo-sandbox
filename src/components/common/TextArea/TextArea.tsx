import {FC, HTMLAttributes} from 'react';

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  variation: string;
  name: string;
  maxLength?: number;
  value?: string;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  const {name, onChange, maxLength = 250, value = '', variation = 'primary', ...rest} = props;
  return (
    <textarea
      rows={6}
      cols={50}
      name={name}
      onChange={onChange ? (e) => onChange(e) : () => {}}
      maxLength={maxLength}
      className={variation}
      value={value}
      {...rest}
    ></textarea>
  );
};
