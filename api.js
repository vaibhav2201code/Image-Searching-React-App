import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID aYzrOr6qFZCHlM6USl6nM8qA0nhpCuy5uuseKYqDP6M",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
