

function Button({text, className, img}) {
    console.log(className);

    return (
        <button className={className}>
            {text}
            {img && <img src={img} alt={text}/>}
        </button>
    )
}

export default Button;