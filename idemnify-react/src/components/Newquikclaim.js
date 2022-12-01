

function Newquikclaim() {
  return (
    <div className="Newquikclaim">
      <div className="container flex lg mx-auto overflow-x-hidden bg-white">
        <div className="w-1/2 h-auto hidden md:block lg:w-12/12 bg-cover bg-center opacity-50">
          {/* <img
                src="reflect.jpg"
                className="max-w-full h-auto hidden md:block"
                alt="Picture of reflections on glass building in Vienna"
              /> */}
        </div>

        <div className="w-1/2 h-auto md:block bg-cover bg-center opacity-100 px-6 py-2 mt-2 mb-2">
          <form action="#">
            <div className="grid grid-cols-2 gap-2 justify-center">
              <h2 className="mb-2">Claim Details</h2>
              <div className="md:flex md:justify-between mb-4 mt-10">
                <div className="mb-4 mt-10">
                  <label
                    for="policynumber"
                    className="form-label inline-block m-auto text-black smallfont"
                  >
                    Policy Number
                  </label>
                  <input
                    type="text"
                    id="policynumber"
                    placeholder="Policy Number"
                    className="border border-gray-400 py-2 px-3 formcolor max-w-[20rem] rounded"
                  />
                </div>

                <div className="mb-4 mt-10">
                  <label
                    for="firstname"
                    className="form-label inline-block mb-2 text-black smallfont"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    id="firstname"
                    className="border border-gray-400 py-2 px-3 formcolor  max-w-[20rem] rounded"
                  />
                </div>
              </div>

              <div className="md:flex md:justify-between mb-4 mt-10">
                <div className="min-w-fit mb-3 mt-3 pr-5xl:w-96">
                  <select className="rounded mt-2 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-1">
                    <option selected>Type..</option>
                    <option value="1">Property</option>
                    <option value="2">Motor</option>
                    <option value="3">Pet</option>
                  </select>
                </div>

                <label
                  for="claimdate"
                  className="form-label inline-block m-auto text-black smallfont px-2 rounded"
                >
                  Date
                </label>

                <input
                  type="date"
                  id="claimdate"
                  placeholder="claimdate"
                  className="border border-gray-400 py-2 px-12 formcolor rounded mt-2"
                />

                <div className="mb-4 mt-10 px-2">
                  <label
                    for="estclaimamount"
                    className="form-label inline-block mb-2 text-black smallfont px-2"
                  ></label>
                  <input
                    type="text"
                    placeholder="Est. Claim $"
                    id="estclaimamount"
                    className="border border-gray-400 py-2 px-3 formcolor rounded mt-2"
                  />
                </div>
              </div>

              <div className="md:flex md:justify-between mb-4 mt-10">
                <div className="mb-4 mt-10">
                  <label
                    for="claimreason"
                    className="form-label inline-block mb-2 text-black smallfont rounded"
                  >
                    Reason for Claim
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Name"
                    id="estclaimamount"
                    className="border border-gray-400 py-2 px-3 formcolor rounded  mt-2 "
                  ></textarea>
                </div>
              </div>

              <div className="md:flex md:justify-between mb-4 mt-10">
                <div className="mb-4 mt-10">
                  <label
                    for="claimreason"
                    className="form-label inline-block mb-2 text-black smallfont"
                  >
                    Address of Property
                  </label>
                  <textarea
                    rows="3"
                    placeholder=""
                    id="estclaimamount"
                    className="border border-gray-400 py-2 px-3 formcolor rounded"
                  ></textarea>
                </div>
              </div>

              <div className="md:flex md:justify-between mb-2 mt-7">
                <div className="mb-4 mt-10">
                  <label
                    for="carmake"
                    className="form-label inline-block m-auto text-black smallfont"
                  >
                    carmake
                  </label>
                  <input
                    type="text"
                    id="policynumber"
                    placeholder="carmake"
                    className="border border-gray-400 py-2 px-3 formcolor rounded"
                  />
                </div>

                <div className="mb-4 mt-10">
                  <label
                    for="carmodel"
                    className="form-label inline-block mb-2 text-black smallfont"
                  >
                    carmodel
                  </label>
                  <input
                    type="text"
                    placeholder="carmodel"
                    id="carmodel"
                    className="border border-gray-400 py-2 px-3 formcolor rounded"
                  />
                </div>

                <div className="mb-4 mt-10">
                  <label
                    for="caryear"
                    className="form-label inline-block mb-2 text-black smallfont"
                  >
                    caryear
                  </label>
                  <input
                    type="text"
                    placeholder="caryear"
                    id="caryear"
                    className="border border-gray-400 py-2 px-3 formcolor rounded"
                  />
                </div>
              </div>

              <div className="md:flex md:justify-between mb-2 mt-7">
                <div className="mb-4 mt-10">
                  <label
                    for="carmake"
                    className="form-label inline-block m-auto text-black smallfont"
                  >
                    carmake
                  </label>
                  <input
                    type="text"
                    id="policynumber"
                    placeholder="carmake"
                    className="border border-gray-400 py-2 px-3 formcolor rounded"
                  />
                </div>

                <div className="mb-4 mt-10">
                  <label
                    for="carmodel"
                    className="form-label inline-block mb-2 text-black smallfont"
                  >
                    carmodel
                  </label>
                  <input
                    type="text"
                    placeholder="carmodel"
                    id="carmodel"
                    className="border border-gray-400 py-2 px-3 formcolor rounded"
                  />
                </div>

                <div className="mb-4 mt-10">
                  <label
                    for="caryear"
                    className="form-label inline-block mb-2 text-black smallfont"
                  >
                    caryear
                  </label>
                  <input
                    type="text"
                    placeholder="caryear"
                    id="caryear"
                    className="border border-gray-400 py-2 px-3 formcolor rounded"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newquikclaim;
