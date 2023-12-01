import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src="https://www.slerp.com/wp-content/themes/slerp-theme/assets/images/page-apps-image-3.webp" alt="" className='w-[550px] mx-auto my-4' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The app</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, odio 
                    laborum. Dignissimos quidem qui quo est inventore non? Quos cumque, 
                    assumenda commodi dicta eos libero eius voluptas labore enim quia.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 pu-3'>Get Started</button>
            </div>
        </div>      
    </div>
  )
}

export default Delivery
