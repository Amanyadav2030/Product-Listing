/**
 * The function should accept the following parameters:
 * @param {string} page - page number
 * @param {"asc" | "desc"} sortBy - sort by asc or desc
 * @param {number} limit - number of products per page
 * @returns {Promise} - Promise object represents the result of the API call
 * @description This function is used to get all products from the server.
 * url - https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products
 * method - GET
 * query params - page, sortBy, limit
 * response - {
 *    "data": [ ],
 *   "totalPages": 0
 * @example
 * getProducts({})
 * .then(response => {
 *    const {data, totalPages} = response;
 * })
 * @returns {Promise}
 */

// query params:
//  page
//  orderBy
//  limit

export const getProducts = (page=1,limit=5,sort=null) => {
  const url= sort==null? `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}`:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}&orderBy=${sort}`;
  return fetch(url).then((res)=>{
    return res.json();
  }).then((res)=>{
    const {data,totalPages} = res;
    return {data,totalPages};
  })
}
