const baseURL = "https://api.unsplash.com/";
require('dotenv').config();
//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY='GxPFgWfSfm8eXIa7Unch_LVACHygI8bi-TsgC0sR41Y'


export const getTrendingImages = async () => {
  
  try {
    console.log("process",process);
    const res = await fetch(`${baseURL}/photos?per_page=30`,{
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error("error in making request", error);
  }
};

/** Return the searched images */
export const getSearchedImages = async (query) => {
  const url = new URL(`${baseURL}/search/photos`);
  url.search = new URLSearchParams({
    per_page: 30,
    query: query,
  });
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json();
    // console.log(json);
    return json.results;
  } catch (error) {
    console.error("error in making request", error);
  }
};