import styles from './index.module.less';

export type ItemProps = {
  word: string;
  number: number;
  increment?: number;
};

const Item = (props: ItemProps) => {
  return (
    <>
      <div className={styles['item-box']}>
        <div className={styles['item-word']}>{props.word}</div>
        <div className={styles['item-number']}>{props.number}</div>
        <div className={styles['item-pre']}>
          较前日&nbsp;{' '}
          <span className={styles['item-font']}>{props.increment ?? '--'}</span>
        </div>
      </div>
    </>
  );
};

export default Item;
