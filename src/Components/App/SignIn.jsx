import React, { useContext } from "react";
import { FirebaseContext } from "../Firebase";
import Logo from "../Views/Logo";
import Button from "../Views/Button";

const SignInPage = () => {
  const { signInWithGoogle } = useContext(FirebaseContext);

  return (
    <div className="grid place-content-center w-screen h-screen">
      <div className="flex-col gap-4">
        <Logo />
        <Button type="primary" onClick={signInWithGoogle}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
