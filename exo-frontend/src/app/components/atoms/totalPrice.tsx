type totalPriceProps = {
  totalPrice: number
}

export default function TotalPrice(props: totalPriceProps) {
  return (
    <div className="total-price">
      <p> {props.totalPrice}K credits (excl. taxes)</p>
    </div>
  )
}
