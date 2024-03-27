import React from "react";
import { Table, Button } from "react-bootstrap";

const UserLists = ({ users, onDelete, onUpdate }) => {
  return (
    <Table responsive striped bordered hover className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center">
              No users found
            </td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.password}</td>
              <td className="d-flex flex-row">
                <Button
                  className="mx-2"
                  variant="info"
                  onClick={() => onUpdate(user)}
                >
                  Update
                </Button>{" "}
                <Button
                  className=""
                  variant="danger"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default UserLists;
