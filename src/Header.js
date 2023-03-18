import React from "react";

function Header() {
  return (
    <div className=" d-flex justify-content-between align-items-center text-white px-4" style={{height: '100px', background: 'url("https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")'}}>
      <img className="rounded h-75" src="https://picsum.photos/id/1/200/200" alt="random"/>
      <h1 className="">Meus Videos</h1>
    </div>
  );
}

export default Header;
