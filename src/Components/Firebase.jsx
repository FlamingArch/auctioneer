import { createContext } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore, addDoc } from "firebase/firestore";

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
  const [user] = useAuthState(auth);

  const firestore = getFirestore(app);

  const [items] = useCollectionData(collection(firestore, "items"));

  function signInGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function signOut() {
    return auth.currentUser && auth.signOut();
  }

  function addItem(item) {
    addDoc(collection(firestore, "items"), item);
  }

  return (
    <FirebaseContext.Provider
      value={{
        firebaseValues: {
          app: app,
          auth: auth,
          config: firebaseConfig,
          firestore: firestore,
        },
        addItem: addItem,
        items: items,
        signInGoogle: signInGoogle,
        signOut: signOut,
        user: user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
