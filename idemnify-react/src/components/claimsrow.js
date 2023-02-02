// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Claimsrow = (props) => {
  const claimFieldValue = {
    policy_number: props.policy_number,
    customer_name: props.customer_name,
    claim_type: props.claim_type,
    claim_date: new Date().toISOString().slice(0, 10),
    est_claim_amt: props.est_claim_amt,
    address: props.address,
    vehicle_make: props.vehicle_make,
    vehicle_model: props.vehicle_model,
    vehicle_year: props.vehicle_year,
    pet_type: props.pet_type,
    pet_breed: props.pet_breed,
    claim_description: props.claim_description,
    claim_reason: props.claim_reason,
    claim_status: props.claim_status,
    imgURL: props.imgURL,
  };

  const navigate = useNavigate();

  const onRowClick = (props) => {
    let policy_number = props.policy_number;
    console.log("Policy Number ", policy_number);
    // console.log("Customer Name:", props.customer_name);

    navigate("/claimdetails?policy_number=" + policy_number);
  };

  return (
    <>
      <tr
        onClick={() => onRowClick(props)}
        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
      >
        <td className="hidden lg:table-cell">
          <input
            type="checkbox"
            className="border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600  hidden lg:table-cell"
          />
        </td>
        <td className="lg:table-cell text-center">
          {claimFieldValue.policy_number}
        </td>

        <td className="lg:table-cell text-center">
          {claimFieldValue.customer_name}
        </td>

        <td className="hidden lg:table-cell text-center">
          {claimFieldValue.claim_type}
        </td>

        <td className="hidden lg:table-cell text-center">
          {claimFieldValue.claim_date}
        </td>

        <td className="lg:table-cell text-center">
          {claimFieldValue.est_claim_amt}
        </td>

        <td className="lg:table-cell text-center">{props.claim_status}</td>

        <td className="lg:table-cell text-center">{props.image_1}</td>
      </tr>
    </>
  );
};
export default Claimsrow;
