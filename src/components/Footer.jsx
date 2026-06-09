import { footer } from "../constantes/Constante"


const Footer = () => {
  return (
    <div className="mx-3 mt-10 grid  text-center sm:text-start sm:grid-cols-2 lg:grid-cols-[200px_150px_200px_1fr] lg:gap-6 gap-4 px-5 box-border">
        {footer.map((item, index)=>(
            <div key={index} className="">
                {item.image &&(
                    <div className="justify-items-center sm:justify-items-start">
                        <img src={item.image} alt="" />
                        <p className="my-4 opacity-35 text-md">{item.description}</p>
                        <div className="flex gap-5 my-4 items-center">
                            <item.insta />
                            <item.linked />
                            <item.facebook />
                            <item.twitter />
                        </div>
                    </div>
                )}
                <h2 className="font-semibold text-lg">{item.title}</h2>
                {item.links &&(
                    <div className="my-4">
                        <ul>
                            {item.links.map((link, index)=>(
                                <li key={index}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                )}
                {item.contact &&(
                    <div className="my-4 opacity-60">
                        {item.contact.map((address, index)=>(
                        <p key={index}>{address}</p>
                    ))}
                    </div>
                )}
                {item.update &&(
                    <div className="my-2">
                        <h2 className="font-bold text-2xl my-2">{item.update}</h2>
                        <form action="#" className="rounded-full bg-linear-to-r from-gray-100 to-gray-400 p-2 w-full mt-10">
                            {item.formulaire}
                        </form>
                    </div>
                )}
            </div>
        ))

        }
    </div>
  )
}

export default Footer