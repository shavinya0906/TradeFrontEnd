// import React, { useState } from "react";
// import "./editProfile.css";
// import { updateUserDetails } from "../../store/slice/userSlice";
// import { useDispatch } from "react-redux";

// const userData = localStorage.getItem("persist:root");
// const data = JSON.parse(userData);
// const { user } = JSON.parse(data.auth);
// console.log(user);

// const EditProfile = () => {
//   const [editMode, setEditMode] = useState(false);
//   const [editedUser, setEditedUser] = useState(user);
//   const [updatedUserData, setUpdatedUserData] = useState(null);

//   const handleEditClick = () => {
//     setEditedUser(user);
//     setEditMode(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleSaveClick = () => {
//     // Collect all edited user data
//     const updatedUserData = {
//       ...user,
//       ...editedUser,
//     };

//     console.log("Saving changes:", updatedUserData); // user data is storing after update

//     setEditMode(false);
//   };

//   const handleCancelClick = () => {
//     setEditMode(false);
//   };

//   return (
//     <>
//       <div className="container-fluid bootstrap snippet full-screen">
//         <div className="row">
//           <div className="col-sm-10"></div>
//           <div className="col-sm-2 text-right">
//             {!editMode && (
//               <button className="btn btn-primary" onClick={handleEditClick}>
//                 Edit
//               </button>
//             )}
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-3">
//             <div className="text-center">
//               <h1>User name</h1>
//               <img
//                 src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
//                 className="avatar img-circle img-thumbnail"
//                 alt="avatar"
//               />
//               <h6>Upload a different photo...</h6>
//               <input
//                 type="file"
//                 className="text-center center-block file-upload"
//               />
//             </div>
//             <hr />
//             <br />

//             <div className="panel panel-default">
//               <div className="panel-heading">Social Media</div>
//             </div>
//             <div>Help </div>
//           </div>
//           <div className="col-sm-9">
//             <div className="tab-content">
//               <div className="tab-pane active" id="home">
//                 <hr />
//                 <form
//                   className="form"
//                   action="##"
//                   method="post"
//                   id="registrationForm"
//                 >
//                   <div className="form-group">
//                     <div className="col-xs-6">
//                       <label htmlFor="first_name">
//                         <h4>First name</h4>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="first_name"
//                         id="first_name"
//                         placeholder="first name"
//                         title="enter your first name if any."
//                         value={
//                           editMode ? editedUser.first_name : user.first_name
//                         }
//                         readOnly={!editMode}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <div className="col-xs-6">
//                       <label htmlFor="last_name">
//                         <h4>Last name</h4>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="last_name"
//                         id="last_name"
//                         placeholder="last name"
//                         title="enter your last name if any."
//                         value={editMode ? editedUser.last_name : user.last_name}
//                         readOnly={!editMode}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <div className="col-xs-6">
//                       <label htmlFor="mobile">
//                         <h4>Mobile</h4>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="mobile"
//                         id="mobile"
//                         placeholder="enter mobile number"
//                         title="enter your mobile number if any."
//                         value={editMode ? editedUser.mobile : user.mobile}
//                         readOnly={!editMode}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <div className="col-xs-6">
//                       <label htmlFor="email">
//                         <h4>Email</h4>
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         name="email"
//                         id="email"
//                         placeholder="you@email.com"
//                         title="enter your email."
//                         value={editMode ? editedUser.email : user.email}
//                         readOnly={!editMode}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <div className="col-xs-6">
//                       <label htmlFor="password">
//                         <h4>Password</h4>
//                       </label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         name="password"
//                         id="password"
//                         placeholder="password"
//                         title="enter your password."
//                         readOnly={!editMode}
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <div className="col-xs-6">
//                       <label htmlFor="password2">
//                         <h4>Verify</h4>
//                       </label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         name="password2"
//                         id="password2"
//                         placeholder="password2"
//                         title="enter your password2."
//                         readOnly={!editMode}
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <div className="col-xs-12">
//                       <br />
//                       {editMode && (
//                         <>
//                           <button
//                             className="btn btn-lg btn-success"
//                             type="button"
//                             onClick={handleSaveClick}
//                           >
//                             <i className="glyphicon glyphicon-ok-sign"></i> Save
//                           </button>
//                           <button
//                             className="btn btn-lg"
//                             type="button"
//                             onClick={handleCancelClick}
//                           >
//                             Cancel
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditProfile;
