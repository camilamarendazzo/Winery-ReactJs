import type { Wine } from '../types/types'

type Props = {
    wine: Wine
    addToCart: (item: Wine) => void
}

export default function Wine({wine, addToCart} : Props) {

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4 imgContainer">
                <img className="wineImg" src={`/img/${wine.image}.webp`} alt="wine image" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{wine.name}</h3>
                <h4 style={{"margin": ".5rem 0 1rem"}}>{wine.winery}</h4>
                <p>{wine.type}</p>
                <p className="fw-black text-primary fs-4">${wine.price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(wine)}
                >Add to cart</button>
            </div>
        </div>
    )    
}