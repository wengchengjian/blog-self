import { Row, Col, Layout, Menu } from "antd";
import {observer} from "mobx-react";

import "antd/dist/antd.css";
import styles from "./index.module.less";

const { Footer } = Layout;

const BlogFooter = observer(() => {
  return (
    <>
      <Footer>底部</Footer>
    </>
  );
});

export default BlogFooter;
