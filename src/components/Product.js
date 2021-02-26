function Product(props) {
    return (
        <div className='Product'>
            <h3>{props.id} - {props.title}</h3>
            <img src={props.image} alt=""/>
            <p>{props.description}</p>
        </div>
    )
}

export default Product;