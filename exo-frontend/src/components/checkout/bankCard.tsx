type bankCardProps = {
  balance: number
  cardNumber: string
}

export default function BankCard(props: bankCardProps) {
    return (
        <main className="w-full h-44 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="font-bold">
                    <p className="text-sm mb-1">Balance</p>
                    <p className="text-xl">{props.balance} CR</p>
                </div>
                <div className="font-bold text-xl">
                    <p>SGC</p>
                </div>
            </div>
            <p className="flex justify-center items-center text-xl tracking-widest">{props.cardNumber}</p>
        </main>
    )
}