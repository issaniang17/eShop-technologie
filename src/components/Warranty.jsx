import { productIcon } from "../constantes/Constante"


const Warranty = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
        {productIcon.map((item, index)=>(
            <div className="flex flex-col gap-1 justify-center items-center mb-3 sm:flex-row" key={index}>
                <div>
                    <img src={item.icon} alt={item.title} />
                </div>
                <div className="text-center sm:text-start sm:ml-2">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Warranty