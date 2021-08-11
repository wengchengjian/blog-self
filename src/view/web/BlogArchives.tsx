import React, { useEffect } from "react";
import { Layout, Timeline as Time } from "antd";

import { ClockCircleOutlined } from "@ant-design/icons";
import BlogContent from "../../components/BlogContent";
import Axios from "../../types/Axios";
import "../../static/sass/view/archives.scss";

import {
  REFRESH,
  CONTAIN,
  url as ArchivesUrl,
  TimeLine,
  TimeLineAction,
} from "../../types/TimeLine";
const { Content } = Layout;

type BlogArchivesProps = {
  archiveLines: TimeLine[];
  archivesRefresh: (data: TimeLine[]) => TimeLineAction;
};

const BlogArchives = (props: BlogArchivesProps) => {
  useEffect(() => {
    console.log(props);

    handleDispath();
  }, []);

  const handleDispath = () => {
    getArtilces(props.archivesRefresh);
  };

  const getArtilces = async (refresh: (data: TimeLine[]) => TimeLineAction) => {
    const res = await Axios.post(ArchivesUrl, {
      authorId: 5,
    });
    console.log("resf", refresh);

    refresh(res.data.data);
  };

  return (
    <>
      <BlogContent>
        <div className="archives_box">
          <Time mode="alternate">
            {props.archiveLines.map((item: TimeLine, index) => {
              let color = "";

              if (item.TimeLineStatus == 0) {
                color = "red";
              } else if (item.TimeLineStatus == 1) {
                color = "blue";
              } else {
                color = "green";
              }
              return (
                <Time.Item
                  color={color}
                  dot={
                    color === "blue" ? (
                      <ClockCircleOutlined style={{ fontSize: "16px" }} />
                    ) : null
                  }
                >
                  {item.TimeLineContent}
                </Time.Item>
              );
            })}
          </Time>
        </div>
      </BlogContent>
    </>
  );
};

export default BlogArchives;
