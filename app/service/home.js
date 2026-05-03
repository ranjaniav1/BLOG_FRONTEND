// import {  httpAxiosForHome } from "../utils/httpAxios";

// export async function getHome() {
//   try {
//     const resposne = await httpAxiosForHome.get("/home");
//     console.log(resposne)
//     return resposne.data.data;
//   } catch (error) {
//     console.error("Error fetching settings:", error);
//     throw error;
//   }
// }


import { httpAxiosForHome } from "../utils/httpAxios";
import { apiRequest } from "../utils/apiHandler";

export const getHome = () =>
  apiRequest({
    axiosInstance: httpAxiosForHome,
    url: "/home",
  }).then((res) => res.data);


export const sendContactMessage = (formData) =>
  apiRequest({
    axiosInstance: httpAxios,
    method: "post",
    url: "/contact",
    data: formData,
    customError: "Contact form error",
  });
export const getSettings = () =>
  apiRequest({
    axiosInstance: httpAxiosForHome,
    url: "/web-setting",
  });

export const createComments = ({ article, content }) =>
  apiRequest({
    axiosInstance: httpAxios,
    method: "post",
    url: "/comments",
    data: { articleId: article?._id, content },
  }).then((res) => res?.data?.comment);

export const getComments = (article) =>
  apiRequest({
    axiosInstance: httpAxios,
    url: `/comments/article/${article._id}`,
  }).then((res) => res?.data?.comments || []);

export const getArticleBasedonCategory = (slug) =>
  apiRequest({
    axiosInstance: httpAxios,
    url: `/articles/category/${slug}`,
  }).then((res) => res.data);

export const getSingleArticle = (slug) =>
  apiRequest({
    axiosInstance: httpAxiosForHome,
    url: `/articles/slug/${slug}`,
  }).then((res) => res.data);

// 📚 Get all series
export const getAllSeries = () =>
  apiRequest({
    axiosInstance: httpAxiosForHome,
    url: "/series",
  }).then((res) => res.data.series);

// 📖 Get lessons by series
export const getLessonsBySeries = (seriesId) =>
  apiRequest({
    axiosInstance: httpAxiosForHome,
    url: `/lesson/series/${seriesId}`,
  }).then((res) => res.data.lessons);