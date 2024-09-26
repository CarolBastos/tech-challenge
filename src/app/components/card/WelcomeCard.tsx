import React from "react";
import Image from "next/image";

interface WelcomeCard {
    cardImage?: string;
    cardAltImage?: string;
    cardTitle?: string;
    cardText?: string;
}

const WelcomeCard: React.FC<WelcomeCard> = ({ cardImage, cardAltImage, cardTitle, cardText }) => {
    return (
        <div className="flex flex-col gap-4 items-center">
            <Image
                src={cardImage}
                alt={cardAltImage}
                width={73}
                height={56}
            />
            <h3 className="text-black text-center font-semibold text-tertiary-color text-lg">{cardTitle}</h3>
            <p className="text-center text-sm">{cardText}</p>
        </div>
    );
};

export default WelcomeCard;
