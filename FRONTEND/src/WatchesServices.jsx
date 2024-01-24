// Correct the import statement to match the export name
import http from "./http-common";

const getAll = () => {
  return http.get('/brands');
};

const get = (id) => {
  return http.get(`/brands/${id}`);
};

const create = (data) => {
  return http.post(`/brands`, data);
};

const remove = (id) => {
  return http.delete(`/brands/${id}`);
};

const update = (id, data) => {
  return http.put(`/brands/${id}`, data);
};

const WatchesServices = {
  getAll,
  get,
  create,
  remove,
  update
};

// Correct the export statement to match the variable name
export default WatchesServices;
