import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="pageHeader">
      <h1>
        <Link to="/">Payments Application</Link>
      </h1>
      <ul className="nav">
        <li>
          <Link to="/find">Find a Claim</Link>
        </li>
        <li>
          <NavLink to="/newquikclaim">New Claim</NavLink>
        </li>
        <li>
          <NavLink to="/landing">Landing</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
