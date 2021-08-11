import axios from "axios";

const Axios = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/3c975c8ef226c8068291225e97c8d617/blog_self",
  timeout: 1000,
});

export default Axios;
