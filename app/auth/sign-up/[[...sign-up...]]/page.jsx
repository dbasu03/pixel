import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex justify-center pt-48">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
