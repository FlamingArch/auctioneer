import React from "react";

import ThemeButton from "../Supporting/ThemeButton";
import { BrandGoogle, Mail, Phone } from "tabler-icons-react";

const SignIn = ({ signInGoogle }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://unsplash.com/photos/AWxdK9s4pW8/download?ixid=MnwxMjA3fDB8MXxhbGx8OXx8fHx8fDJ8fDE2NDk2ODIyMzI&force=true')",
      }}
      className="w-screen h-screen grid place-content-center bg-white bg-opacity-25"
    >
      <div className="flex flex-col border border-gray-200 p-12 rounded-md shadow-2xl bg-white bg-opacity-80 backdrop-blur-lg backdrop-filter">
        <h1 className="m-6 text-3xl font-light">Sign in to Auctioneer</h1>
        <ThemeButton style="filled" onClick={signInGoogle}>
          <BrandGoogle className="w-5 h-5 mx-2" />
          Sign in with Google
        </ThemeButton>
        <ThemeButton style="light-textblack" onClick={signInGoogle}>
          <Mail className="w-5 h-5 mx-2" />
          Sign in with Email
        </ThemeButton>
        <ThemeButton style="light-textblack" onClick={signInGoogle}>
          <Phone className="w-5 h-5 mx-2" />
          Sign in with Phone
        </ThemeButton>
      </div>
    </div>
  );
};

export default SignIn;
