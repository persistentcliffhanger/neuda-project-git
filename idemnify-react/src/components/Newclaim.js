import { useReducer, useState } from "react";
// import { addNewClaim } from "./data/data.js";

import reflect from "./images/reflect.jpg";

const Newclaim = () => {
  const [message, setMessage] = useState("");
  const [addinformation, setAddinformation] = useState(0);

  const setinformation = () => {
    setAddinformation(1);
  };
  const addinfo = () => {
    if (addinformation === 0) {
      return <div></div>;
    } else if (addinformation === 1) {
      return (
        <>
          <div id="addinfo">
            <input
              aria-label="Further Information"
              type="text"
              placeholder="Further Information"
              className="text-sm text-gray-base w-full mt-10 mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded"
            />
          </div>
        </>
      );
    }
  };

  const [insurancetype, setinsurancetype] = useState("");
  const insurancepolicytype = () => {
    if (insurancetype === "property") {
      return (
        <>
          <div id="propertyclaim">
            <h3 className="text-gray-400 font-bold text-xl mt-4 mb-3">
              Property
            </h3>

            <textarea
              aria-label="Address of Property"
              rows="2"
              placeholder="Address of Property..."
              id="claimreason"
              className="border border-gray-200 py-2 px-3 mt-2 formcolor rounded w-full"
            ></textarea>
          </div>{" "}
        </>
      );
    } else if (insurancetype === "motor") {
      return (
        <>
          <div id="motorclaim">
            <h3 className="text-gray-400 font-bold text-xl mt-4 mb-3">Motor</h3>

            <input
              aria-label="Enter the Make of Vehicle"
              type="text"
              placeholder="Make of Vehicle"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded"
            />
            <input
              aria-label="Enter the Model of Vehicle"
              type="text"
              placeholder="Model of Vehicle"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded"
            />
            <input
              aria-label="Enter the Year of Manufacture"
              type="text"
              placeholder="Year of Manufacture"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded"
            />
          </div>{" "}
        </>
      );
    } else if (insurancetype === "pet") {
      return (
        <>
          <div id="petclaim">
            <h3 className="text-gray-400 font-bold text-xl mt-4 mb-3">Pet</h3>

            <input
              aria-label="Enter the Type of Pet"
              type="text"
              placeholder="Type of Pet"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded"
            />
            <input
              aria-label="Enter the Breed of Animal"
              type="text"
              placeholder="Breeds of Animal"
              className="text-sm text-gray-base w-full mt-2 mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded"
            />
          </div>{" "}
        </>
      );
    }
  };
  const initialNewClaimState = {
    policy_number: "",
    claim_type: "",
    claim_date: new Date().toISOString().slice(0, 10),
    est_claim_amt: "0",
    address: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_year: 1900,
    pet_type: "",
    pet_breed: "",
    claim_description: "",
    claim_reason: "",
    claim_status: "",
  };

  const formReducer = (state, data) => {
    return { ...state, [data.field]: data.value };
  };

  const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);

  // const handleChange = (event) => {
  //   dispatch({ field: event.target.id, value: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setMessage("Saving...");
  //   addNewClaim(newClaim)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setMessage("New transaction added with id " + response.data.id);
  //       } else {
  //         setMessage(
  //           "Something went wrong - status code was " + response.status
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       setMessage("Something went wrong - " + error);
  //     });
  // };

  return (
    <div className="Newquikclaim">
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

            <form className="addTransactionsForm"> 
              <input
                aria-label="Enter the policy number"
                type="text"
                id="policy"
                // value={addNewClaim.policy_number}
                // onChange={handleChange}
                placeholder="Policy Number"
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <input
                aria-label="Enter the policy holders name"
                type="text"
                id="name"
                // value={addNewClaim.customer_name}
                // onChange={handleChange}
                placeholder="Policy holders name"
                className="text-sm text-gray-base w-full mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded mb-2"
              />
              <select
                class="rounded mt-2 form-select appearance-none block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-400 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-200 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-1"
                onChange={(event) => setinsurancetype(event.target.value)}
                id="name"
                value={insurancetype}
              >
                <option selected>Claim Type..</option>
                <option value="property">Property</option>
                <option value="motor">Motor</option>
                <option value="pet">Pet</option>
              </select>
              <label
                for="claimdate"
                class="form-label inline-block m-auto text-slate-400 smallfont px-2  rounded "
              >
                Date of Claim
              </label>
              <input
                aria-label="Enter the policy holders name"
                type="date"
                id="claimdate"
                placeholder="claimdate"
                class="border border-gray-200 py-2 px-12 text-gray-400 rounded mt-2 w-full"
              />
              <input
                aria-label="Enter the policy holders name"
                type="password"
                placeholder="Estimated claim amount (£***)"
                className="text-sm text-gray-base w-full mt-2 mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded"
              />
              <textarea
                aria-label="State reason for Claim"
                rows="2"
                placeholder="Reason for Claim..."
                id="claimreason"
                className="border border-gray-200 py-2 px-3 mt-2 formcolor rounded w-full"
              ></textarea>
              <textarea
                aria-label="State Description of Incident"
                rows="4"
                placeholder="Description of Incident..."
                id="claimreason"
                className="border border-gray-200 py-2 px-3 mt-2 formcolor rounded w-full"
              ></textarea>
              {insurancepolicytype()};
              <button
                onClick={() => setinformation()}
                className="bg-gray-600 text-white hover:bg-gray-400 w-1/2 mt-4"
              >
                Add Further Information
              </button>
              {() => addinfo()}
              <button
                type="submit"
                className="bg-black text-white hover:bg-gray-600 w-full mt-4"
              >
                Create
              </button>
              <div>{message}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newclaim;