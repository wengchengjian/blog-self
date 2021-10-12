import styles from './index.module.less';
import { RightOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Item, { ItemProps } from './Item';
export type DataProps = {
  key: React.Key;
} & ItemProps;

type CardProps = {
  text?: string;
  more?: React.ReactNode;
  dataSource: DataProps[];
};

const Card = (props: CardProps) => {
  const renderMore = () => {
    return (
      <>
        <span>查看更多</span>
        <RightOutlined className={styles['more-btn']} />
      </>
    );
  };
  const renderText = () => {
    return (
      <>
        <h2>数据概览</h2>
        <ExclamationCircleOutlined className={styles['notice']} />
      </>
    );
  };
  return (
    <>
      <div className={styles['card']}>
        <div className={styles['card-head']}>
          <div className={styles['card-head-box']}>
            <div className={styles['card-head-text']}>
              {props.text ?? renderText()}
            </div>
            <div className={styles['card-head-more']}>
              {props.more ?? renderMore()}
            </div>
          </div>
        </div>
        <div className={styles['card-body']}>
          <div className={styles['card-body-box']}>
            {props.dataSource.map((item) => {
              return (
                <Item
                  key={item.key}
                  word={item.word}
                  number={item.number}
                  increment={item.increment}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
