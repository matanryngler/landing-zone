import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container">
        <p className="text-white">&copy; {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
}

export default Footer;
