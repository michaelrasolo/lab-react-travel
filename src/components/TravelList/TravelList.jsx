import React, { useState } from "react";
import "./TravelList.css";
import JSONList from "../../assets/travel-plans.json";
import Label from "../Label/Label";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(JSONList);
  const handleDelete = (id) => {
    const updatedTravelPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updatedTravelPlans);
  };
  return (
    <>
      {travelPlans.map((travelPlan) => {
        return (
          <div className="TravelList" key={travelPlan.id}>
            <img
              src={travelPlan.image}
              alt={travelPlan.description}
              className="placeImage"
            />
            <div className="placeData">
              <h2 className="placeTitle">
                {travelPlan.destination}, ({travelPlan.days} days)
              </h2>
              <p className="placeDesc">{travelPlan.description}</p>
              <p className="placePrice">
                Price: <span className="amount">{travelPlan.totalCost}</span>€
              </p>
              <div className="placeLabels">
                {travelPlan.totalCost >= 1500 && <Label text="Premium" />}
                {travelPlan.totalCost <= 350 && (
                  <Label text="Great Deal" className="greatDeal" />
                )}
                {travelPlan.allInclusive && <Label text="All Inclusive" />}
              </div>
              <div className="buttonContainer">
                {/* Components Buttons */}
                <button onClick={() => handleDelete(travelPlan.id)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TravelList;
