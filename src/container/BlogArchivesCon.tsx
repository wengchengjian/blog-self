import BlogArchives from "../view/web/BlogArchives";

import { connect } from "react-redux";

import { Dispatch } from "redux";

import { REFRESH, TimeLineActionCreator, TimeLine } from "../types/TimeLine";
const mapStateToProps = ({ timeLines }: { timeLines: TimeLine[] }) => {
  console.log("timeLine", timeLines);

  return {
    archiveLines: [...timeLines],
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    archivesRefresh: (data: TimeLine[]) =>
      dispatch(TimeLineActionCreator(REFRESH, data)),
  };
};

const BlogArchivesCon = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogArchives);
export default BlogArchivesCon;
