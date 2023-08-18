

export default function calculateTicketPrice(
  ticketPrice:string,
  passengerCount: number
): number {
    const ticketPriceNumber = Number(ticketPrice);
    const totalPrice = ticketPriceNumber * passengerCount;
    return totalPrice/1000
}