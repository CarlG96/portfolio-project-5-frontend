import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

/*
 * File holding utility functions
 */

// Function for infinite scroll
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {
    // console.log(err);
  }
};

// Function to set token timestamp
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimeStamp", refreshTokenTimestamp);
};

// Function to return bool of whether or not it should refresh token
export const shouldRefreshToken = () => {
  return localStorage.getItem("refreshTokenTimeStamp") === null ? true : false;
};

// Function to remove token timestamp
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimeStamp");
}
