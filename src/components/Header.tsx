import { CartItem } from '../types/types'

type Props = {
    cart: CartItem[],
    removeFromCart: (id: CartItem['id']) => void,
    incrementQuantity: (id: CartItem['id']) => void,
    decrementQuantity: (id: CartItem['id']) => void,
    clearCart: () => void,
    isEmpty: boolean,
    totalPrice: number
} 

export default function Header({cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, isEmpty, totalPrice} : Props) {
    
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div style={{"width": "fit-content"}}>
                        <a href="index.html" style={{"display": "flex"}}>
                            <div className="logoContainer">
                            <img className="logo" src="/img/logo.svg" alt="imagen logo" />
                            </div>
                            <h2 style={{"color": "#fff", "margin": "0"}}>Winery</h2>
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-4 d-flex align-items-start justify-content-end">
                        <div 
                            className="carrito"
                        >
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            {isEmpty ? 
                            (
                                <div id="carrito" className="bg-white p-3">
                                    <p className="text-center">El carrito esta vacio</p>
                                </div>
                            ) :
                            (
                                <div id="carrito" className="bg-white p-3">
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(wine => (
                                                <tr key={wine.id}>

                                                    <td>
                                                        <img className="img-fluid" src={`/img/${wine.image}.webp`} alt="imagen vino" />
                                                    </td>
                                                    <td>{wine.name}</td>
                                                    <td className="fw-bold">
                                                            ${wine.price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => decrementQuantity(wine.id)}
                                                            disabled = {wine.quantity === 1}
                                                        >
                                                            -
                                                        </button>
                                                            {wine.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => incrementQuantity(wine.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={ () => removeFromCart(wine.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <p className="text-end">Total price: $<span className="fw-bold">{totalPrice}</span></p>
                                    <button 
                                        className="btn btn-dark w-100 mt-3 p-2"
                                        onClick={clearCart}
                                    >
                                        
                                        Vaciar Carrito
                                    </button>
                                </div>
                            )}

                        </div>
                    </nav>
                </div>
            </div>
        </header>

    )
}