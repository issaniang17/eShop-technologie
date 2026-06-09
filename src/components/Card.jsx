import { card2 } from "../constantes/Constante"



const Card = () => {
  return (
    <div className="flex flex-col gap-2 p-2 mx-3 sm:flex-row sm:justify-evenly sm:flex-wrap lg:flex-nowrap">
        {card2.map((item, index)=>(
            <div key={index} className={item.backgroud}>
                <div>
                    <h2 className={`${item.colorText} text-lg`}>{item.head}</h2>
                    <h2 className={`${item.colorText} text-2xl font-semibold`}>{item.middle}</h2>
                    <h2 className="opacity-30 text-5xl font-black text-white uppercase tracking-widest mb-2 sm:text-3xl">{item.product}</h2>
                    {item.boutton}
                </div>
                <div>
                    <img src={item.image} alt={item.product} className={item.position} />
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default Card