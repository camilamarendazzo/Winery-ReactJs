import Header from "./components/Header"
import Wine from "./components/Wine"
import { useCart } from './hooks/useCart'

function App() {

    const { data,
            cart,
            addToCart,
            removeFromCart,
            incrementQuantity,
            decrementQuantity,
            clearCart,
            isEmpty,
            totalPrice
        } = useCart()

  return (
    <>
    <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        totalPrice={totalPrice}
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Our collection</h2>

        <div className="row mt-5">
            {data.map( wine => (
                <Wine
                    key={wine.id}
                    wine={wine}
                    addToCart={addToCart}
                />
            ))}
        </div>
        
    </main>


    <footer className="bg-dark mt-5 py-2">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">Winery - All Rights Reserved</p>
        </div>
    </footer>

    </>
  )
}

export default App
