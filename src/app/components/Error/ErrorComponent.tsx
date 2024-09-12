import React from 'react';

const ErrorComponent = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <div className="text-6xl text-red-500 font-bold">Error</div>
      <div className="text-2xl">{message}</div>
    </div>
  );
};

export default ErrorComponent;
