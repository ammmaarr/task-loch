"use client";

import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (touched) setIsValid(validateEmail(newEmail));
  };

  const onSubmit = () => {
    setTouched(true);
    if (validateEmail(email)) {
      window.open("https://app.loch.one/welcome", "_blank");
    }
  };

  return (
    <div className="bg-white flex-col justify-center items-center">
      <div className="flex flex-col gap-10">
        <h1 className="text-[39px] text-[#B0B1B3] leading-[46.8px] font-medium">
          Sign up for <br /> exclusive access.
        </h1>
        <div className="flex flex-col gap-6">
          <input
            type="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
            placeholder="Your email address"
            className="px-6 py-5 border border-[#E5E5E6] rounded-lg placeholder:text-[#CACBCC] text-main-dark text-base shadow-[0px_4px_10px_0px_#0000000A]"
          />
          {!isValid && touched && (
            <label className="text-red-400">Please enter a valid email</label>
          )}
          <button
            onClick={onSubmit}
            className="bg-[#19191A] py-[18px] px-7 text-white rounded-lg text-base font-semibold"
          >
            Get started
          </button>
        </div>

        <label className="text-base font-semibold text-[#19191A]">
          You’ll receive an email with an invite link to join.
        </label>
      </div>
    </div>
  );
};

export default SignUp;
