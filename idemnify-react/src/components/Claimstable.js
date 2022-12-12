import "./data/data.js";
import "../Claims.css";
import { useEffect, useState } from "react";
import { Claimdata } from "./data/data.js";
import Claimsrow from "./claimsrow.js";
import { useSearchParams } from "react-router-dom";

const ClaimsTable = () => {
  const [claims, setClaims] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const claimdata = Claimdata();

  let [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("search");

  useEffect(() => {
    loadClaim(searchTerm);
  }, [searchParams]);

  const loadClaim = (searchTerm) => {
    const searchedClaim = claimdata.filter((eachClaim) => {
      return (
        eachClaim.claim_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eachClaim.claim_status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eachClaim.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eachClaim.policy_number.includes(searchTerm) ||
        eachClaim.claim_date.includes(searchTerm) ||
        eachClaim.customer_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setClaims(searchedClaim);
  };

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

            {claims.length >0 && claims.map((claim, index) => {
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
export default ClaimsTable;
