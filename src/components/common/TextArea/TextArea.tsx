import {FC, HTMLAttributes} from 'react';

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  variation: string;
  name: string;
  maxLength?: number;
  value?: string;
  labelText?: string;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  const {name, onChange, maxLength = 250, value = '', variation = 'primary', labelText, ...rest} = props;
  return (
    <>
      {labelText && <label htmlFor={name}>{labelText}</label>}
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
    </>
  );
};
