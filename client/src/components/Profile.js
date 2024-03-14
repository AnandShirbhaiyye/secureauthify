// import React from 'react'

// export default function Profile() {
//   return (
//     <div>Profile</div>
//   )
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState([]);

  async function loadData() {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setUser(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {user.map((profile, index) => {
        const { userId, title, body, id } = profile;
      
        return (
          <>
            <div>
              <div key={index}>
              <div>
             UserName: {userId}
              </div>
                {title}
                {body}
               <div>
                Id :  {id}
               </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Profile() {
//   const [user, setUser] = useState([]);

//   async function loadData() {
//     try {
//       const { data } = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts`
//       );
//       setUser(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <>
//       {user.map((profile, index) => {
//         const { userId, title, body, id } = profile;
      
//         return (
//           <div key={id}>
//             <div>
//               User ID: {userId}
//             </div>
//             <div>
//               Title: {title}
//             </div>
//             <div>
//               Body: {body}
//             </div>
//             <div>
//               ID: {id}
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }
