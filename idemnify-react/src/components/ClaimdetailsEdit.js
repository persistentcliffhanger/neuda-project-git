import { useState, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import Infotablerows from "./Infotablerows";
import { getClaimDataAxiosVersion, updateClaim } from "./data/DataFunctions";

const Claimdetailsedit = () => {
  const [policy, setPolicy] = useState({});
  const [id, setId] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();

  const loadPolicy = (searchTerm) => {
    getClaimDataAxiosVersion(searchTerm).then((result) => {
      setPolicy(result.data);
      setId(result.data.id);
      
      console.log("This is result.data: ", result.data.id);
    });
  };

console.log("This is the id: ", id);

  useEffect(() => {
    const searchTerm = searchParams.get("policy_number");
    console.log(searchTerm);
    loadPolicy(searchTerm);
    
  }, []);
  console.log(policy);
  
  const initialNewClaimState = {
    policy_number: policy.policy_number,
    customer_name: policy.customer_name,
    claim_type: policy.claim_type,
    claim_date: policy.claim_date,
    est_claim_amt: policy.est_claim_amt,
    address: policy.address,
    vehicle_make: policy.vehicle_make,
    vehicle_model: policy.vehicle_model,
    vehicle_year: policy.vehicle_year,
    pet_type: policy.pet_type,
    pet_breed: policy.pet_breed,
    claim_description: policy.claim_description,
    claim_reason: policy.claim_reason,
    claim_status: policy.claim_status,
    image_1: "",
  };

  const [message, setMessage] = useState("");

  const formReducer = (state, data) => {
    return {
      ...state,
      [data.field]: data.value,
    };
  };

  const [claimEdit, dispatch] = useReducer(formReducer, initialNewClaimState);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("..updating");

    updateClaim(id, claimEdit)
    console.log("this is the claimedit ",claimEdit);
      console.log("This is the policy id " ,policy.id)
      .then((response) => {
        if (response.status === 200) {
          setMessage("claim updated for id " + response.data.id);
        } else {
          setMessage(
            "something went wrong - error code was " + response.status
          );
        }
      })
      .catch((error) => console.log("something went wrong ", error));
  };

  const handleChange = (event) => {
    dispatch({ field: event.target.id, value: event.target.value });
  };

  return (
    <div className="Newquikclaim">
      <div className="container flex lg mx-auto overflow-x-hidden bg-white">
        <div className="w-full h-auto md:block bg-cover bg-center sm:w-full opacity-100 px-6 py-2 mt-0">
          <div
            className=" flex flex-col 
                    items-center justify-center"
          >
            <form className="updateClaimForm" onSubmit={handleSubmit}>
              <p
                className="text-red-600 font-bold text-xl flex flex-col 
                    items-center justify-center mt-12 mb-12"
              >
                Editing Claim Details
              </p>
              <label htmlFor="policynum" className="text-xs">
                Policy Number
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="policynum"
                value={claimEdit.policy_number}
                onChange={handleChange}
                placeholder={policy.policy_number}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="name" className="text-xs">
                Policy Holders Name
              </label>
              <input
                aria-label="Enter the policy holders name"
                type="text"
                id="name"
                value={claimEdit.customer_name}
                // onChange={handleChange}
                placeholder={policy.customer_name}
                className="text-sm text-red-600 w-full mr-3 
                              py-5 px-4 h-2 border border-red-600 
                              rounded mb-2"
              />
              <label htmlFor="claimtype" className="text-xs">
                Claim Type
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="claimtype"
                value={claimEdit.claim_type}
                // onChange={handleChange}
                placeholder={policy.claim_type}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="claimdate" className="text-xs">
                Claim Date
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="claimdate"
                value={claimEdit.claim_date}
                // onChange={handleChange}
                placeholder={policy.claim_date}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="estclaimamt" className="text-xs">
                Estimated Claim Amount
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="estclaimamt"
                value={claimEdit.est_claim_amt}
                // onChange={handleChange}
                placeholder={policy.est_claim_amt}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="address" className="text-xs">
                Address
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="address"
                value={claimEdit.address}
                // onChange={handleChange}
                placeholder={policy.address}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="make" className="text-xs">
                Vehicle Make
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="make"
                value={claimEdit.vehicle_make}
                // onChange={handleChange}
                placeholder={policy.vehicle_make}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="mpdel" className="text-xs">
                Vehicle Model
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="model"
                value={claimEdit.vehicle_model}
                // onChange={handleChange}
                placeholder={policy.vehicle_model}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="vehicleyear" className="text-xs">
                Vehicle Year
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="vehicleyear"
                value={claimEdit.vehicle_year}
                // onChange={handleChange}
                placeholder={policy.vehicle_year}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="pettype" className="text-xs">
                Pet Type
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="pettype"
                value={claimEdit.pet_type}
                // onChange={handleChange}
                placeholder={policy.pet_type}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="petbreed" className="text-xs">
                Pet Breed
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="pet_
                breed"
                value={claimEdit.pet_breed}
                // onChange={handleChange}
                placeholder={policy.pet_breed}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="claimdesc" className="text-xs">
                Claim Description
              </label>
              <textarea
                aria-label="State reason for Claim"
                rows="2"
                placeholder={policy.claim_description}
                id="claimdesc"
                className="border text-red-600 border-red-600 py-2 px-3 mt-2 formcolor rounded w-full"
                value={claimEdit.claim_description}
                // onChange={handleChange}
              ></textarea>
              <label htmlFor="claimreason" className="text-xs">
                Claim reason
              </label>
              <textarea
                aria-label="State reason for Claim"
                rows="2"
                placeholder={policy.claim_reason}
                id="claimreason"
                className="border text-red-600 border-red-600 py-2 px-3 mt-2 formcolor rounded w-full"
                value={claimEdit.claim_reason}
                // onChange={handleChange}
              ></textarea>
              <label htmlFor="claimstatus" className="text-xs">
                Claim Status
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="claimstate"
                value={claimEdit.claim_status}
                placeholder={policy.claim_status}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
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
              <div className="updateClaimMessage">{message}</div>
            </form>
          </div>
          <Infotablerows />
        </div>
      </div>
    </div>
  );
};

export default Claimdetailsedit;
