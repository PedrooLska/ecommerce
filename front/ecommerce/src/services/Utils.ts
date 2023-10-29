class Utils {
  formatterPrice(value: number): string {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value)
  }

  formatterCutText(value: string, countCharacter: number): string {
    return value.length >= countCharacter ? `${value.slice(0, countCharacter)}...` : value
  }
}


export default new Utils()