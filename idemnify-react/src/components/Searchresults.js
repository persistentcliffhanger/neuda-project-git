import "../Claims.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// import Claimsrow from "./claimsrow.js";

import { getClaimDataSearchByPolicyNumAxiosVersion , getClaimDataFromNameAxiosVersion} from "./data/DataFunctions";
import { useNavigate } from "react-router-dom";

const SearchResults = (event) => {
  const [policy, setPolicy] = useState({});

    let [searchParams, setSearchParams] = useSearchParams();
    

    // if (searchParams.get("policy_number") != null) {
    //     console.log("Policy Number is not null");

        const loadPolicy = (policyNumber) => {
            getClaimDataSearchByPolicyNumAxiosVersion(policyNumber).then((result) => {
                setPolicy(result.data);
            });
        };

        useEffect(() => {
            const policyNumber = searchParams.get("policy_number");
            console.log(policyNumber);
            loadPolicy(policyNumber);
        }, [searchParams]);
        console.log(policy);

        const navigate = useNavigate();
        const onRowClick = () => {
            navigate("/claimdetails?policy_number=" + policy.policy_number);
        };


    // } else if (searchParams.get("customer_name") != null) {
    //     const loadPolicy = (customerName) => {
    //         getClaimDataFromNameAxiosVersion(customerName).then((result) => {
    //           setPolicy(result.data);
    //         });
    //     };
        
    //     useEffect(() => {
    //       const customerName = searchParams.get("customer_name");
    //       console.log(customerName);
    //       loadPolicy(customerName);
    //     }, [searchParams]);
    //     console.log(policy);

    //     const navigate = useNavigate();
    //     const onRowClick = () => {
    //       navigate("/claimdetails?customer_name=" + policy.customer_name);
    //     };
        
    // }



  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <a href="https://www.bbc.co.uk">
          <h1 className="mt-6 text-sm font-bold text-gray-400 hover:text-red-400">
            All claims not yet assessed..
          </h1>
        </a>
        <table className="table-auto mt-10 mb-10">
          <thead>
            <tr>
              <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center">
                Policy Number
              </th>
              <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center">
                Name
              </th>
              <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center hidden lg:table-cell">
                Claim Type
              </th>
              <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center hidden lg:table-cell">
                Date of Claim
              </th>
              <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center">
                Estimated Claim Amount
              </th>
              <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center">
                Claim Status
              </th>
            </tr>
          </thead>
          <tbody
            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
            git
            onClick={() => onRowClick()}
          >
            <td className="lg:table-cell text-center ">
              {policy.policy_number}
            </td>
            <td className="lg:table-cell text-center">
              {policy.customer_name}
            </td>
            <td className="hidden lg:table-cell text-center">
              {policy.claim_type}
            </td>
            <td className="lg:table-cell text-center">{policy.claim_date}</td>
            <td className="lg:table-cell text-center">
              {policy.est_claim_amt}
            </td>
            <td className="lg:table-cell text-center">{policy.claim_status}</td>
          </tbody>
        </table>
      </div>
      <br></br>
      <h3 className="text-center">End of Search Results</h3>
    </>
  );
};
export default SearchResults;
