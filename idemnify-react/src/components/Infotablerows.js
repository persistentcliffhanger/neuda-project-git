import React, { useState } from "react";
function Infotablerows({ rows, tableRowRemove, onValUpdate }) {

  function CTime() {
    const time = null;
    const [ctime, setDate] = useState(time);
  
    const handelTime = () => {
      let time = new Date().toLocaleTimeString();
      setDate(time);
    };
  }
  
  return rows.map((rowsData, index) => {
    const { completed, date, note } = rowsData;
    return (
      <tr
        className="table-auto w-full mt-10 mb-10 items-center justify-center "
        key={index}
      >
        <td>
          <input
            type="text"
            value={completed}
            onChange={(event) => onValUpdate(index, event)}
            name="completed"
            className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
          />
        </td>
        <td>
          <input
            type="text"
            value={date}
            onChange={(event) => onValUpdate(index, event)}
            name="date"
            className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
          />
        </td>
        <td>
          <input
            type="text"
            value={note}
            onChange={(event) => onValUpdate(index, event)}
            name="note"
            className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
          />
        </td>
        <td>
          <button
            className="bg-red-400 text-white text-sm hover:bg-gray-400 w-1/4 mt-1 mb-1 ml-40 py-1 px-1 rounded font-bold"
            onClick={() => tableRowRemove(index)}
          >
            X
          </button>
        </td>
      </tr>
    );
  });
}
function Table() {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const time = new Date().getUTCFullYear;
    const data = {
      completed: "",
      date: {time},
      note: "",
    };
    initRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { completed, value } = event.target;
    const data = [...rows];
    data[i][completed] = value;
    initRow(data);
  };
  return (
    <>
      <label htmlFor="notes" className="text-xs">
        Tasks
      </label>
      <table className="table-auto w-full mt-1 mb-10 items-center justify-center ">
        <thead>
          <tr>
            <th className="w-1/4">Completed</th>
            <th className="w-1/4">Date</th>
            <th className="w-1/4">Note</th>
            <th className="w-1/4">
              <button
                className="bg-gray-600 text-white text-sm hover:bg-gray-400 w-1/2 rounded mt-4"
                onClick={addRowTable}
              >
                Add Task
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
export default Table;


