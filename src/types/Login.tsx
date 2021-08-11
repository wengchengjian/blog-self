const url = "/getArticleList";

const CLOSE = "CLOSE";

const SUBMIT = "SUBMIT";
const REGISTER = "REGISTER";

const initialState: boolean = false;

const LoginActionCreator = (type: string) => {
  return {
    type: type,
  };
};
type LoginAction = {
  type: string;
};

export { CLOSE, SUBMIT, initialState, REGISTER, url, LoginActionCreator };
export type { LoginAction };
