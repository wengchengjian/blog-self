import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoginActionCreator, CLOSE, SUBMIT } from "../types/Login";
import BlogLogin from "../view/web/BlogLogin";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    close: () => dispatch(LoginActionCreator(CLOSE)),
    submit: () => dispatch(LoginActionCreator(SUBMIT)),
  };
};
const mapStateToProps = ({ login }: { login: boolean }) => {
  return {
    login: login,
  };
};

const BlogLoginCon = connect(mapStateToProps, mapDispatchToProps)(BlogLogin);

export default BlogLoginCon;
