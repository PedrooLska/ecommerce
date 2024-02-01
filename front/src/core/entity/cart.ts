import type IProduct from './product'

export default interface ICart {
  quantity: number,
  product: IProduct
}
