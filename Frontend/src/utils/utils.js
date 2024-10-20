// utils.js
import axios from "axios";

// USER FUNCTIONS ----------------------------------------------------------------

//----------- User Signup
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
    alert("An error occured during login");
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
    if (response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err.message);
  }
}
// --------------Create Event

export const createEvent = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8000/events/createevent', formData, {
      // headers: {
      //   'Content-Type': 'multipart/form-data', // Set correct content type for file uploads
      // },
      withCredentials: true, // Include credentials (cookies) in the request if necessary
    });

    return response.data; // Return the response data from the server
  } catch (err) {
    console.log('Error creating event:', err.message);
    return { success: false, message: err.message }; // Return an error object
  }
};
