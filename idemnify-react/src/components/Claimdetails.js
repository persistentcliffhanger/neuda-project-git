import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Infotablerows from "./Infotablerows";
import {
  getClaimDataAxiosVersion,
} from "./data/DataFunctions";

const Claimdetails = () => {
  const [policy, setPolicy] = useState({});

  let [searchParams, setSearchParams] = useSearchParams();

  //console.log(searchTerm);

  const loadPolicy = (searchTerm) => {
    getClaimDataAxiosVersion(searchTerm).then((result) => {
      setPolicy(result.data);
    });
  };

  useEffect(() => {
    const searchTerm = searchParams.get("policy_number");
    console.log(searchTerm);
    loadPolicy(searchTerm);
  }, []);
  console.log(policy);

  const buttonClick = () => {
    document.getElementById("reject").className = "text-white hover:bg-gray-400 w-1/4 mt-4";

  };

  return (
    <div className="Newquikclaim">
      <div className="container flex lg mx-auto overflow-x-hidden bg-white">
        <div className="w-full h-auto md:block bg-cover bg-center sm:w-full opacity-100 px-6 py-2 mt-0">
          <div
            className=" flex flex-col 
                    items-center justify-center"
          >
            <form className="addTransactionsForm">
              <nav classname="">
                <button id="reject"
                  onClick={buttonClick}
                  type="submit"
                  className="bg-black text-white hover:bg-gray-400 w-1/4 mt-4"
                >
                  Reject
                </button>
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-400 w-1/4 mt-4"
                >
                  Push
                </button>
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-400 w-1/4 mt-4 "
                >
                  Accept
                </button>
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-400 w-1/4 mt-4 "
                >
                  In Progress
                </button>
              </nav>
              <p
                className="text-black font-bold text-xl flex flex-col 
                    items-center justify-center mt-12 mb-12"
              >
                Claim Details
              </p>
              <label htmlFor="policynum" className="text-xs">
                Policy Number
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="policynum"
                //Claim is updated the value is set to the policy number
                value={policy.policy_number}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="name" className="text-xs">
                Policy Holders Name
              </label>
              <input
                aria-label="Enter the policy holders name"
                type="text"
                id="name"
                value={policy.customer_name}
                placeholder="Policy holders name"
                className="text-sm text-gray-base w-full mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded mb-2"
              />
              {/* <button
                // onClick={() => setclaimFieldValue.policy_number()}
                className="bg-gray-600 text-white hover:bg-gray-400 w-1/2 mt-4"
              >
                Update
              </button> */}
              <label htmlFor="claimtype" className="text-xs">
                Claim Type
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="claimtype"
                value={policy.claim_type}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="claimdate" className="text-xs">
                Claim Date
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="claimdate"
                value={policy.claim_date}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="estclaimamt" className="text-xs">
                Estimated Claim Amount
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="estclaimamt"
                value={policy.est_claim_amt}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="address" className="text-xs">
                Address
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="address"
                value={policy.address}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="make" className="text-xs">
                Vehicle Make
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="make"
                value={policy.vehicle_make}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="mpdel" className="text-xs">
                Vehicle Model
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="model"
                value={policy.vehicle_model}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="vehicleyear" className="text-xs">
                Vehicle Year
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="vehicleyear"
                value={policy.vehicle_year}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="pettype" className="text-xs">
                Pet Type
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="pettype"
                value={policy.pet_type}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="petbreed" className="text-xs">
                Pet Breed
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="pet_
                breed"
                value={policy.pet_breed}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <label htmlFor="claimdesc" className="text-xs">
                Claim Description
              </label>
              <textarea
                aria-label="State reason for Claim"
                rows="2"
                placeholder=""
                id="claimdesc"
                className="border border-gray-200 py-2 px-3 mt-2 formcolor rounded w-full"
                value={policy.claim_description}
              ></textarea>
              <label htmlFor="claimreason" className="text-xs">
                Claim reason
              </label>
              <textarea
                aria-label="State reason for Claim"
                rows="2"
                placeholder=""
                id="claimreason"
                className="border border-gray-200 py-2 px-3 mt-2 formcolor rounded w-full"
                value={policy.claim_reason}
              ></textarea>
              <label htmlFor="claimstatus" className="text-xs">
                Claim Status
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="claimstate"
                value={policy.claim_status}
                placeholder=""
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />

              <label htmlFor="notes" className="text-xs">
                Notes
              </label>
              <textarea
                aria-label="State reason for Claim"
                rows="5"
                placeholder=""
                id="claimreason"
                className="border-4 border-red-200  py-2 px-3 mt-2 formcolor rounded w-full"
                value=""
              ></textarea>
              <button
                type="submit"
                className="bg-red-400 text-white hover:bg-gray-400 w-full mt-12 mb-12 py-3 rounded font-bold"
              >
                Update
              </button>
            </form>
          </div>
          <Infotablerows />
        </div>
      </div>
    </div>
  );
};

export default Claimdetails;
