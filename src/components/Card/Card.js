function Card(props) {
    return (
        <section>
            <img src={ props.img } alt="" />
            <h3>{ props.title }</h3>
            <p>{ props.text }</p>
        </section>
    )
}

export default Card
