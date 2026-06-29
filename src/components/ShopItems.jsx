
import { card1 } from "../constantes/Constante"
import Card from "./Card"

const ShopItems = () => {
  return (
    <div>
        <div className="lg:gap-3 lg:justify-around lg:flex-nowrap mx-3 box-border sm:flex sm:gap-4 sm:flex-wrap sm:justify-center">
            {card1.map((item, index)=>(
            <div className={item.backgroud} key={index}>
                <div className="px-4 flex flex-col justify-center">
                    <h2 className="text-white text-xl">{item.head}</h2>
                    <h2 className="text-white text-2xl font-bold ml-2 mt-2">{item.middle}</h2>
                    <h2 className="uppercase font-bold opacity-30 text-white text-5xl my-2">{item.product}</h2>
                    {item.boutton}
                </div>
                
                {item.product === 'earphone' && (
                    <div>
                        <img src={item.image} alt={item.product}  className="absolute -top-20 w-[60%] right-0  h-71.5 lg:absolute lg:top-20 lg:-right-5 lg:w-full lg:h-84"/>
                    </div>
                )}
                {item.product === 'gadget' && (
                    <div>
                        <img src={item.image} alt={item.product}  className="absolute -top-15 w-[50%]  -right-2 lg:-right-10 h-[75%] lg:w-full lg:h-1/2 lg:top-5"/>
                    </div>
                )}
                    {item.product === 'laptop' && (
                    <div className=" w-full h-50">
                        <img src={item.image} alt={item.product} className="relative top-0 lg:-top-20  left-10 sm:-top-30 sm:w-[75%] sm:left-40"/>
                    </div>
                )}
                
            </div>
            ))}
            
        </div>
        <Card />
    </div>
  )
}

export default ShopItems