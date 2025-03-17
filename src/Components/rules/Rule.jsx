import React from "react";
import "../../Styles/rule.css"; // Make sure to add this CSS file

function Rule() {
  return (
    <div className="rules-container">
      <h1 className="rules-title">General Rules</h1>
      
      <div className="rule-section">
        <h2 className="rule-heading">🚀 Dress Code:</h2>
        <ul className="rule-list">
          <li>Boys: Collared shirts in solid colors or subtle patterns, full-length pants, or well-fitted jeans without rips or excessive fading. Formal shoes or clean sneakers.</li>
          <li>Girls: Kurtis or modest T-shirts in solid colors or subtle patterns, full-length pants, salwar kameez, or palazzos. A stole, shawl, or dupatta is mandatory with any kind of top. Formal flats, sandals, or clean sneakers.</li>
          <li>Not permitted: Sleeveless tops, body-fit outfits, faded or torn jeans, and bathroom slippers.</li>
        </ul>
      </div>

      <div className="rule-section">
        <h2 className="rule-heading">🎫 College ID:</h2>
        <p> A valid college ID proof is mandatory for participation. </p>
      </div>

      <div className="rule-section">
        <h2 className="rule-heading">💻📚 Event Essentials:</h2>
        <p>Depending on the event, participants must bring their laptop or other stationery items as required.</p>
      </div>

      <div className="rule-section">
        <h2 className="rule-heading">🎯 General Conduct:</h2>
        <p>All participants are expected to maintain decorum and professionalism throughout the event.</p>
      </div>
    </div>
  );
}

export default Rule;
