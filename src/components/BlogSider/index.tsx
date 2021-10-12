import { useEffect, useMemo } from 'react';
import { Row, Col, Layout, List, Space, Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { getRandomColor } from '../../utils/RandomUtils';
import 'antd/dist/antd.css';
import styles from './index.module.less';
import { observer } from 'mobx-react';
import { useStores } from '@/hooks/useStore';
import { recentArticles, searchArticles } from '@/api/v1/common/article';

const { Meta } = Card;
const { Sider } = Layout;

const BlogSider = observer(() => {
  const history = useHistory();
  const { tagStore, articleStore, userStore } = useStores();

  const recentArticleJSX = useMemo(() => {
    return (
      <>
        <Card title="最近文章">
          <List
            locale={{ emptyText: '暂无文章' }}
            itemLayout="horizontal"
            dataSource={articleStore.recentArticles}
            renderItem={(element) => {
              let color = getRandomColor();

              return (
                <div
                  className={styles['label_item']}
                  style={{ backgroundColor: color, cursor: 'pointer' }}
                  key={element.articleId}
                  onClick={() => handleClickForward(element.articleId)}
                >
                  {element.articleTitle}
                </div>
              );
            }}
          />
        </Card>
      </>
    );
  }, [articleStore.recentArticles]);

  const Tags = useMemo(() => {
    return (
      <>
        <Card title="标签">
          <List
            locale={{ emptyText: '暂无标签' }}
            itemLayout="horizontal"
            dataSource={tagStore.tags}
            renderItem={(element) => {
              let color = getRandomColor();

              return (
                <span
                  className={styles['label_item']}
                  style={{ backgroundColor: color, cursor: 'pointer' }}
                  key={element.id}
                  onClick={() => clickTabs(element.tagName)}
                >
                  {element.tagName}
                </span>
              );
            }}
          />
        </Card>
      </>
    );
  }, [tagStore.tags]);

  const clickTabs = async (Name: string) => {
    const result = await searchArticles({
      condition: Name,
    });
    articleStore.setCurrentArticles = result;
  };

  const handleClickForward = (articleId: string) => {
    history.push(`/index/article/${articleId}`);
  };

  const forwardWrite = () => {
    history.push('/write');
  };
  return (
    <>
      {/* <Affix offsetTop={64}> */}
      <Sider width={300} className={styles['sider']}>
        <Space direction="vertical" size="middle">
          <Card
            // style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/2eccf42e29594ebf9e94021477db8ef9.png!sswm"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" onClick={forwardWrite} />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src={userStore.user.avatarImgUrl} />}
              title={userStore.user.nickname}
              description={userStore.user.personalBrief}
            />
          </Card>
          <Row justify="space-around" className={styles['cate-row']}>
            <Col>
              <Card bordered={false}>
                <p className={styles['font-primary']}>
                  {articleStore.Articles.length}
                </p>
                <p>文章</p>
              </Card>
            </Col>
            <Col>
              <Card bordered={false}>
                <p className={styles['font-primary']}>10</p>
                <p>目录</p>
              </Card>
            </Col>
            <Col>
              <Card bordered={false}>
                <p>{tagStore.tags.length}</p>
                <p>标签</p>
              </Card>
            </Col>
          </Row>
          {recentArticleJSX}
          {Tags}
        </Space>
      </Sider>
      {/* </Affix> */}
    </>
  );
});

export default BlogSider;
