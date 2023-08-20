import { useState, useEffect } from "react";

type bankCardProps = {
  balance: number
  cardNumber: string
}

const gradients = [
    "bg-gradient-to-b from-red-500 to-yellow-500",
    "bg-gradient-to-b from-orange-400 to-cyan-500",
    "bg-gradient-to-b from-green-400 to-blue-500",
    "bg-gradient-to-b from-sky-500 to-indigo-500",
    "bg-gradient-to-b from-violet-500 to-fuchsia-500",
    // Add more gradient combinations as necessarys
];

const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
};

// Format bank balance with commas and a space every 3 digits
const formatNumberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
};

// Format card number
const formatCardNumber = (cardNumber: string) => {
    // Remove spaces from the card number
    const trimmedCardNumber = cardNumber.replace(/\s/g, '');

    // Insert "XXXX" for the middle 8 digits
    const formattedCardNumber = trimmedCardNumber.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, '$1 XXXX XXXX $4');

    return formattedCardNumber;
};

export default function BankCard(props: bankCardProps) {

    const formattedBalance = formatNumberWithCommas(props.balance);
    const formattedCardNumber = formatCardNumber(props.cardNumber);

    // const randomGradient = getRandomGradient();

    // State to hold the randomly generated gradient
    const [randomGradient, setRandomGradient] = useState("");

    // Generate random gradient once when the component mounts
    useEffect(() => {
    setRandomGradient(getRandomGradient());
    }, []);


    return (
        <main className={`w-[19.5rem] mx-2 h-44 ${randomGradient} rounded-lg p-4 flex flex-col justify-between`}>
            <div className="flex justify-between">
                <div className="font-bold">
                    <p className="text-sm mb-1">Balance</p>
                    <p className="text-xl">{formattedBalance} CR</p>
                </div>
                <div className="font-bold text-xl">
                    <p>SGC</p>
                </div>
            </div>
            <p className="flex justify-center items-center text-xl tracking-widest">{formattedCardNumber}</p>
        </main>
    )
}