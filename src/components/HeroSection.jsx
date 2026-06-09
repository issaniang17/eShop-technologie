import blackHeadohone from '../assets/card1/blackHeadphone.png'
// import Button from './Button'

const HeroSection = () => {
  return (
    <div className="mt-20 mb-20">
        <div className="mx-2 bg-gray-500 lg:mx-6 bg-linear-to-r from-gray-300 to-gray-200 rounded-4xl px-12 py-8 relative h-1/3 lg:h-screen lg:flex lg:flex-col lg:justify-center">
            <h3 className="font-semibold lg:text-2xl mr-3">Beats solo</h3>
            <h3 className="font-bold text-3xl lg:text-5xl mr-3">Wireless</h3>
            <div>
                <h3 className="font-bold text-4xl mr-3 uppercase text-white lg:text-9xl tracking-wider">headphone</h3>
                <img src={blackHeadohone} alt={blackHeadohone} className='absolute top-0.5 right-1 w-[80%]  lg:mt-0 lg:absolute lg:top-0 '/>
            </div>
            <button className='mt-10  rounded-3xl p-4 bg-red-600 text-white hover:bg-slate-900 relative z-50 lg:w-[20%] duration-200 transition'>
                Shop By Category
            </button>
            <div className='text-end hidden lg:block mr-8'>
                <h2 className='font-bold mb-2'>Description</h2>
                <p className='mr-2 text-gray-500 font-normal'>
                    There are many variations passages <br /> of Lorem Ipsum available, but the <br /> majority have suffered alteration
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default HeroSection