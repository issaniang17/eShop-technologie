import { endSection } from "../constantes/Constante"


const EndSection = () => {
  return (
    <div className="mx-3 my-20 grid sm:grid-cols-3 gap-3">
        {endSection.map((item, index)=>(
            <div key={index}>
                <img src={item.image} alt={item.title} className="rounded-xl" />
                <div className="mt-4">
                    {item.date}
                    <h2 className="my-2 text-xl font-bold">{item.title}</h2>
                    <p className="my-2">{item.description}</p>
                </div>
            </div>
        ))

        }
    </div>
  )
}

export default EndSection