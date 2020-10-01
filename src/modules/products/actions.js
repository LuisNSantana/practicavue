export async function fetchProducts({commit}){
    //rootState es el estado que se define en la store

    const data = await fetch('/fixtures/products.json')
    const products = await data.json()

    commit('products/setProducts', products,{root: true})


}