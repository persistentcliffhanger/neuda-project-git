import { useReducer, useState } from "react";
import { addNewClaim } from "./data/ClaimData.js";
import reflect from "./images/reflect.jpg";

const AddClaim = () => {
  const initialNewClaimState = {
    policy_number: "",
    customer_name: "",
    claim_type: "",
    claim_date: new Date().toISOString().slice(0, 10),
    est_claim_amt: "",
    address: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_year: "1900",
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

  const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("saving");
    console.log(newClaim);
    const response = addNewClaim(newClaim);
    response
      .then((result) => {
        if (result.status === 200) {
          setMessage("new Claim added");
        } else {
          setMessage("something went wrong - error code was " + result.status);
        }
      })
      .catch((error) => console.log("something went wrong ", error));
  };

  const handleChange = (event) => {
    dispatch({ field: event.target.id, value: event.target.value });
  };

  const {
    policy_number,
    customer_name,
    claim_type,
    claim_date,
    est_claim_amt,
    address,
    vehicle_make,
    vehicle_model,
    vehicle_year,
    pet_type,
    pet_breed,
    claim_description,
    claim_reason,
    claim_status,
    image_1,
  } = newClaim;

  return (
    <div className="container flex lg mx-auto overflow-x-hidden bg-white">
      <div className="w-1/2 h-auto hidden md:block bg-cover bg-center opacity-50 mt-10">
        <img src={reflect} alt="pic" />
      </div>

      <div className="w-1/2 h-auto md:block bg-cover bg-center sm:w-full opacity-100 px-6 py-2 mt-0">
        <div
          className=" flex flex-col 
                     items-center justify-center"
        >
          <p className="text-black font-bold text-xl mb-3">New Quikclaim</p>
          <form className="addClaimsForm" onSubmit={handleSubmit}>
            <label
              htmlFor="policy_number"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              Policy Number
            </label>
            <input
              aria-label="Enter the policy number"
              type="text"
              id="policy_number"
              placeholder="Policy Number"
              className="text-sm text-gray-base w-full 
                               mr-3 py-5 px-4 h-2 border 
                               border-gray-200 rounded mb-2"
              value={policy_number}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="customer_name"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              Customer Name
            </label>
            <input
              aria-label="Enter the policy holders name"
              type="text"
              id="customer_name"
              placeholder="Policy holders name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
              value={customer_name}
              onChange={handleChange}
            />
            <br />
            {/* //TODO: add the rest of the fields and update to select */}
            <label
              htmlFor="claim_type"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              Claim Type
            </label>
            <input
              type="text"
              id="claim_type"
              value={claim_type}
              onChange={handleChange}
            />
            <br />

            <label
              htmlFor="claim_date"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              Claim Date
            </label>
            <input
              type="date"
              id="claim_date"
              value={claim_date}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="est_claim_amt"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              est_claim_amt
            </label>
            <input
              aria-label="Enter the estimated claim amount"
              type="text"
              id="est_claim_amt"
              placeholder="Estimated claim amount ($)"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={est_claim_amt}
              onChange={handleChange}
            />
            <br />

            <label
              htmlFor="address"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              Address
            </label>
            <input
              aria-label="Enter the Customers Address"
              type="text"
              id="address"
              placeholder="xxxx Main St"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={address}
              onChange={handleChange}
            />
            <br />

            <label
              htmlFor="vehicle_make"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              Vehicle Make
            </label>
            <input
              type="text"
              id="vehicle_make"
              placeholder=""
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={vehicle_make}
              onChange={handleChange}
            />
            <br />

            <label
              htmlFor="vehicle_model"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              Vehicle Model
            </label>
            <input
              type="text"
              id="vehicle_model"
              placeholder=""
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={vehicle_model}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="vehicle_year"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              vehicle_year
            </label>
            <input
              type="text"
              id="vehicle_year"
              placeholder=""
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={vehicle_year}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="pet_type"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              pet_type
            </label>
            <input
              type="text"
              id="pet_type"
              placeholder=""
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={pet_type}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="pet_breed"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              pet_breed
            </label>
            <input
              type="text"
              id="pet_breed"
              placeholder=""
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={pet_breed}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="claim_description"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              claim_description
            </label>
            <input
              type="textarea"
              id="claim_description"
              placeholder="250 Character Limit"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={claim_description}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="claim_reason"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              claim_reason
            </label>
            <input
              type="textarea"
              id="claim_reason"
              placeholder="250 Character Limit"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={claim_reason}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="claim_status"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              claim_status
            </label>
            <input
              type="text"
              id="claim_status"
              placeholder=""
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={claim_status}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="image_1"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2  rounded-full bg-gray-100"
            >
              image_1
            </label>
            <input
              type="text"
              id="image_1"
              placeholder=""
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={image_1}
              onChange={handleChange}
            />
            <br />
            <button
              type="submit"
              className="bg-black text-white hover:bg-gray-600 w-full mt-4"
            >
              Create Claim
            </button>
            <div className="addClaimMessage">{message}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClaim;
