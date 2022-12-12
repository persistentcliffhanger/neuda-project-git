import Search from "./Search";
import Claimstable from "./Claimstable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const FindClaimsPage = (props) => {
  const params = useParams();

  useEffect(() => {
    if (
      params.policyNumber != null &&
      params.policyNumber !== props.searchTerm
    ) {
      props.setSearchTerm(params.policyNumber);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.policyNumber]);

  return (
    <>
      <Search setSearchTerm={props.setSearchTerm} />
      <Claimstable searchTerm={props.searchTerm} />
    </>
  );
};

export default FindClaimsPage;
