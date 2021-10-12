import { useState } from 'react';
import Select from '../Select';
type IProps = {
  children: JSX.Element[];
};

const SelectGroup = (props: IProps) => {
  const { children } = props;
  const [selecteKey, setSelectedKey] = useState('');

  return (
    <>
      {children.map((item) => {
        return item;
      })}
    </>
  );
};
export default SelectGroup;
