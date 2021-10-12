import { useState } from 'react';
import styles from './index.module.less';

type IProps = {
  value: string;
  number: number;
  hasSelected: boolean;
};

const Select = (props: IProps) => {
  const [isblue, setIsBlue] = useState(() =>
    props.hasSelected ? 'hasSelected' : ''
  );

  return (
    <>
      <div className={styles['select-item-box']}>
        <span className={`${styles['select-item']} ${styles[isblue]}`}>
          {props.value} &nbsp;{props.number}
        </span>
      </div>
    </>
  );
};
export default Select;
