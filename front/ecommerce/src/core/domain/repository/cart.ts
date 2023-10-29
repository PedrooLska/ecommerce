import httpClient from '../http-client'

import type IProduct from '../entity/product'

class CartRepository {
  async getAll(): Promise<any> {
    const { data } = await httpClient.get('/cart')
    
    return data
  }

  async addProductCart(products: IProduct[]): Promise<any> {
    await httpClient.post('/cart', products)
  }
}

export default new CartRepository