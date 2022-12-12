import { useEffect, useState } from "react";
import Claimsrow from "./claimsrow";
import { useSearchParams } from "react-router-dom";
import { Claimdata } from "./data/data.js";


const Claimdetails = () => {
  const claimdata = Claimdata();
  
  let [searchParams, setSearchParams] = useSearchParams();

  const [claim, setClaim] = useState([]);

  const policy = searchParams.get("policy_number");
console.log("Policy:", policy);
 const loadClaim = (searchTerm) => {
   const claim = claimdata.filter((claim) => {
     return claim.policy_number === searchTerm;
   });
   setClaim(claim);
 };
  useEffect(() => {
    loadClaim(policy);
  }, [searchParams]);
console.log("Claimdata:", claimdata);
    return (
      <div className="Newquikclaim">
        <div className="container flex lg mx-auto overflow-x-hidden bg-white">
          <div className="w-full h-auto md:block bg-cover bg-center sm:w-full opacity-100 px-6 py-2 mt-0">
            <div
              className=" flex flex-col 
                    items-center justify-center"
            >
              <p className="text-black font-bold text-xl mb-3">Claim Details</p>

              <form className="addTransactionsForm">
                <input
                  aria-label="Enter the policy number"
                  type="text"
                  id="policy"
                  value={
                    claim[0] && claim[0].policy_number
                      ? claim[0].policy_number
                      : "not found"
                  }
                  placeholder="Policy Number"
                  className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
                />
                <input
                  aria-label="Enter the policy holders name"
                  type="text"
                  id="name"
                  value={
                    claim[0] && claim[0].customer_name
                      ? claim[0].customer_name
                      : ""
                  }
                  placeholder="Policy holders name"
                  className="text-sm text-gray-base w-full mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded mb-2"
                />

                {/* <div>{message}</div> */}
              </form>

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
          </div>
        </div>
      </div>
    );
  };


export default Claimdetails;
