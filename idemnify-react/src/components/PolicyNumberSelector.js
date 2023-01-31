import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPolicyNumber } from "../data/DataFunctions";

const PolicyNumberSelector = (props) => {
  useEffect(() => {
    loadPolicyNumber();
  }, []);

  const [uniquePolicyNumber, setUniquePolicyNumber] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const PolicyNumberInRedux = useSelector((state) => state.PolicyNumber);
  const timeOfLastFetch = useSelector((state) => state.lastFetch);
  const dispatch = useDispatch();

  const loadPolicyNumber = () => {
    //do we have any PolicyNumber in redux?
    if (
      PolicyNumberInRedux.length > 0 &&
      new Date().getTime() - timeOfLastFetch < 60000
    ) {
      console.log("using PolicyNumber from redux");
      setUniquePolicyNumber(PolicyNumberInRedux);
      setIsLoading(false);
    }

    //if we do, use them, if not, get them from rest + save them in redux
    else {
      console.log("getting PolicyNumber via rest");
      getPolicyNumber()
        .then((response) => {
          if (response.status === 200) {
            setUniquePolicyNumber(response.data);
            dispatch({ type: "updatePolicyNumber", value: response.data });
            setIsLoading(false);
          } else {
            console.log("something went wrong");
          }
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }

    if (props.value != null) {
      setSelectedPolicyNumber(props.value);
    }
  };

  const [selectedPolicyNumber, setSelectedPolicyNumber] = useState("");

  const changePolicyNumber = (event) => {
    const PolicyNumber = event.target.value;
    props.changePolicyNumber(PolicyNumber);
  };

  return (
    <div className="transactionsPolicyNumberSelector">
      Select PolicyNumber:{" "}
      <select onChange={changePolicyNumber} defaultValue={selectedPolicyNumber}>
        <option value="" disabled={true}>
          {" "}
          ---select---
        </option>
        {uniquePolicyNumber.map((PolicyNumber) => (
          <option key={PolicyNumber} value={PolicyNumber}>
            {PolicyNumber}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PolicyNumberSelector;
