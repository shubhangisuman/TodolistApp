import React from 'react';
import './App.css';
import ClearAll from "./ClearAll";
import TodoList from "./TodoList";
import AddItem from "./AddItem";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
function App() {
    const styles={
        left : "800px",
        position:"relative"
    }
  return (
      <div>
          <h1 align="centre" style={styles}>TODO</h1>
          <TodoList/>
          <TableContainer component={Paper}><Table size="medium" style={{ width: "100%" }}aria-label="a dense table">
              <TableHead>
                  <TableRow>
                      <TableCell align="right" ><ClearAll/></TableCell>
                      <TableCell align="left" > <AddItem/></TableCell>
                  </TableRow>
              </TableHead></Table>
          </TableContainer>
      </div>
  );
}

export default App;
