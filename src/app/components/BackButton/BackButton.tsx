'use client';
import Link from 'next/link';
import React from 'react';

const BackButton = () => {
  return (
    <Link href="/" className="w-fit">
      <button className="btn btn-primary normal-case text-lg mb-8">
        &larr; Back to home
      </button>
    </Link>
  );
};

export default BackButton;
