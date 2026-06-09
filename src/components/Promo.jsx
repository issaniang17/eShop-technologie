import { promotion1, promotion2 } from "../constantes/Constante"

const Promo = () => {
  return (
    <div className="relative mb-20">
        
            <div  className={`${promotion1.backgroud} mx-3 relative  gap-3 text-center sm:text-start`} key={promotion1.id}>
                <div className="sm:w-1/2 w-full">
                    <h2 className=" text-white font-normal uppercase ">{promotion1.reduction}</h2>
                    <h2 className="lg:text-7xl sm:text-3xl font-bold tracking-wide uppercase text-white my-2 text-2xl">{promotion1.head}</h2>
                    <h2 className="lg:text-7xl sm:text-3xl font-bold tracking-wide uppercase text-white mb-2 text-2xl">{promotion1.middle}</h2>
                    <h3 className=" text-white font-normal sm:mt-20 text-xl">{promotion1.date}</h3>
                </div>
                <div className="sm:w-1/2  w-full">
                    <h2 className=" text-white font-normal">{promotion1.title}</h2>
                    <h2 className="lg:text-5xl text-white font-bold my-3 text-2xl">{promotion1.temps}</h2>
                    <h2 className=" text-white font-normal">{promotion1.description}</h2>
                    <h3 className="sm:w-1/2 mt-4">{promotion1.boutton}</h3>
                </div>
                
            </div>
        <img src={promotion1.image} alt={promotion1.title} className="absolute lg:w-[75%] lg:-top-50 sm:-top-50 sm:right-25 lg:right-70 sm:w-full w-1/2 -top-15 right-20" />
    </div>
  )
}

export const Promo2 = () => {
  return (
    <div className="relative mb-20 mt-40">
        
            <div  className={`${promotion2.backgroud} mx-3 relative  gap-3 text-center sm:text-start`} key={promotion2.id}>
                <div className="sm:w-1/2 w-full">
                    <h2 className=" text-white font-normal uppercase ">{promotion2.reduction}</h2>
                    <h2 className="lg:text-7xl sm:text-3xl font-bold tracking-wide uppercase text-white my-2 text-2xl">{promotion2.head}</h2>
                    <h2 className="lg:text-7xl sm:text-3xl font-bold tracking-wide uppercase text-white mb-2 text-2xl">{promotion2.middle}</h2>
                    <h3 className=" text-white font-normal sm:mt-20 text-xl">{promotion2.date}</h3>
                </div>
                <div className="sm:w-1/2  w-full">
                    <h2 className=" text-white font-normal">{promotion2.title}</h2>
                    <h2 className="lg:text-5xl text-white font-bold my-3 text-2xl">{promotion2.temps}</h2>
                    <h2 className=" text-white font-normal">{promotion2.description}</h2>
                    <h3 className="sm:w-1/2 mt-4">{promotion2.boutton}</h3>
                </div>
                
            </div>
        <img src={promotion2.image} alt={promotion2.title} className="absolute lg:w-[60%] lg:-top-70 sm:-top-50 sm:right-60 lg:right-120 sm:w-[70%] w-1/2 -top-25 right-20" />
    </div>
  )
}

export default Promo