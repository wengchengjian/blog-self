import React, { useEffect } from "react";
import Axios from "../../types/Axios";
import { Layout, List, Card, Space, Divider } from "antd";
import {
  MessageOutlined,
  TagOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import Avatar from "antd/lib/avatar/avatar";
import BlogContent from "../../components/BlogContent";
import {
  article,
  REFRESH,
  ArticleActionCreator,
  ArticleAction,
  url as ArticleUrl,
  initialState,
} from "../../types/Article";

import store from "../../redux/store";
const { Content } = Layout;

type IconProps = {
  icon: typeof MessageOutlined;
  text?: string;
};

interface BlogIndexType {
  articles: article[];
  ArticleRefresh: (data: article[]) => ArticleAction;
}

const IconText = ({ icon, text }: IconProps) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const BlogIndex = (props: BlogIndexType) => {
  useEffect(() => {
    // console.log(props);
    handleDispath();
  }, []);

  const handleDispath = () => {
    getArtilces(props.ArticleRefresh);
  };

  const getArtilces = async (refresh: (data: article[]) => ArticleAction) => {
    const res = await Axios.post(ArticleUrl, {
      authorId: 5,
    });

    refresh(res.data.data);

    console.log("123", store.getState());
  };
  return (
    <>
      <BlogContent>
        <List
          itemLayout="vertical"
          size="large"
          bordered={false}
          dataSource={props.articles}
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `Total ${total} items`,
          }}
          renderItem={(item) => (
            <List.Item
              className="list-item"
              key={item.artileId}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
                <IconText icon={TagOutlined} key="list-vertical-tag" />,
                <List
                  itemLayout="horizontal"
                  dataSource={item.labels}
                  renderItem={(element) => {
                    return (
                      <span className="label_item" key={element.toString()}>
                        {element}
                      </span>
                    );
                  }}
                />,
              ]}
            >
              {/* <div className="list-item">{item}</div> */}
              <Card bordered={false} title={item.title}>
                <h3>{item.head_title}</h3>
                <Divider />
                <p>{item.outline}</p>
              </Card>
              {/* <List.Item.Meta
                  avatar={
                    <Avatar src="https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  }
                  title="Weng ChengJian"
                  description="This is WebSite Author"
                /> */}
              <Avatar src="https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <span className="author_name">Weng ChengJian </span>
              <span className="public_info"> 发布于 </span>
              <span className="artile_time"> 2021-08-10 </span>
            </List.Item>
          )}
        ></List>
      </BlogContent>
    </>
  );
};
export default BlogIndex;
