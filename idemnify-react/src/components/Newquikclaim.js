import reflect from "./reflect.jpg";

import { useEffect, useState } from "react";

function Newquikclaim() {
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

  return (
    <div className="Newquikclaim">
      <div className="container flex lg mx-auto overflow-x-hidden bg-white">
        <div className="w-1/2 h-auto hidden md:block lg:w-12/12 bg-cover bg-center opacity-50">
          <img src={reflect} alt="pic" />
        </div>

        <div className="w-1/2 h-auto md:block bg-cover bg-center opacity-100 px-6 py-2 mt-2 mb-2">
          <div
            className="h-screen flex flex-col 
                    items-center justify-center"
          >
            <p className="text-black font-bold text-xl mb-3">New Quikclaim</p>

            <form>
              <input
                aria-label="Enter the policy number"
                type="text"
                placeholder="Policy Number"
                className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
              />
              <input
                aria-label="Enter the policy holders name"
                type="password"
                placeholder="Policy holders name"
                className="text-sm text-gray-base w-full mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded mb-2"
              />
              <select
                class="rounded mt-2 form-select appearance-none block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-400 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-200 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-1"
                onChange={(event) => setinsurancetype(event.target.value)}
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
                type="submit"
                className="bg-gray-600 text-white hover:bg-gray-400 w-1/2 mt-4"
              >
                Add Further Information
              </button>
              <div id="addinfo">
                <input
                  aria-label="Further Information"
                  type="text"
                  placeholder="Further Information"
                  className="text-sm text-gray-base w-full mt-10 mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded"
                />
                <input
                  aria-label="Enter the Breed of Animal"
                  type="text"
                  placeholder="Further Information2"
                  className="text-sm text-gray-base w-full mt-2 mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded"
                />

                <input
                  aria-label="Enter the policy holders name"
                  type="date"
                  id="claimdate"
                  placeholder="claimdate"
                  class="border border-gray-200 py-2 px-12 text-gray-400 rounded mt-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white hover:bg-gray-600 w-full mt-4"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newquikclaim;
