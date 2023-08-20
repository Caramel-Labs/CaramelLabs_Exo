export default function BankCard() {
    return (
        <main className="w-full h-44 bg-slate-500 rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="font-bold">
                    <p className="text-sm mb-1">Balance</p>
                    <p className="text-xl">186,465 CR</p>
                </div>
                <div className="font-bold">
                    <p>SGC</p>
                </div>
            </div>
            <p className="flex justify-center items-center text-xl tracking-widest">4138 XXXX XXXX 5237</p>
        </main>
    )
}