// services/publicApi.js
import axios from "axios";

const PublicAPI = axios.create({
  baseURL: "http://localhost:8000/api/",
  // No se agrega Authorization
});

export default PublicAPI;
