// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// import { useUser } from "@clerk/clerk-react";
// import { useEffect, useState } from "react";
// import { db } from '../firebase'







// export const useDetails = () => {
//   const clerkUser = useUser();
//   const [details, setDetails] = useState([]);
//   const [error, setError] = useState(null);

//   // const db = firebase.firestore();
//   useEffect(() => {
//     const setUserDetails = async function () {
//       try {
//         const firebaseToken = await clerkUser.getToken("firebase");
//           await firebase.auth().signInWithCustomToken(firebaseToken);
//           console.log(clerkUser)
          
//        console.log(db)

//         // const tempDetails = [];
//         const exampleDetails = await db.collection("users").get();
//         // exampleDetails.forEach((detail) => {
//         //   tempDetails.push(detail);
//         // });
//         setDetails(exampleDetails);
//       } catch (err) {
//         setError(err);
//       }
//     };

//     setUserDetails();
//   }, []);

//   return {
//     details,
//     error,
//   };
// };