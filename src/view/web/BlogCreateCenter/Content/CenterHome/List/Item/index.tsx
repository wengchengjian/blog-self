import { EllipsisOutlined } from '@ant-design/icons';
import { List, Dropdown, Menu } from 'antd';

import styles from './index.module.less';

type ItemProps = {
  title: string;
  updateTime: string;
};
const Item = (props: ItemProps) => {
  const onClick = () => {};

  const menu = () => {
    return (
      <>
        <Menu onClick={onClick}>
          <Menu.Item key="编辑">编辑</Menu.Item>
          <Menu.Item key="删除">删除</Menu.Item>
        </Menu>
      </>
    );
  };
  return (
    <>
      <div className={styles['list-item']}>
        <List.Item
          extra={
            <Dropdown overlay={menu}>
              <EllipsisOutlined className={styles['list-item-more']} />
            </Dropdown>
          }
        >
          <div className={styles['list-item-content']}>
            <div className={styles['list-item-box']}>
              <span>{props.title}</span>
            </div>
            <div className={styles['list-item-time']}>{props.updateTime}</div>
          </div>
        </List.Item>
      </div>
    </>
  );
};
export default Item;
