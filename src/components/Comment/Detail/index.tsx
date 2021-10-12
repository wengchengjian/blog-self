import { useState, useContext, useEffect } from 'react';
import { CommentItem } from '@/types/response/POST/comment/list-all';
import { Comment } from 'antd';
import { observer } from 'mobx-react';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons';
import moment from 'moment';
import Reply from '@/components/Reply';
import { starComment } from '@/api/v1/common/comment/star';
import { unStarComment } from '@/api/v1/common/comment/unstar';
import { commentContext } from '@/view/web/BlogArticle';
import { useStores } from '@/hooks/useStore';
import styles from './index.module.less';

interface CommentProps {
  isParent: boolean;
  item: CommentItem;
  children?: React.ReactNode;
}

//支持嵌套
const MyComment = observer(({ item, children, isParent }: CommentProps) => {
  const { userStore } = useStores();
  const context = useContext(commentContext);
  const [expand, setExpand] = useState(false);
  const [likes, setLikes] = useState(() => item.likes);
  const [unlikes, setUnlike] = useState(() => item.unlikes);

  const [reply, setReply] = useState(false);

  const onReply = () => {
    //打开关闭回复框
    setReply((value) => !value);
  };

  const dolike = async () => {
    await starComment({ commentId: item.id });
    context?.refresh((value) => !value);
  };

  const doUnLike = async () => {
    await unStarComment({ commentId: item.id });
    context?.refresh((value) => !value);
  };

  const handleClickCheck = () => {
    setExpand(true);
  };
  const handleClickUser = () => {};

  return (
    <>
      <Comment
        actions={[
          <span onClick={dolike}>
            {userStore.likeComment(item.id) ? <LikeFilled /> : <LikeOutlined />}
            <span className={styles['comment-action']}>{likes}</span>
          </span>,
          <span onClick={doUnLike}>
            {userStore.unlikeComment(item.id) ? (
              <DislikeFilled />
            ) : (
              <DislikeOutlined />
            )}
            <span className={styles['comment-action']}>{unlikes}</span>
          </span>,
          <span
            key="comment-list-reply-to-0"
            onClick={() => onReply()}
            style={{ color: 'skyblue' }}
          >
            回复
          </span>,
        ]}
        author={
          <>
            <div>
              <span className={styles['author']}>{item.user.nickname}</span>
              {!isParent ? (
                <>
                  <span className={styles['reply']}>回复</span>
                  <span
                    className={styles['reply-user']}
                    onClick={handleClickUser}
                  >{`@${item.replyTo?.nickname}`}</span>
                </>
              ) : undefined}
            </div>
          </>
        }
        avatar={item.user.avatarImgUrl}
        content={item.content}
        datetime={moment(item.createTime).format('YYYY-MM-DD')}
      >
        {item.children
          ? item.children.map((v, index) => {
              if (index <= 2 || expand) {
                return <MyComment key={v.id} item={v} isParent={false} />;
              }
            })
          : undefined}
      </Comment>
      {!expand && item.children && item.children.length > 2 ? (
        <div className={styles['messages-box']}>
          <span>共{item.children.length}条回复,</span>
          <span
            className={styles['query-all-comment']}
            onClick={handleClickCheck}
          >
            点击查看
          </span>
        </div>
      ) : undefined}
      {reply ? (
        <Reply
          replyId={item.user.id}
          articleId={item.articleId}
          parentCid={item.parentCid ?? item.id}
        />
      ) : undefined}
    </>
  );
});

export default MyComment;
