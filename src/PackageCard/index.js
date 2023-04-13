import React, { useState, useRef } from "react";
import clickOutside from "../hooks/clickOutside";
import "./PackageCard.scss";

const STATUS_CLASSES = {
    "orange": 'card--orange',
    "blue": 'card--blue',
    "green": 'card--green',
};
const Button_Classes = {
    "gray": "card--gray",
    "white": "card--white",
    "green": "card--green",
}

function PackageCard(props) {
    const { item, outSelectedItem, outSelectedAmount, outSelectedTitle, outSelectedName } = props;
    const ref = useRef();
    // const [activeId, setActiveId] = useState(null); // Sorulacak!!

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true)
    }

    clickOutside(ref, () => {
        setActive(false)
    })


    let icon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                <path d="M5.276 12.52 1.872 9.117 0 10.988l4.492 4.492.005-.005.82.82L18 3.613l-1.908-1.908L5.276 12.52Z" />
            </svg>
        )
    }
    const handleExport = (selectedItem) => {
        console.log("selectedItem", selectedItem);
        outSelectedItem(selectedItem, "asd")
    }

    const handleAmount = (price, discount, validityDate) => {
        const data = {
            "price": price,
            "discount": discount,
            "validityDate": validityDate
        }
        outSelectedAmount && outSelectedAmount(data)
        console.log("data", data);
    }
    const handleTitle = (selectedTitle) => {
        // console.log("selectedTitle", selectedTitle);
        outSelectedTitle(selectedTitle)
    }

    const handleName = (selectedName) => {
        console.log("selectedName", selectedName);
        outSelectedName(selectedName)
    }

    return (
        <div
            ref={ref}
            className={`card ${STATUS_CLASSES[item?.type]} ${active ? "active" : ""}`}
            onClick={() => handleClick()}
        >
            <h3 className="card-title" onClick={() => handleTitle(item?.title)} >{item?.title}</h3>
            <div className="card__amount" onClick={() => handleAmount(item?.price, item?.discount, item?.validityDate)}>
                <div>
                    <div className="card__amount-title">Price</div>
                    <div className="card__amount-price">{item?.price}</div>
                </div>
                <div>
                    <div className="card__amount-title">Discount</div>
                    <div>{item?.discount}</div>
                </div>
                <div>
                    <div className="card__amount-title">Validitydate</div>
                    <div>{item?.validityDate}</div>
                </div>
            </div>

            <div className="card__features">
                <h2 className="card__features-name" onClick={() => handleName(item?.packageName)} >{item?.packageName}</h2>
                <p>{item?.subtitle}</p>
            </div>

            <ul className="card-list">
                {item?.packageContent.map((content, contentIndex) => (
                    <li className="card-link" key={contentIndex}>{icon()}{content.value} </li>
                ))}
            </ul>
            <div className={`button ${Button_Classes[item?.button]}`}>
                <button className="card-button" onClick={() => handleExport(item)}>{item?.buttonName}</button>
            </div>
            

        </div>
    )
}

export default PackageCard;


