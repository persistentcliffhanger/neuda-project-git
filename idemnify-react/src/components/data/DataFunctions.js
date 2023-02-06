import axios from "axios";

export const getAllClaimsAxiosVersion = () => {
  return axios({
    url: "http://localhost:8080/api/claim",
    method: "GET",
    headers: { Accept: "application/json" },
  });
};

export const getAllClaimsBySearch = (searchTerm) => {
  console.log("getallClaimsbysearch");
  return axios({
    url: "http://localhost:8080/api/claim?search=" + searchTerm,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
};

export const getClaimDataAxiosVersion = (policyNumber) => {
  return axios({
    url: "http://localhost:8080/api/claim?policy_number=" + policyNumber,
    method: "GET",
    headers: { Accept: "application/json" },
  });
};

export const getClaimDataFromNameAxiosVersion = (customerName) => {
  return axios({
    url: "http://localhost:8080/api/claim?customer_name=" + customerName,
    method: "GET",
    headers: { Accept: "application/json" },
  });
};

export const getClaimDataSearchByPolicyNumAxiosVersion = (policyNumber) => {
  return axios({
    url: "http://localhost:8080/api/claim?policy_number=" + policyNumber,
    method: "GET",
    headers: { Accept: "application/json" },
  });
};

export const getClaimDataSearchByCustomerNameAxiosVersion = (customerName) => {
  return axios({
    url: "http://localhost:8080/api/claim?customer_name=" + customerName,
    method: "GET",
    headers: { Accept: "application/json" },
  });
};

// //add Claim:  POST /api/claim
// //update            PUT /api/claim/142645

export const addNewClaim = (claim) => {
  console.log(claim);
  return axios({
    url: "http://localhost:8080/api/claim",
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    data: { claim: claim },
  });
};
