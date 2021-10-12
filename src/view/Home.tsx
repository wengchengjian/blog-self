import { useEffect } from 'react';
import { Layout } from 'antd';
import BlogSider from '../components/BlogSider';
import BlogHeader from '../components/BlogHeader';
import BlogIndex from './web/BlogIndex';
import BlogArchives from './web/BlogArchives';
import BlogCatalogue from './web/BlogCatalogue';
import BlogDashboard from './web/BlogDashboard';
import BlogAbout from './web/BlogAbout';
import BlogArticle from './web/BlogArticle';
import BlogRegister from './web/BlogRegister';
import BlogLogin from './web/BlogLogin';
import BlogContent from '@/components/BlogContent';
import { Switch, Route } from 'react-router';
import { useStores } from '@/hooks/useStore';
import 'antd/dist/antd.css';
import styles from './home.module.less';
import BlogWrite from './web/BlogWrite';
const Home = () => {
  const { userStore, tagStore, articleStore } = useStores();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    await userStore.init();
    await tagStore.init();
    await articleStore.init();
  };
  return (
    <>
      <Layout className={styles['home-page']}>
        <BlogHeader />
        <BlogRegister />
        <BlogLogin />
        <Switch>
          <Route path="/index" component={SiderContent} />
          <Route path="/write" component={BlogWrite} />
        </Switch>
        {/* <BlogFooter /> */}
      </Layout>
    </>
  );
};
const SiderContent = () => {
  return (
    <>
      <div className={styles['main_content']}>
        <Layout>
          <BlogSider />
          <BlogContent>
            <Switch>
              <Route path="/index" exact component={BlogIndex} />
              <Route path="/index/archives" exact component={BlogArchives} />
              <Route path="/index/catalogue" exact component={BlogCatalogue} />
              <Route path="/index/dashboard" exact component={BlogDashboard} />
              <Route path="/index/about" exact component={BlogAbout} />
              <Route
                path="/index/article/:articleId"
                exact
                component={BlogArticle}
              />
            </Switch>
          </BlogContent>
        </Layout>
      </div>
    </>
  );
};
export default Home;
