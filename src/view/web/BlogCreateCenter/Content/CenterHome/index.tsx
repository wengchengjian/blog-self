import Card from './Card';
import List from './List';
import { DataProps } from './Card';
import styles from './index.module.less';
const CenterHome = () => {
  const data: DataProps[] = [
    {
      key: 0,
      word: '总关注者数',
      number: 0,
    },
    {
      key: 1,
      word: '文章阅读数',
      number: 0,
    },
    {
      key: 2,
      word: '文章收藏数',
      number: 0,
    },
    {
      key: 3,
      word: '文章点赞数',
      number: 0,
    },
    {
      key: 4,
      word: '文章评论数',
      number: 0,
    },
  ];
  return (
    <>
      <div className={styles['content-box']}>
        <div className={styles['content-card']}>
          <Card dataSource={data} />
        </div>
        <div className={styles['content-recent']}>
          <List />
        </div>
      </div>
    </>
  );
};

export default CenterHome;
