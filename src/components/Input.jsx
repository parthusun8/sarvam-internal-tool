import React from 'react'

const Input = ({ register, fieldName, error, message, type, placeholder }) => {
    return (
        <div className='w-full max-w-2xl border-none outline-none focus:border-none focus:outline-none'>
            <input className='h-11 p-2 min-w-full text-n-7 rounded-md' type={type} placeholder={placeholder} {...register(fieldName)} />
            {message && <span className=' text-red-500 text-[10px] w-full'>{message}</span>}
        </div>
    )
}

export default Input