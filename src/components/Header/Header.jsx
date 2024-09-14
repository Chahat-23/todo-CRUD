import React from 'react'
import file from "../../assets/file.png"

export default function Header() {
  return (
    <div className="header">
      <img className='list-logo' src={file} alt='file' />
      <h1>TODO</h1>
    </div>
  );
}
