import axios from "@/utils/javaHttp";
const User = {
  //用户列表
  getCoachList(data) {
    return axios({
      method: "post",
      url: "/user/GetCoachList",
      data
    });
  },
  //用户列表
  getUserBranchList(data) {
    return axios({
      method: "get",
      url: "/Home/NewsPc/anno",
      params: data
    });
  },
  testApi(data) {
    return axios({
      method: "get",
      url: "/captcha.jpg",
      data
    });
  }
};
export default User;
