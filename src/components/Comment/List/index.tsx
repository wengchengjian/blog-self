import styles from './index.module.less';
import { useEffect, useState, createContext } from 'react';
import { List, Spin } from 'antd';
import { useParams } from 'react-router';

import { LoadingOutlined } from '@ant-design/icons';
import { getCommentList } from '@/api/v1/common/comment/list';
import { observer } from 'mobx-react';
import { CommentItem } from '@/types/response/POST/comment/list-all';
import MyComment from '@/components/Comment/Detail';

const { Item } = List;

type CommentListProps = {
  articleId: string;
};
type IProps = {
  status: boolean;
};

const CommentList = observer((props: IProps) => {
  const { status } = props;
  const { articleId } = useParams<CommentListProps>();
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState<CommentItem[]>([]);
  useEffect(() => {
    (async function getData() {
      setLoading(true);
      const res = await getCommentList({ articleId });
      console.log('res:s', articleId);

      setCommentList(res);
      setLoading(false);
    })();
  }, [articleId, status]);

  const getItem = (item: CommentItem, isParent?: boolean) => {
    return (
      <>
        <MyComment item={item} isParent={true} />
      </>
    );
  };

  return (
    <>
      <Spin
        spinning={loading}
        indicator={<LoadingOutlined style={{ fontSize: 36 }} />}
      >
        <List
          className={styles['comment-list']}
          header={`${commentList.length} 条回复`}
          dataSource={commentList}
          locale={{ emptyText: '暂无评论' }}
          pagination={{
            total: commentList.length,
            pageSize: 5,
            showSizeChanger: true,
          }}
          size="large"
          renderItem={(item, index) => (
            <Item key={index} className={styles['comment-item']}>
              <div>{getItem(item, true)}</div>
            </Item>
          )}
        />
      </Spin>
    </>
  );
});

export default CommentList;
