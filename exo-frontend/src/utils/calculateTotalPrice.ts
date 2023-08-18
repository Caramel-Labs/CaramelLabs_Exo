
type ClassPrices = {
    ticketPrice: string,
    accomodationPrice: string,
    foodAndBeveragePrice: string,
    miscellaneousPrice: string
}
export default function calculateTotalPrice(
   classPrices:ClassPrices
  ): number {
  const  { ticketPrice, accomodationPrice, foodAndBeveragePrice, miscellaneousPrice } = classPrices

      const totalPrice = Number(ticketPrice + accomodationPrice + foodAndBeveragePrice + miscellaneousPrice)
      return totalPrice
  }