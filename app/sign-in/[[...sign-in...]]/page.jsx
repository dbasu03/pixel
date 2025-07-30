import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <div className="flex justify-center pt-48">
      <SignIn />
    </div>
  );
};

export default SignInPage;
