import React from 'react';

function Header() {
  return (
    <header className="bg-primary">
      <div className="container">
        <h1 className="text-white">Matan Ryngler</h1>
        <nav>
          <a className="text-white" href="#">Link 1</a>
          <a className="text-white" href="#">Link 2</a>
          <a className="text-white" href="#">Link 3</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
