import "./data/data.js";
import "../Claims.css";
import { useEffect, useState } from "react";
import { Claimdata, getAllClaimsForPolicyNumber } from "./data/data.js";
import Claimsrow from "./claimsrow.js";
// import { useSearchParams } from "react-router-dom";
// import { getAllClaimsForPolicyNumber } from "../data/data";

const ClaimsTable = (props) => {
  const [claim, setClaims] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    loadClaim();
  }, []);





useEffect(() => {
  if (props.searchTerm !== "") {
    setIsLoading(true);
    getAllClaimsForPolicyNumber(props.searchTerm)
      .then((response) => {
        setClaims(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }
}, [props.searchTerm]);

// const [uniqueCountries, setUniqueCountries] = useState([]);

// const loadCountries = () => {
//   getCountries()
//     .then((response) => {
//       if (response.status === 200) {
//         setUniqueCountries(response.data);
//         setIsLoading(false);
//       } else {
//         console.log("something went wrong");
//       }
//     })
//     .catch((error) => {
//       console.log("something went wrong", error);
//     });
// };

// const loadData = (country) => {
//   getAllPaymentsForCountry(country)
//     .then((response) => {
//       if (response.status === 200) {
//         setIsLoading(false);
//         setPayments(response.data);
//       } else {
//         console.log("something went wrong", response.status);
//       }
//     })
//     .catch((error) => {
//       console.log("something went wrong", error);
//     });
// };

//debugger;

// const [selectedCountry, setSelectedCountry] = useState("");

// useEffect(() => {
//   const country = searchParams.get("country");
//   if (country !== selectedCountry) {
//     setSelectedCountry(country);
//     loadData(country);
//   }
// }, []);

// const changeCountry = (event) => {
//   const country = event.target.value;
//   setSelectedCountry(country);
//   setIsLoading(true);
//   loadData(country);
//   setSearchParams({ country: country });
// };














  const claimdata = Claimdata();

  const loadClaim = (searchTerm) => {
    const claim = claimdata.filter((claim) => {
      return claim.claim_type.toLowerCase() === searchTerm.toLowerCase();
    });
    setClaims(claim);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">

      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center hidden lg:table-cell"></th>
            <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center">
              Policy Number
            </th>
            <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center">
              Name
            </th>
            <th className="text-sm font-bold bg-slate-200 text-gray-900 px-6 py-4 text-center">
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
      
    </>
  );
};
export default ClaimsTable;
