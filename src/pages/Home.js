import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { openModal } from "../redux/actions/modal";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import ModalDelete from "../components/ModalDelete";

const Home = (props) => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [id, setId] = useState(null);

  useEffect((props) => {
    // dispatch(listUsers());
  }, []);

  const redirectToAddUser = ()=>{
    props.history.push("/add-user")
  }
  const redirectToEditUser = (id)=>{
    props.history.push(`/add-user?id=${id}`)
  }
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "City",
        accessor: "address",
        Cell: (props) => {
          return <span> {props.value?.city} </span>;
        },
      },
      {
        Header: "Edit",
        Cell: (props) => {
          return (
              <Button size="sm" color="warning" onClick={()=>redirectToEditUser(props.row.original.id)}>Edit</Button>
          );
        },
      },
      {
        Header: "Delete",
        Cell: (props) => {
          return (
              <Button size="sm" color="danger" onClick={()=> {dispatch(openModal()); setId(props.row.original.id)}}>Delete</Button>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: users,
    },
    useSortBy
    );

  return (
    <div>
      <h3> Dashboard</h3>
      <Card color="light" style={{overflowX:'auto'}}>
        <CardBody>
          <CardTitle tag="h5">
            <div className="d-flex justify-content-between">
              <span>User list</span>
              <Button color="primary" onClick={redirectToAddUser}>Add new</Button>
            </div>
          </CardTitle>
          <CardText>
            <div className="col-md-12 list">
              <table
                className="table table-striped table-bordered"
                style={{fontSize:'smaller'}}
                {...getTableProps()}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render("Header")}
                          <span>
                            {console.log(column)}
                            {column.isSorted
                              ? column.isSortedDesc
                                ? '▼'
                                : '▲'
                              : ''}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardText>
        </CardBody>
      </Card>
      <ModalDelete id={id} />
    </div>
  );
};

export default Home;
