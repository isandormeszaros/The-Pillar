import http from "../http-common";

// GET ALL WATCHES
const getAll = () => {
  return http.get(`/allwatches`);
};

// GET WATCHES BY ID
const get = (id) => {
  return http.get(`/brands/${id}`);
};

// SEARCH INPUT FILTER
const getFiltered = (szur) => {
  return http.get(`/allwatches/filter/${szur}`);
};

// SEARCH INPUT FILTER
const getDetailedFiltered = JS => {
  console.log(JS)
  return http.post(`/allwatches/filter`, JS);

};

// SORT BY PRICE ASC
const sortByPriceAsc = () => {
  return http.get("/allwatches/sort/asc");
};

// SORT BY PRICE DESC
const sortByPriceDesc = () => {
  return http.get("/allwatches/sort/desc");
};

// GET PAGES FOR INFINITE SCROLL
const getPage = (page) => {
  return http.get(`/allwatches/page/${page}`);
};

// GET PAGES FOR COMPOUND FILTERS
const getBrands = () =>{
  return http.get("/allwatches/all/brands");
};

// GET DIALCOLORS FOR COMPOUND FILTERS
const getDialColors = () =>{
  return http.get("/allwatches/all/dialcolors");
};

// GET DATES FOR COMPOUND FILTERS
const getDates = () =>{
  return http.get("/allwatches/all/dates");
};

// GET CASEMATERIALS FOR COMPOUND FILTERS
const getCaseMaterials = () =>{
  return http.get("/allwatches/all/casematerials");
};

// GET STRAPMATERIALS FOR COMPOUND FILTERS
const getStrapMaterials = () =>{
  return http.get("/allwatches/all/strapmaterials");
};

// GET MOVEMENTS FOR COMPOUND FILTERS
const getMovements = () =>{
  return http.get("/allwatches/all/movements");
};

// GET RESISTANCES FOR COMPOUND FILTERS
const getResistances = () =>{
  return http.get("/allwatches/all/resistances");
};

// GET BANDWIDTHES FOR COMPOUND FILTERS
const getBandWidthes = () =>{
  return http.get("/allwatches/all/bandwidthes");
};

// GET DIALMATERIALS FOR COMPOUND FILTERS
const getDialMaterials = () =>{
  return http.get("/allwatches/all/dialmaterials");
};

const postSearch = (filter) =>{
  return http.post(`/products/filter`,filter)
};

const getEmails = () =>{
  return http.get("/auth/validemaillist");
};

const getOtp = () =>{
  return http.get("/auth/otp");
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
  getFiltered,
  getDetailedFiltered,
  sortByPriceAsc,
  sortByPriceDesc,
  getPage,
  getBrands,
  getDialColors,
  getDates,
  getCaseMaterials,
  getStrapMaterials,
  getMovements,
  getResistances,
  getBandWidthes,
  getDialMaterials,
  getEmails,
  getOtp,
  postSearch,
  create,
  remove,
  update,
};

export default WatchesServices;
