const ClaimsRow = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.policy_number}</td>
      <td>{props.customer_name}</td>
      <td>{props.claim_type}</td>
      <td>{props.claim_date}</td>
      <td>{props.est_claim_amt}</td>
      <td>{props.claim_status}</td>
    </tr>
  );
};

export default ClaimsRow;
