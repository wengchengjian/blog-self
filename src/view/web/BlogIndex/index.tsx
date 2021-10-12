import React from 'react';
import { List, Card, Space, Divider } from 'antd';
import {
  MessageOutlined,
  TagOutlined,
  LikeOutlined,
  StarOutlined,
  DislikeOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react';
import 'antd/dist/antd.css';
import Permission from '@/components/Permission';
import styles from './index.module.less';

import Avatar from 'antd/lib/avatar/avatar';
import BlogContent from '../../../components/BlogContent';
import { getRandomColor } from '../../../utils/RandomUtils';
import { useHistory } from 'react-router-dom';

import { useStores } from '../../../hooks/useStore';
import {
  getArticles,
  unLikeArticles,
  unStarArticles,
  searchArticles,
  likeArticle,
  starArticle,
} from '@/api/v1/common/article';

type IconProps = {
  icon: React.ReactNode;
  text?: string;
  onClick?: (articleId: string) => Promise<void>;
  articleId: string;
};

const BlogIndex = observer(() => {
  const { articleStore, userStore } = useStores();
  const history = useHistory();

  const IconText = ({ icon, text, onClick, articleId }: IconProps) => {
    return (
      <Space>
        <span
          onClick={() => {
            onClick && onClick(articleId);
          }}
          style={{ cursor: 'pointer' }}
        >
          {icon}
          &nbsp; {text}
        </span>
      </Space>
    );
  };

  const handleClickArticle = (id: string) => {
    history.push(`/index/article/${id}`);
  };

  const handleClickUnlike = async (articleId: string) => {
    await unLikeArticles({ articleId });
    userStore.getUserStarList();
    articleStore.queryArticleList();
  };

  const handleClickStar = async (articleId: string) => {
    const res = await starArticle({
      articleId,
    });
    userStore.getUserStarList();
    articleStore.queryArticleList();
  };

  const handleClicklike = async (articleId: string) => {
    await likeArticle({
      articleId,
    });
    userStore.getUserStarList();
    articleStore.queryArticleList();
  };

  const clickTabs = async (tagName: string) => {
    await searchArticles({
      condition: tagName,
    });
  };
  const hasClick = (fc: (articleId: string) => boolean, articleId: string) => {
    return fc(articleId) ? '#1890ff' : '';
  };
  return (
    <>
      <BlogContent>
        <List
          itemLayout="vertical"
          size="large"
          bordered={false}
          dataSource={articleStore.CurrentArticles}
          pagination={{
            defaultPageSize: 5,
            total: articleStore.CurrentArticles.length,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
          renderItem={(item) => (
            <List.Item
              className={styles['list-item']}
              key={item.articleId}
              actions={[
                <Permission>
                  <IconText
                    icon={
                      <StarOutlined
                        style={{
                          color: hasClick(
                            userStore.StarArticle.bind(userStore),
                            item.articleId
                          ),
                        }}
                      />
                    }
                    text={item.star}
                    key="list-vertical-star-o"
                    articleId={item.articleId}
                    onClick={handleClickStar}
                  />
                </Permission>,
                <Permission>
                  <IconText
                    icon={
                      <LikeOutlined
                        style={{
                          color: hasClick(
                            userStore.likeArticle.bind(userStore),
                            item.articleId
                          ),
                        }}
                      />
                    }
                    text={item.likes}
                    key="list-vertical-like-o"
                    articleId={item.articleId}
                    onClick={handleClicklike}
                  />
                </Permission>,
                <Permission>
                  <IconText
                    icon={
                      <DislikeOutlined
                        style={{
                          color: hasClick(
                            userStore.dislikeArticles.bind(userStore),
                            item.articleId
                          ),
                        }}
                      />
                    }
                    text={item.unlikes}
                    key="list-vertical-unlike-o"
                    articleId={item.articleId}
                    onClick={handleClickUnlike}
                  />
                </Permission>,

                <IconText
                  icon={<TagOutlined />}
                  key="list-vertical-tag"
                  articleId={item.articleId}
                />,
                <List
                  locale={{ emptyText: '暂无标签' }}
                  itemLayout="horizontal"
                  dataSource={item.articleTags}
                  renderItem={(element) => {
                    let color = getRandomColor();
                    return (
                      <span
                        className={styles['label_item']}
                        style={{ backgroundColor: color, cursor: 'pointer' }}
                        key={element.id}
                        onClick={clickTabs.bind(null, element.tagName)}
                      >
                        {element.tagName}
                      </span>
                    );
                  }}
                />,
              ]}
            >
              {/* <div className="list-item">{item}</div> */}
              <Card
                bordered={false}
                title={item.articleTitle}
                onClick={() => handleClickArticle(item.articleId)}
                style={{ cursor: 'pointer' }}
              >
                <p>{item.articleTabloid}</p>
              </Card>
              {/* <List.Item.Meta
                  avatar={
                    <Avatar src="https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  }
                  title="Weng ChengJian"
                  description="This is WebSite Author"
                /> */}
              <Avatar src="https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <span className={styles['author_name']}>{item.author} </span>
              <span className={styles['public_info']}> 发布于 </span>
              <span className={styles['artile_time']}>{item.createTime}</span>
            </List.Item>
          )}
        ></List>
      </BlogContent>
    </>
  );
});
export default BlogIndex;
