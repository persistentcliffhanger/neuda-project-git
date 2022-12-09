const Claimsrow = (props) => {
  return (
    <>
      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 hover:font-semibold">
        <td className="hidden lg:table-cell" Hi>
          <input
            type="checkbox"
            className="border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600  hidden lg:table-cell"
          />
        </td>
        <td className="lg:table-cell text-center">{props.policy_number}</td>
        <td className="lg:table-cell text-center">{props.customer_name}</td>
        <td className="hidden lg:table-cell text-center">{props.claim_type}</td>
        <td className="hidden lg:table-cell text-center">{props.claim_date}</td>
        <td className="lg:table-cell text-center">
          {props.est_claim_amt}
        </td>
        <td className="lg:table-cell text-center">
          {props.claim_status}
        </td>
      </tr>
    </>
  );
};
export default Claimsrow;
