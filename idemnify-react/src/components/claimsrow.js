import { useNavigate } from "react-router-dom";

const Claimsrow = (props) => {

const navigate=useNavigate();

  const onRowClick = (props) => {
    let policy_number = props.policy_number;
    console.log("Policy Number ", policy_number);
    console.log("Customer Name:", props.customer_name);
    navigate("/claimdetails?policy_number=" + policy_number);
  };


  
  return (
    <>
      {
      /* 1. onClick is a prop that is passed to the component.
        2. When the component is rendered, it will pass the props to the function onClick().
        3. The function onClick() will then call the function onRowClick() with the props as argument.
        4. The function onRowClick() will then call the function onRowClick() with the props as argument.
      */}
      <tr
        onClick={() => onRowClick(props)}
        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 hover:font-semibold"
      >
        <td className="hidden lg:table-cell">
          <input
            type="checkbox"
            className="border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600  hidden lg:table-cell"
          />
        </td>
        <td className="lg:table-cell text-center">{props.policy_number}</td>
        <td className="lg:table-cell text-center">{props.customer_name}</td>
        <td className="hidden lg:table-cell text-center">{props.claim_type}</td>
        <td className="hidden lg:table-cell text-center">{props.claim_date}</td>
        <td className="lg:table-cell text-center">{props.est_claim_amt}</td>
        <td className="lg:table-cell text-center">{props.claim_status}</td>
        <td className="lg:table-cell text-center">{props.image_1}</td>
      </tr>
    </>
  );
};
export default Claimsrow;
