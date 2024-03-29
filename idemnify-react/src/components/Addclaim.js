import { useReducer, useState } from "react";
import { addNewClaim } from "./data/DataFunctions.js";
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
    claim_status: "New Claim",
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
    setMessage("..updating");
    addNewClaim(newClaim)
      .then((response) => {
        if (response.status === 200) {
          setMessage("new Claim added with id " + response.data.id);
        } else {
          setMessage("something went wrong - error code was " + response.status);
        }
      })
      .catch((error) => console.log("something went wrong ", error));
  };

  const handleChange = (event) => {
    dispatch({ field: event.target.id, value: event.target.value });
  };

 

  const [insurancetype, setinsurancetype] = useState("");
  const insurancepolicytype = () => {
    if (insurancetype === "property") {
      return (
        <>
          <div id="propertyclaim">
            <h3 className="text-gray-400 font-bold text-xl mt-4 mb-3">
              Property Details
            </h3>

            <label
              htmlFor="address"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2 mt-4 rounded-full bg-gray-100"
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
              value={newClaim.address}
              onChange={handleChange}
            />
            <br />
          </div>{" "}
        </>
      );
    } else if (insurancetype === "motor") {
      return (
        <>
          <div id="motorclaim">
            <h3 className="text-gray-400 font-bold text-xl mt-4 mb-3">
              Motor Details
            </h3>

            <label
              htmlFor="vehicle_make"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2 mt-4 rounded-full bg-gray-100"
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
              value={newClaim.vehicle_make}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="vehicle_model"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2 mt-4 rounded-full bg-gray-100"
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
              value={newClaim.vehicle_model}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="vehicle_year"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2 mt-4 rounded-full bg-gray-100"
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
              value={newClaim.vehicle_year}
              onChange={handleChange}
            />
            <br />
          </div>{" "}
        </>
      );
    } else if (insurancetype === "pet") {
      return (
        <>
          <div id="petclaim">
            <h3 className="text-gray-400 font-bold text-xl mt-4 mb-3">
              Pet Details
            </h3>

            <label
              htmlFor="pet_type"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2 mt-4 rounded-full bg-gray-100"
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
              value={newClaim.pet_type}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="pet_breed"
              class="form-label inline-block m-auto text-slate-800 smallfont px-2 mt-4 rounded-full bg-gray-100"
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
              value={newClaim.pet_breed}
              onChange={handleChange}
            />
            <br />
          </div>{" "}
        </>
      );
    }

  };

  return (
    <div className="container flex lg mx-auto overflow-x-hidden bg-white">
      <div className="w-1/2 h-auto hidden md:block bg-cover bg-center opacity-50 mt-10">
        <img src={reflect} alt="pic" />
      </div>

      <div className="w-1/2 h-auto bg-cover bg-center opacity-100 px-6 py-2 mt-0">
        <div
          className=" flex flex-col 
                     items-center justify-center"
        >
          <p className="text-black font-bold text-xl mb-3">New Quikclaim</p>
          <form className="addClaimsForm" onSubmit={handleSubmit}>
            <h3 className="text-black  font-bold text-xl mt-4 mb-3">
              Claimant Details
            </h3>
            <label
              htmlFor="policy_number"
              class="form-label inline-block m-auto  smallfont px-2 mt-4  rounded-full bg-black text-white"
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
              value={newClaim.policy_number}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="customer_name"
              class="form-label inline-block m-auto  smallfont px-2 mt-4 rounded-full bg-black text-white"
            >
              Customer Name
            </label>
            <input
              aria-label="Enter the policy holders name"
              type="text"
              id="customer_name"
              placeholder="Policy holders name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2"
              value={newClaim.customer_name}
              onChange={handleChange}
            />
            <br />

            <br />
            <hr />
            <h3 className="text-black  font-bold text-xl mt-4 mb-3">
              Claim Details
            </h3>
            <label
              htmlFor="claim_date"
              class="form-label inline-block m-auto  smallfont px-2 mt-4 rounded-full bg-black text-white"
            >
              Claim Date
            </label>
            <input
              type="date"
              id="claim_date"
              value={newClaim.claim_date}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="est_claim_amt"
              class="form-label inline-block m-auto  smallfont px-2 mt-8 rounded-full bg-black text-white"
            >
              $
            </label>
            <input
              aria-label="Enter the estimated claim amount"
              type="text"
              id="est_claim_amt"
              placeholder="Estimated claim amount.."
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={newClaim.est_claim_amt}
              onChange={handleChange}
            />
            <br />

            <br />
            <label
              htmlFor="claim_description"
              class="form-label inline-block m-auto smallfont px-2 mt-4 rounded-full bg-black text-white"
            >
              Description
            </label>
            <input
              type="textarea"
              id="claim_description"
              placeholder="250 Character Limit"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={newClaim.claim_description}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="claim_reason"
              class="form-label inline-block m-auto  smallfont px-2 mt-4 rounded-full bg-black text-white"
            >
              Reason
            </label>
            <input
              type="textarea"
              id="claim_reason"
              placeholder="250 Character Limit"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={newClaim.claim_reason}
              onChange={handleChange}
            />
            <br />
            <label
              htmlFor="claim_status"
              class="form-label inline-block m-auto  smallfont px-2 mt-4 rounded-full bg-black text-white"
            >
              Status
            </label>
            <input
              type="text"
              id="claim_status"
              placeholder=""
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={newClaim.claim_status}
              onChange={handleChange}
            />
            <br />
            <br />
            <hr />
            <br />
            <label
              htmlFor="claim_type"
              class="form-label inline-block m-auto  smallfont px-2 mt-4 rounded-full bg-black text-white"
            >
              Type
            </label>
            <select
              class="rounded mt-2 form-select appearance-none block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-400 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-200 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-1"
              onChange={(event) => setinsurancetype(event.target.value)}
              id="name"
              value={newClaim.insurancetype}
            >
              <option selected>Claim Type..</option>
              <option value="property">Property</option>
              <option value="motor">Motor</option>
              <option value="pet">Pet</option>
            </select>
            {insurancepolicytype()}
            <br />
            <br />
            <hr />
            <br />
            <h3 className="text-black font-bold text-xl mt-4 mb-3">
              Further Information
            </h3>
            <label
              htmlFor="image_1"
              class="form-label inline-block m-auto  smallfont px-2 mt-4 rounded-full bg-black text-white"
            >
              Images
            </label>
            <input
              type="text"
              id="image_1"
              placeholder=""
              className="text-sm text-gray-base w-full mt-2 mr-3 
                               py-5 px-4 h-2 border border-gray-200 
                               rounded"
              value={newClaim.image_1}
              onChange={handleChange}
            />
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
