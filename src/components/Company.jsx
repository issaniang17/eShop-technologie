import { companyItems } from "../constantes/Constante"


const Company = () => {
  return (
    <div className="mt-10 mb-20 p-20 flex flex-col items-center sm:flex-row sm:justify-between bg-gray-300 gap-4 ">
        {companyItems.map((item, index)=>(
            <img src={item} alt="Company" key={index} className="hover:opacity-100 opacity-40"/>
        ))}
    </div>
  )
}

export default Company