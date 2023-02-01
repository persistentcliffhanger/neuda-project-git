import axios from "axios";

// const headers = new Headers({ Accept: "application/json" });

// const getAuthHeader = (username, password) => {
//   return { Authorization: "Basic " + btoa(`${username}:${password}`) };
// };

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

// export const getAllClaimsForId = (id) => {
//   return axios({
//     url: "http://localhost:8080/api/claim?order=" + id,
//     method: "GET",
//     headers: { Accept: "application/json" },
//   });
// };

// export const getAllClaimsForPolicyNumber = (policynumber) => {
//   console.log("getPolicyNumbers");
//   return axios({
//     url: "http://localhost:8080/api/policynumber" + policynumber,
//     method: "GET",
//     headers: { Accept: "application/json" },
//   });
// };

// //add Claim:  POST /api/claim
// //update            PUT /api/claim/142645

export const addNewClaim = (claim) => {
  return axios({
    url: "http://localhost:8080/api/claim",
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    data: claim,
  });
};

// export const login = (username, password) => {
//   return axios({
//     url: "http://localhost:8080/api/login",
//     method: "POST",
//     headers: {
//       ...getAuthHeader(username, password),
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     data: { username: username },
//    });
// };

// export const onRowClick = (props) => {

//   let policy_num = props.policy_number;

//   const [redirState, setState] = useState(false);
//   const [policyNumOfRequiredData, setPolicyNumOfRequiredData] = useState('');
//   let redirecting = redirState ? (<Redirect push to={`/claimdetails/policy_number=${policyNumOfRequiredData}`} />) : '';

//   return (
//     <DataTable
//       columns={columns}
//       data={rowData}
//       onRowClicked={rowData => {
//         setState(true);
//         setPolicyNumOfRequiredData(rowData.policyNumOfRequiredData);
//       }}
//       pointerOnHover={true}
//       highlightOnHover={true}
//       theme="light"
//       customStyles={customStyles}
//       striped={true}
//     />
//     // {redirecting}
//   );
// }
