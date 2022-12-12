import ReactTable from "react-table-6";

const onRowClick = (state, rowInfo, column, instance) => {
  return {
    onClick: (e) => {
      console.log("A Td Element was clicked!");
      console.log("it produced this event:", e);
      console.log("It was in this column:", column);
      console.log("It was in this row:", rowInfo);
      console.log("It was in this table instance:", instance);
    },
  };
};

<ReactTable
  columns={this.state.columns}
  data={this.state.posts}
  getTrProps={onRowClick}
></ReactTable>;


