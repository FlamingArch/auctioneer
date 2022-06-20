import React, { useContext } from "react";
import { FirebaseContext } from "../Firebase";
import Logo from "../Views/Logo";
import Button from "../Views/Button";
import Page from "../Views/Page";
import { GoogleIcon } from "../Views/Icons";

const SignInPage = () => {
  const { signInWithGoogle } = useContext(FirebaseContext);

  return (
    <div className="half-split">
      <div className="left center image-bg">
        <Logo className="text-white text-shadow-lg" />
      </div>
      <div className="right grid align-center w-auto h-auto justify-start sm:place-content-center">
        <div className="flex-col gap-10 p-10 sm:p-20">
          <div className="">
            <h2>Sign in to Continue</h2>
            Participate in auctions, bid for items, and more!
          </div>
          <div className="h-full sm:hidden"></div>

          <Button type="primary" onClick={signInWithGoogle}>
            <GoogleIcon />
            Sign In With Google
          </Button>

          <div className="opacity-50">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
