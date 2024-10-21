import React from 'react';

const Input = ({
  nameLabel,
  placeholder,
  inputName,
  type,
  value,
  onChange
}) => {
  return (
    <label className='flex flex-col text-[#9ca3af] my-2'>
      {nameLabel}
      <input
        className='py-3 px-4 bg-[#111827] text-[#f3f4f6] rounded-md border-[1px] border-[#f3f4f6] focus:border-[#1a80a3d9]'
        type={type}
        placeholder={placeholder}
        name={inputName}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  )
}

export default Input;
