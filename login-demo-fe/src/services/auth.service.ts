import axios from 'axios'

const API_URL = "http://localhost:3000/auth/";



export const login = async (username: string , password :string) => {
  const response = await axios.post(API_URL + "login", {
    username, password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  // console.log(response.data);
  return response.data;
}

export const logout = () => {

  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return true;

  return false;
};
