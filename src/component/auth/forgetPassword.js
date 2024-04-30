import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../store/slice/forgetPasswordSlice"; // Assuming the slice is in the same directory

const UpdatePasswordForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(updatePassword({ email, oldPassword, newPassword }));

      setEmail("");
      setOldPassword("");
      setNewPassword("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          class="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div class="form-group">
        <label for="oldPassword">Old Password:</label>
        <input
          type="password"
          id="oldPassword"
          class="form-control"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
      </div>
      <div class="form-group">
        <label for="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          class="form-control"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <button
          type="submit"
          class="btn btn-primary btn-sm"
          style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
        >
          Update Password
        </button>
        <a href="/login" class="btn btn-link">
          Login Page
        </a>
      </div>
      {errorMessage && <p class="error-message">{errorMessage}</p>}
    </form>
  );
};

export default UpdatePasswordForm;
