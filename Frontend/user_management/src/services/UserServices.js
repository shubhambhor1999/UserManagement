const API_URL = "http://localhost:3000/api/users";

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/getAllUser`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/deleteUser/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/updateUser/${userData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
};
