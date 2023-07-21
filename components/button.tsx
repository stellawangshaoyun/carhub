import React from 'react'

interface ButtonProps{
    onClick:()=>void;
}

const button = ({onClick}:ButtonProps) => {
  return (
    <button onClick={onClick}></button>
  )
}

export default button