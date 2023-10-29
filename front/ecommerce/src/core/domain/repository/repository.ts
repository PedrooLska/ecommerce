export default interface Repository<T> {
  findMany(): Promise<T[]>
  create(data: T): Promise<void>
  delete(id: string): Promise<void>
  save(data: T): Promise<void>
}