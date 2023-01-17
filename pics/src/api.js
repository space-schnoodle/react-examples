import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID KfcT7f3Lq7LN175B0pX1Tfb_5pT0m-fOKwGBaE4XqE0",
    },
    params: {
      query: term,
    },
  });

  console.log("the response", response);

  return response.data.results;
};

export default searchImages;
