// #region Imports
import { createContext } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  getFirestore,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
// #endregion

// #region Create a Context that contains all firebase related globals and functions
export const FirebaseContext = createContext();
// #endregion

// Provider for providing FirebaseContext to all components
export const FirebaseProvider = ({ children }) => {
  //#region
  const firebaseConfig = {
    apiKey: "AIzaSyD1aAzCS-F1iAoRMUpPEuKKiIeygQJcAaw",
    authDomain: "fa-auctioneer.firebaseapp.com",
    projectId: "fa-auctioneer",
    storageBucket: "fa-auctioneer.appspot.com",
    messagingSenderId: "761574860951",
    appId: "1:761574860951:web:b5d271758d2742d62821d2",
  };

  // Firebase App from Project
  const app = initializeApp(firebaseConfig);

  // Firebase Auth Object
  const auth = getAuth(app);
  // Stores data about currently logged in user.
  // If no user is logged in, it will be null
  const [user] = useAuthState(auth);

  // Firebase Firestore Object
  const firestore = getFirestore(app);
  // Get all items from the database and store them in items variable.
  // Item here is listing of the thing being sold.
  // Auto updates when there are changes made to the database.
  const [items] = useCollectionData(collection(firestore, "items"));

  // Function for handling Sign In with Google Account
  function signInGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  // Function to Sign Out of the App
  function signOut() {
    return auth.currentUser && auth.signOut();
  }

  // Add a new Item to the database.
  function addItem(item) {
    addDoc(collection(firestore, "items"), item);
  }
  // #endregion

  // Mark Item as Sold
  // Only available to the seller of the item
  function markSold(id) {}

  function addBid(id, bid) {
    var item = getDoc(collection(firestore, "items"), { id: id });
    item.bids.push(bid);
    updateDoc(collection(firestore, "items"), item);
  }

  //#region
  // Get the Provider that passes the FirebaseContext to all child components
  return (
    <FirebaseContext.Provider
      value={{
        firebaseValues: {
          app: app,
          auth: auth,
          config: firebaseConfig,
          firestore: firestore,
        },
        addBid: addBid,
        addItem: addItem,
        items: items,
        markSold: markSold,
        signInGoogle: signInGoogle,
        signOut: signOut,
        user: user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
  //#endregion
};
