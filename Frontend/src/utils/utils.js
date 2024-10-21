// utils.js
import axios from "axios";

// USER FUNCTIONS ----------------------------------------------------------------

// User Signup
export const signUp = async (
  userName,
  email,
  contactNumber,
  password,
  agreeToTerms
) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/users/signup",
      {
        userName,
        email,
        contactNumber,
        password,
        agreeToTerms,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// User Login
export const loginUser = async (email, password) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/users/login",
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// User Logout
export const logoutUser = async () => {
  try {
    let response = await axios.get("http://localhost:8000/users/logout", {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Change Password Request
export const changePasswordRequest = async (email) => {
  try {
    let response = await axios.get(
      "http://localhost:8000/users/updatepasswordrequest",
      { email }
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

// Change Password
export const changePassword = async (email, password) => {
  try {
    let response = await axios.put(
      "http://localhost:8000/users/updatepassword",
      { email, password }
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

// Find user
export const findUser = async () => {
  try {
    let response = await axios.get("http://localhost:8000/users/getuser", {
      withCredentials: true,
    });
    if (response.data.username) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err.message);
  }
};

// Create Event
export const createEvent = async (formData) => {
  console.log(formData);
  try {
    const response = await axios.post(
      "http://localhost:8000/users/createevent",
      { formData },
      { withCredentials: true }
    );

    return response.data; // Return the response data from the server
  } catch (err) {
    return err.message; // Return an error object
  }
};

// Fetch Virtual Events
export const fetchVirtualEvents = async () => {
  try {
    let response = await axios.get(
      "http://localhost:8000/users/fetchallvirtualevents",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// Fetch a Single Event
export const fetchSingleEvent = async (eventId) => {
  try {
    let response = await axios.post(
      "http://localhost:8000/users/fetchsingleevent",
      { eventId }
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
