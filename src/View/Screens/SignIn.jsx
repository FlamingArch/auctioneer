import React from "react";

import { BrandGoogle, Mail, Phone } from "tabler-icons-react";

const SignIn = ({ signInGoogle }) => {
  return (
    <div className="w-screen h-screen grid place-content-center bg-blue-100 bg-opacity-25">
      <h1 className="m-6 text-3xl font-light">Sign in to Auctioneer</h1>
      <button
        onClick={signInGoogle}
        className="m-2 flex place-items-center transition-all bg-blue-100 text-black hover:bg-blue-200 hover:text-black px-16 py-2 rounded-3xl shadow-none hover:shadow-none hover:rounded-md"
      >
        <BrandGoogle className="w-5 h-5 mx-2" />
        Sign in with Google
      </button>
      <button
        onClick={signInGoogle}
        className="m-2 flex place-items-center transition-all bg-blue-100 text-black hover:bg-blue-200 hover:text-black px-16 py-2 rounded-3xl shadow-none hover:shadow-none hover:rounded-md"
      >
        <Mail className="w-5 h-5 mx-2" />
        Sign in with Email
      </button>
      <button
        onClick={signInGoogle}
        className="m-2 flex place-items-center transition-all bg-blue-100 text-black hover:bg-blue-200 hover:text-black px-16 py-2 rounded-3xl shadow-none hover:shadow-none hover:rounded-md"
      >
        <Phone className="w-5 h-5 mx-2" />
        Sign in with Phone
      </button>
    </div>
  );
};

export default SignIn;
