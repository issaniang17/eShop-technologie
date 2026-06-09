
import { sellerProducts } from "../constantes/Constante"
import Button from "./Button"


const SellerProducts = () => {
  return (
    <div className="text-center mx-3 my-20">
        <h2 className="font-bold text-3xl">Best Seller Products</h2>
        <p className="text-gray-500">speakerThere are many variations passages</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 text-start leading-loose ">
            {sellerProducts.map((item, index)=>(
                <div key={index} className="relative group">
                    {item.position && (
                        <p className={item.position}>{item.sale}</p>
                    )}
                    <img src={item.image} alt={item.title} className="rounded-lg"/>
                    <div className="hidden group-hover:block">
                        <h2 className="text-red-600 font-bold">{item.title}</h2>
                        <Button text='Add to card' col="bg-red-600 text-white" />
                    </div>
                    <div className="group-hover:hidden">
                        <h2>{item.title}</h2>
                        <div className="flex gap-3">
                            <h2 className="text-gray-400 line-through opacity-50">
                                {item.prevPrice}
                            </h2>
                            <h2 className="font-semibold text-xl">
                                {item.price}
                            </h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SellerProducts