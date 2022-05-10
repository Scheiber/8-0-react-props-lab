import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

const donationTotal = () => {
  let total = 0;
  for (let donation of donations) {
    total += donation.amount;
  }
  return total;
};

export default class App extends React.Component {
  render() {
    const donationList = donations.map((donated) => {
      return (
        <RecentDonations
          name={donated.name}
          amount={donated.amount}
          caption={donated.caption}
        />
      );
    });
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
            <h2>Recent Donations</h2>
            {donationList}
          </section>
          <section className="">
            <Progress amount={donationTotal()} targetAmount={targetAmount} />
            <DonationForm id={donations[donations.length - 1].id + 1} />
          </section>
        </main>
      </>
    );
  }
}
