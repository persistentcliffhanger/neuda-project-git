import { useState, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import Infotablerows from "./Infotablerows";
import { getClaimDataAxiosVersion, updateClaim } from "./data/DataFunctions";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  console.log("This is the id: ", id);

  useEffect(() => {
    const searchTerm = searchParams.get("policy_number");
    console.log(searchTerm);
    loadPolicy(searchTerm);
  }, []);
  console.log(policy);

  const initialNewClaimState = {
    policy_number: "",
    customer_name: "",
    claim_type: "",
    claim_date: "",
    est_claim_amt: "",
    address: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_year: "",
    pet_type: "",
    pet_breed: "",
    claim_description: "",
    claim_reason: "",
    claim_status: "",
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
      .then((response) => {
        if (response.status === 200) {
          setMessage("claim updated for id " + response.data.id);
          setTimeout(() => {
            navigate("/allclaims");
          }, 2000);
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
              <label htmlFor="policy_number" className="text-xs">
                Policy Number
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="policy_number"
                value={claimEdit.policy_number}
                onChange={handleChange}
                placeholder={policy.policy_number}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="customer_name" className="text-xs">
                Policy Holders Name
              </label>
              <input
                aria-label="Enter the policy holders name"
                type="text"
                id="customer_name"
                value={claimEdit.customer_name}
                onChange={handleChange}
                placeholder={policy.customer_name}
                className="text-sm text-red-600 w-full mr-3 
                              py-5 px-4 h-2 border border-red-600 
                              rounded mb-2"
              />
              <label htmlFor="claim_type" className="text-xs">
                Claim Type
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="claim_type"
                value={claimEdit.claim_type}
                onChange={handleChange}
                placeholder={policy.claim_type}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="claim_date" className="text-xs">
                Claim Date
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="claim_date"
                value={claimEdit.claim_date}
                onChange={handleChange}
                placeholder={policy.claim_date}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="est_claim_amt" className="text-xs">
                Estimated Claim Amount
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="est_claim_amt"
                value={claimEdit.est_claim_amt}
                onChange={handleChange}
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
                onChange={handleChange}
                placeholder={policy.address}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="vehicle_make" className="text-xs">
                Vehicle Make
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="vehicle_make"
                value={claimEdit.vehicle_make}
                onChange={handleChange}
                placeholder={policy.vehicle_make}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="vehicle_model" className="text-xs">
                Vehicle Model
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="vehicle_model"
                value={claimEdit.vehicle_model}
                onChange={handleChange}
                placeholder={policy.vehicle_model}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="vehicle_year" className="text-xs">
                Vehicle Year
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="vehicle_year"
                value={claimEdit.vehicle_year}
                onChange={handleChange}
                placeholder={policy.vehicle_year}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="pet_type" className="text-xs">
                Pet Type
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="pet_type"
                value={claimEdit.pet_type}
                onChange={handleChange}
                placeholder={policy.pet_type}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="pet_breed" className="text-xs">
                Pet Breed
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="pet_breed"
                value={claimEdit.pet_breed}
                onChange={handleChange}
                placeholder={policy.pet_breed}
                className="text-sm text-red-600 w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-red-600 rounded mb-2"
              />
              <label htmlFor="claim_description" className="text-xs">
                Claim Description
              </label>
              <textarea
                aria-label="State reason for Claim"
                rows="2"
                placeholder={policy.claim_description}
                id="cclaim_description"
                className="border text-red-600 border-red-600 py-2 px-3 mt-2 formcolor rounded w-full"
                value={claimEdit.claim_description}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="claim_reason" className="text-xs">
                Claim reason
              </label>
              <textarea
                aria-label="State reason for Claim"
                rows="2"
                placeholder={policy.claim_reason}
                id="claim_reason"
                className="border text-red-600 border-red-600 py-2 px-3 mt-2 formcolor rounded w-full"
                value={claimEdit.claim_reason}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="claim_status" className="text-xs">
                Claim Status
              </label>
              <input
                aria-label="Enter the policy number"
                type="text"
                id="claim_status"
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
