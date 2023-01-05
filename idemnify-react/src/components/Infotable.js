import React, { useState } from "react";
function Infotable() {
  return <div>Form page</div>;




function Infotablerows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { name, email, profile } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={name}
            onChange={(event) => onValUpdate(index, event)}
            name="name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={email}
            onChange={(event) => onValUpdate(index, event)}
            name="email"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={profile}
            onChange={(event) => onValUpdate(index, event)}
            name="profile"
            className="form-control"
          />
        </td>
        <td>
          <button
            className="bg-red-400 text-white hover:bg-gray-400 w-1/2 mt-12 mb-12 py-3 rounded font-bold"
            onClick={() => tableRowRemove(index)}
          >
            Delete Row
          </button>
        </td>
      </tr>
    );
  });
}
function Infotable() {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const data = {
      name: "",
      email: "",
      profile: "",
    };
    initRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };
  return (
    <>
      <h2 className="text-center">React JS Add / Delete Table Rows Example</h2>
      <table className="table-auto mt-10 mb-10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
            <th>
              <button
                className="bg-red-400 text-white hover:bg-gray-400 w-1/2 mt-12 mb-12 py-3 rounded font-bold"
                onClick={addRowTable}
              >
                Insert Row
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <Infotablerows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </>
  );
}

}
export default Infotable;