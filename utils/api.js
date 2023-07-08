// utils/api.js
const API_URL = process.env.API_URL;

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (response) {
      const users = await response.json();
     
      return users;
    } else {
      throw new Error("Failed to fetch users");
    }
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const createUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.success) {
      const newUser = await response.json();
      return newUser;
    } else {
      throw new Error("Failed to create user");
    }
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

// Define other API functions here...
