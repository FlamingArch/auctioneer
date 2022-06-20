import { createContext } from "react";

import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  getFirestore,
  orderBy,
  query,
  limit,
} from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyD1aAzCS-F1iAoRMUpPEuKKiIeygQJcAaw",
    authDomain: "fa-auctioneer.firebaseapp.com",
    projectId: "fa-auctioneer",
    storageBucket: "fa-auctioneer.appspot.com",
    messagingSenderId: "761574860951",
    appId: "1:761574860951:web:b5d271758d2742d62821d2",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const [user] = useAuthState(auth);

  const itemsRef = collection(firestore, "items");
  const q = query(itemsRef, orderBy("createdAt", "desc"), limit(10));

  const [items] = useCollectionData(q, { idField: "id" });

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function signOut() {
    return auth.currentUser && auth.signOut();
  }

  return (
    <FirebaseContext.Provider
      value={{
        app: app,
        auth: auth,
        config: firebaseConfig,
        firestore: firestore,
        items: items,
        itemsRef: itemsRef,
        q: q,
        signInWithGoogle: signInWithGoogle,
        signOut: signOut,
        user: user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
