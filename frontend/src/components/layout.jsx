
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      
      <main className="container mx-auto p-4">{children}</main>
      
    </div>
  );
};

export default Layout;
