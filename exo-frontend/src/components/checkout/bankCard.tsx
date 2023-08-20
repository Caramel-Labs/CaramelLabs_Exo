type bankCardProps = {
  balance: number
  cardNumber: string
}

// Custom function to format number with commas and a space every 3 digits
const formatNumberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
};

export default function BankCard(props: bankCardProps) {
    // Format balance with commas
    const formattedBalance = formatNumberWithCommas(props.balance);

    return (
        <main className="w-[19.5rem] mx-2 h-44 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="font-bold">
                    <p className="text-sm mb-1">Balance</p>
                    <p className="text-xl">{formattedBalance} CR</p>
                </div>
                <div className="font-bold text-xl">
                    <p>SGC</p>
                </div>
            </div>
            <p className="flex justify-center items-center text-xl tracking-widest">{props.cardNumber}</p>
        </main>
    )
}