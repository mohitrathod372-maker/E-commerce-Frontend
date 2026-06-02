import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/"
});

export const getAllProducts = async () => {
  const response = await api.get("/products?limit=0");
  return response.data;
};

export const getSingleProduct = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export default api;