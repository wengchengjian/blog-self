import { Tabs } from 'antd';
import styles from './index.module.less';

const { TabPane } = Tabs;
const ArticleManage = () => {
  const handleClickTab = () => {};

  const renderArticleAll = () => (
    <>
      <div>文章</div>
    </>
  );

  const renderDraftbox = () => (
    <>
      <div>草稿箱</div>
    </>
  );

  return (
    <>
      <div className={styles['article-list']}>
        <Tabs defaultActiveKey="1" onChange={handleClickTab}>
          <TabPane
            tab={<span className={styles['article-category']}>文章</span>}
            key="文章"
          >
            {renderArticleAll()}
          </TabPane>
          <TabPane
            tab={
              <span className={styles['article-category']}>草稿箱{'(2)'}</span>
            }
            key="草稿箱"
          >
            {renderDraftbox()}
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default ArticleManage;
