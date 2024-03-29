import "../Claims.css";
import { useState, useEffect } from "react";
import Claimsrow from "./claimsrow.js";
import { getAllClaimsAxiosVersion } from "./data/DataFunctions";


const Allclaims = (props) => {
  const [claim, setClaims] = useState([]);
  

const loadData = () => {
  getAllClaimsAxiosVersion()
    .then((response) => {
      if (response.status === 200) {
        setClaims(response.data);
        console.log("response", response.data);
      } else {
        console.log("something went wrong", response.status);
      }
    })
    .catch((error) => {
      console.log("something went wrong", error);
    });
};

  useEffect(() => {
    loadData();
  }, []);


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
              <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center hidden lg:table-cell"></th>
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
          <tbody>
            {claim.map((claim, index) => {
              return (
                <Claimsrow
                  key={index}
                  policy_number={claim.policy_number}
                  customer_name={claim.customer_name}
                  claim_type={claim.claim_type}
                  claim_date={claim.claim_date}
                  est_claim_amt={claim.est_claim_amt}
                  claim_status={claim.claim_status}
                  claim_description={claim.claim_description}
                />
              );
            })}
          </tbody>
        </table>
        
      </div>
    </>
  );
};
export default Allclaims;
