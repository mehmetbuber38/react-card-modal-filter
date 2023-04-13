import PackageCard from './PackageCard';
import "./App.scss";
import Modal from './Modal';
import { useState } from 'react';

const data = [
  {
    "id": 0,
    "packageName": "Basic License",
    "title": "Economic",
    "subtitle": "Our goverment backed plan designed to keep your business legaly and secure",
    "price": "$39",
    "validityDate": "10.10.2022",
    "discount": "20%",
    "type": "orange",
    "buttonName": "Your current plan",
    "button": "gray",
    "packageContent": [
      {
        "value": "Secure your customer usage"
      },
      {
        "value": "View basic analytics"
      },
      {
        "value": "Up to 350 customer profiles"
      },
      {
        "value": "Custom network name"
      }
    ],
    "tooltip": {
      "title": "Normal",
      "text": "Unlimited analytics, plans, demographic insights. All you need to grow-up your business"
    },
  },
  {
    "id": 1,
    "packageName": "Social License",
    "title": "Normal",
    "subtitle": "Unlimited analytics, plans, demographic insights. All you need to grow-up your business",
    "price": "$55",
    "validityDate": "20.10.2022",
    "discount": "30%",
    "type": "blue",
    "buttonName": "Upgrade to Social",
    "button": "white",
    "packageContent": [
      {
        "value": "Add your own branding"
      },
      {
        "value": "View basic analytics"
      },
      {
        "value": "Up to 1500 customer profiles"
      },
      {
        "value": "View demographic insights"
      }
    ],
    "tooltip": {
      "title": "Normal",
      "text": "Unlimited analytics, plans, demographic insights. All you need to grow-up your business"
    },
  },

  {
    "id": 2,
    "packageName": "Marketing License",
    "title": "Premium",
    "subtitle": "Unlock powerfull time-saving tools for creating email delivery and collecting marketing data",
    "price": "$99",
    "validityDate": "20.12.2022",
    "discount": "40%",
    "type": "green",
    "buttonName": "Upgrade to Marketing",
    "button": "green",
    "packageContent": [
      {
        "value": "Collect marketing data"
      },
      {
        "value": "Design your emails"
      },
      {
        "value": "Email campaigns & interactions"
      },
      {
        "value": "View your customer’s profiles"
      }
    ],
    "tooltip": {
      "title": "Normal",
      "text": "Unlimited analytics, plans, demographic insights. All you need to grow-up your business"
    },
  }
]


function App() {
  const [modalData, setModalData] = useState();
  const [isModal, setIsModal] = useState(false);

  const selectButton = (selectedItem, b) => {
    console.log("1 selectedItem", selectedItem);
    console.log("b", b);

    setModalData(selectedItem?.tooltip);
    setIsModal(true);
  }

  const selectAmount = (selectedAmount) => {
    console.log("selectedAmount", selectedAmount);
  }

  const selectTitle = (selectedTitle) => {
    console.log("selectedTitle", selectedTitle);
  }

  const selectName = (selectedName) => {
    console.log("selectedName", selectedName);
  }

  const closeModal = () => {
    setIsModal(false);
  }

  return (
    <div className="App">
      {data.map((item, index) => (
        <PackageCard
          item={item}
          key={index}
          outSelectedItem={(selectedItem, b) => selectButton(selectedItem, b)}
          outSelectedAmount={(selectedAmount) => selectAmount(selectedAmount)}
          outSelectedTitle={(selectedTitle) => selectTitle(selectedTitle)}
          outSelectedName={(selectedName) => selectName(selectedName)}

        />
      ))}

      <Modal
        isActive={isModal}
        closeModal={closeModal}
        data={modalData}
      />
    </div>
  );
}

export default App;
