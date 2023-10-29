import httpClient from './http-client'

class ProductsRepository {
  async getAll(): Promise<any> {
    const { data } = await httpClient.get('/products')
    
    return data
  }
}

export default new ProductsRepository