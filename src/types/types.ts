export type Wine = {
    id: number
    name: string
    image: string
    winery: string
    type: string
    price: number
    
}

export type CartItem = Wine & {
    quantity: number
}