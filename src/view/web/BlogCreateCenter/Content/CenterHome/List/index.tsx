import { ExclamationCircleOutlined } from '@ant-design/icons';
import { List as AntdList } from 'antd';
import Item from './Item';
import styles from './index.module.less';
import { useStores } from '@/hooks/useStore';
const List = () => {
  const { articleStore } = useStores();
  return (
    <>
      <div className={styles['list-recent-content']}>
        <div className={styles['list-header']}>
          <div className={styles['recent-publish']}>
            <h2>近期发布</h2>
            <ExclamationCircleOutlined className={styles['notice']} />
          </div>
        </div>
        <div className="list-body">
          <AntdList
            dataSource={articleStore.RecentArticles}
            pagination={{
              defaultPageSize: 5,
              total: articleStore.RecentArticles.length,
              showSizeChanger: true,
              showQuickJumper: true,
            }}
            renderItem={(item) => {
              return (
                <>
                  <Item
                    title={item.articleTitle}
                    updateTime={item.updateTime}
                  />
                </>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default List;
