import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthLinks() {
  return (
    <section className="text-center my-12">
      <Link to="/signup" className="text-blue-500 hover:text-blue-700">
        Create an Account
      </Link>
      <span className="mx-2">|</span>
      <Link to="/signin" className="text-blue-500 hover:text-blue-700">
        Sign In
      </Link>
    </section>
  );
}
