

const Button = ({text, form='rounded-2xl p-2 inline-flex justify-center items-center w-1/2', col=''}) => {
  return (
    <button className={`${form} ${col}`}>
        {text}
    </button>
  )
}

export default Button