import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BankCard from "./bankCard";

type bankCardProps = {
    balance: number
    cardNumber: string
}

type bankCardCarouselProps = {
    bankCards: bankCardProps[]
}

export default function BankCardCarousel(props: bankCardCarouselProps) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <main className="">
            <Slider {...settings}>
                {props.bankCards.map((bankCard, index) => (
                    <div key={index}>
                        <BankCard {...bankCard} />
                    </div>
                ))}
            </Slider>
        </main>
    )
}