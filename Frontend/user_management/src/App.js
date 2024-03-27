import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button } from "react-bootstrap";
import UserLists from "./components/UserLists";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import {
  fetchUsers,
  createUser,
  deleteUser,
  updateUser,
} from "./services/UserServices";

const App = () => {
  const [users, setUsers] = useState([]);
  const [alertMessages, setAlertMessages] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };
    getUsers();
  }, []);

  const handleAdd = async (formData) => {
    try {
      const newUser = await createUser(formData);
      setUsers([...users, newUser]);
      setAlertMessages([
        { type: "success", message: "User added successfully" },
      ]);
      handleCancel();
    } catch (error) {
      console.error("Error adding user:", error.message);
      setAlertMessages([{ type: "error", message: error.message }]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      setAlertMessages([
        { type: "success", message: "User deleted successfully" },
      ]);
    } catch (error) {
      console.error("Error deleting user:", error.message);
      setAlertMessages([{ type: "error", message: error.message }]);
    }
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setShowEditForm(true);
  };

  const handleEdit = async (formData) => {
    try {
      const updatedUser = await updateUser(formData);
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setAlertMessages([
        { type: "success", message: "User updated successfully" },
      ]);
      handleCancel();
    } catch (error) {
      console.error("Error updating user:", error.message);
      setAlertMessages([{ type: "error", message: error.message }]);
    }
  };

  const handleCancel = () => {
    setShowEditForm(false);
    setShowAddForm(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertMessages([]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [alertMessages]);

  return (
    <div className="container d-flex flex-column mt-5">
      <div className="d-flex flex-row justify-content-between mb-2">
        <h1 className="">User List</h1>
        {!showAddForm && !showEditForm && (
          <Button variant="primary" onClick={() => setShowAddForm(true)}>
            Add User
          </Button>
        )}
      </div>
      {showAddForm && (
        <div>
          <AddUserForm onAdd={handleAdd} onCancel={handleCancel} />
        </div>
      )}
      {showEditForm && (
        <div>
          <EditUserForm
            user={selectedUser}
            onUpdate={handleEdit}
            onCancel={handleCancel}
          />
        </div>
      )}
      {alertMessages.map((alert, index) => (
        <Alert
          key={index}
          variant={alert.type === "error" ? "danger" : "success"}
          onClose={() =>
            setAlertMessages(alertMessages.filter((_, i) => i !== index))
          }
          dismissible
        >
          {alert.message}
        </Alert>
      ))}
      {!showAddForm && !showEditForm && (
        <UserLists
          users={users}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default App;
