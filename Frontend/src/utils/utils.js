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
