import React from "react";
import { Row, Col, Layout, Menu, List, Card, Space, Divider } from "antd";
import {
  MessageOutlined,
  TagOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../static/sass/components/content.scss";
import Avatar from "antd/lib/avatar/avatar";

const { Content } = Layout;
type ContentProps = {
  children: React.ReactNode;
};

const BlogContent = ({ children }: ContentProps) => {
  return (
    <>
      <Content>
        <div className="cotent-box">{children}</div>
      </Content>
    </>
  );
};

export default BlogContent;
