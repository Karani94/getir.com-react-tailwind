import { useState, useEffect } from "react";
import cardsData from 'api/cards';

export default function Cards() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        // data istegi
        setCards(cardsData)
    }, [])

    return (
        <div className="grid grid-cols-3 gap-x-4">
            {cards.length && cards.map(card => (
                <div className="bg-white p-14 shadow-sm rounded-lg flex flex-col items-center text-center">
                    <img className="w-{150px} h-{150px} mb-6" src={card.image} />
                    <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
                    <p className="mt-2 text-sm text-gray-700">{card.description}</p> 
                </div>
            ))}
        </div>
    )
}