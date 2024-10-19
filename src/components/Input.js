import React from 'react';

const Input = ({
  nameLabel,
  placeholder,
  type,
  value,
  onChange
}) => {
  return (
    <label className='flex flex-col'>
      {nameLabel}
      <input className='text-black' type={type} placeholder={placeholder} name={nameLabel.toLowerCase()} required />
    </label>
  )
}

export default Input;
