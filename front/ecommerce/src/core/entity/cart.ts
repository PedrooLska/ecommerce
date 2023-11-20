import type IProduct from './product'

export default interface Cart {
  quantity: number,
  product: IProduct
}
