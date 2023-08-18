type totalPriceProps = {
  totalPrice: number
}

export default function TotalPrice(props: totalPriceProps) {
  return (
    <div className="total-price">
      <p className="font-bold text-sm mt-3.5"> {props.totalPrice}K credits (excl. taxes)</p>
    </div>
  )
}
