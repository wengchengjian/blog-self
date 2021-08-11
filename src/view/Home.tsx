import { Layout } from "antd";
import BlogSider from "../components/BlogSider";
import BlogHeader from "../components/BlogHeader";
import BlogIndexCon from "../container/BlogIndexCon";
import BlogArchivesCon from "../container/BlogArchivesCon";
import BlogCatalogue from "./web/BlogCatalogue";
import BlogDashboard from "./web/BlogDashboard";
import BlogAbout from "./web/BlogAbout";
import BlogArticle from "../view/web/BlogArticle";
import BlogLoginCon from "../container/BlogLoginCon";
import { Switch, Route } from "react-router";
import MarketAnalysis from "./web/market_analysis";
import "../static/sass/home.scss";
import "antd/dist/antd.css";

const Home = () => {
  return (
    <>
      <Layout>
        <BlogHeader />
        <div className="main_content">
          <Layout>
            <BlogSider />
            <Switch>
              <Route path="/" exact component={MarketAnalysis} />
              <Route path="/archives" exact component={BlogArchivesCon} />
              <Route path="/catalogue" exact component={BlogCatalogue} />
              <Route path="/dashboard" exact component={BlogDashboard} />
              <Route path="/about" exact component={BlogAbout} />
              <Route path="/article:id" exact component={BlogArticle} />
            </Switch>
          </Layout>
        </div>
        <BlogLoginCon />
        {/* <BlogFooter /> */}
      </Layout>
    </>
  );
};

export default Home;
