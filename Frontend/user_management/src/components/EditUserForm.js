import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const EditUserForm = ({ user, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formDob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        {" "}
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <div className="mt-4 d-flex justify-content-center">
        <Button className="mx-2" variant="primary" type="submit">
          Update User
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default EditUserForm;
