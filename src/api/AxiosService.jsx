import axios from "axios";

const baseUrl = "http://localhost:8081/akulaku/api";

export const getProfileMethod = async (token) => {
  try {
    const response = await axios.get(baseUrl + "/user/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error Get Profile: ", error);
    throw error;
  }
};

export const postAuthenticateMethod = async (payload) => {
  try {
    const response = await axios.post(baseUrl + "/authenticate", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token } = response.data;
    localStorage.setItem("token", token);
  } catch (error) {
    console.log("Error Get Token: ", error);
    throw error;
  }
};

export const postCreateUserMethod = async (payload) => {
  try {
    const response = await axios.post(baseUrl + "/user/register", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("Error Get Token: ", error);
    throw error;
  }
};
