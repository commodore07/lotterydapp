import React from 'react'
import PropergateLoadz from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
<div className='bg-[#091B18] h-screen flex flex-col items-center justify-center'>
    <div className='flex items-center space-x-2 mb-10'>
        <img className='rounded-full h-20 w-20' src="img/logo.png" alt="" />
        <h1 className='text-lg text-white font-bold'>Loading the Lottery Dapp...</h1>
    </div>
    <PropergateLoadz color='white' size={30} />
</div>
  )
}

export default Loading