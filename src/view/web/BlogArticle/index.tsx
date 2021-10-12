import { useState, useEffect, createContext } from 'react';
import { Viewer } from '@bytemd/react';
import { useParams } from 'react-router';
import { Row, Col } from 'antd';
import 'github-markdown-css/github-markdown.css';
import { observer } from 'mobx-react';
import styles from './index.module.less';
import { queryArticle } from '@/api/v1/common/article';
import { Article } from '@/types/common/article';
import Reply from '@/components/Reply';
import { useStores } from '@/hooks/useStore';
import CommentList from '@/components/Comment/List';
import Permission from '@/components/Permission';
import { plugins } from '@/view/web/BlogWrite';
type paramsProps = {
  articleId: string;
};
type ContextProps = {
  refresh: React.Dispatch<React.SetStateAction<boolean>>;
};
export const commentContext = createContext<ContextProps | null>(null);

const BlogArticle = observer(() => {
  const { articleId } = useParams<paramsProps>();
  const { userStore } = useStores();
  const [article, setArticle] = useState<Article>();
  const [status, refresh] = useState(false);

  useEffect(() => {
    getArticle();
  }, [articleId]);
  const getArticle = async () => {
    const result = await queryArticle({ id: articleId });

    setArticle(result);
  };
  return (
    <>
      <commentContext.Provider value={{ refresh }}>
        <div className={styles['markdown-body']}>
          <Row gutter={24}>
            <Col span={16} push={2}>
              <div className={styles['article-content']}>
                <Viewer
                  value={article?.articleContent || ''}
                  plugins={plugins}
                />
              </div>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={16} push={2}>
              <CommentList status={status} />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={16} push={2}>
              <Permission>
                <Reply articleId={articleId} replyId={userStore.user.id} />
              </Permission>
            </Col>
          </Row>
        </div>
      </commentContext.Provider>
    </>
  );
});

export default BlogArticle;
