import "../Claims.css";
import { useEffect, useState } from "react";
import Claimsrow from "./claimsrow.js";
import { useSearchParams } from "react-router-dom";
import { getAllClaims } from "./data/ClaimData";
import { getAllClaimsAxiosVersion } from "./data/DataFunctions";

const ClaimsTable = () => {
  const [claims, setClaims] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const claimdata = getAllClaims();

  let [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("search");

  const loadData = (searchTerm) => {
    getAllClaimsAxiosVersion(searchTerm)
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
    loadData(searchTerm);
    
  }, [searchParams]);


  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
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
            {claims.length > 0 &&
              claims.map((claim, index) => {
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
                    claim_image1={claim.claim_image_1}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ClaimsTable;
