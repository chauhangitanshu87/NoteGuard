// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


// const Logout = () => {
//   let navigate = useNavigate();
 

//   const handleLogout = () => {
//     // Clear the token from localStorage


//     // localStorage.removeItem('token');

//     localStorage.clear();

    

//     // Redirect to the login or home page
//     navigate("/"); 
//   };

//   return (
//     <div>
//       <FontAwesomeIcon
//         icon={faSignOutAlt}
//         className="logout-icon"
//         onClick={handleLogout}
//         style={{ cursor: 'pointer', fontSize: '24px', color: '#555' }} // Adjust size and color as needed
//       />
//     </div>
//   );
// };

// export default Logout;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Logout = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.clear(); // Clear the token
    localStorage.removeItem('token');
    navigate("/"); // Redirect to home
  };

  return (
    <button
      className="btn btn-outline-danger mx-1" // Bootstrap button styling
      onClick={handleLogout}
      style={{ cursor: 'pointer', fontSize: '15px', color: '#555' }} // Adjust as needed
    >
      <FontAwesomeIcon icon={faSignOutAlt} />
      Logout
    </button>
  );
};

export default Logout;
