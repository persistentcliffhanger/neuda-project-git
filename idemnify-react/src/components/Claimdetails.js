import { useState, useEffect } from "react";
import { getAllClaims } from "./data/ClaimData";
import { Claimdata } from "./data/data.js";
import { useSearchParams } from "react-router-dom";

const Claimdetails = () => {
  const [policy, setPolicy] = useState([]);

  const policyData = getAllClaims();

  let [searchParams, setSearchParams] = useSearchParams();
  console.log(policy);
  console.log(policyData);
  console.log(
    "ternary: ",
    policy[0] && policy[0].policy_number ? policy[0].policy_number : "not found"
  );

  const searchTerm = searchParams.get("policy_number");
  console.log(searchTerm);

  const loadPolicy = (searchTerm) => {
    const policy = policyData.filter((policy) => {
      return policy.policy_number === +searchTerm;
    });
    setPolicy(policy); // Update the policy state with the filtered policy array
  };

  useEffect(() => {
    loadPolicy(searchTerm);
  }, [searchParams]);

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
                //when the claim is updated the value is set to the policy number
                value={
                  policy[0] && policy[0].policy_number
                    ? policy[0].policy_number
                    : ""
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
                  policy[0] && policy[0].customer_name
                    ? policy[0].customer_name
                    : ""
                }
                placeholder="Policy holders name"
                className="text-sm text-gray-base w-full mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded mb-2"
              />

              {/* <div>{message}</div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claimdetails;
