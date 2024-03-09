import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Plans.css';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid'; // Import the uuid library and its v4 function

const Plans = () => {
  const [selectedPlanWeight, setSelectedPlanWeight] = useState('');
  // const navigate = useNavigate(); // React Router history object

  // const handleSelectPlan = async (planName, planPrice, user) => {
  //   try {
  //     const planId = uuidv4(); // Generate a unique ID using uuidv4()
  //     await axios.post('http://localhost:5000/api/selected-plans', {
  //       id: planId, // Pass the generated ID
  //       user: user,
  //       planName: planName,
  //       planPrice: planPrice,
  //     });
  //     navigate('/checkout', {
  //       state: {
  //         selectedPlan: { id: planId, name: planName, price: planPrice }, // Pass the ID to the checkout page
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleAddpet = () => {
    window.location.href = "/tabs";
  }

  const getStandardPlanPrice = (selectedPlanWeight) => {
    if (selectedPlanWeight === 'For 1kg to 5kg Pets') {
      return { name: 'Standard Plan', price: 'Rs 4500 Only' };
    } else if (selectedPlanWeight === 'For 6kg to 12kg Pets') {
      return { name: 'Standard Plan', price: 'Rs 8500 Only' };
    } else if (selectedPlanWeight === 'For 13kg to 20kg Pets') {
      return { name: 'Standard Plan', price: 'Rs 9500 Only' };
    } else if (selectedPlanWeight === 'For greater than 20kg Pets') {
      return { name: 'Standard Plan', price: 'Rs 10,000 Only' };
    }
    return null;
  };

  const getPremiumPlanPrice = (selectedPlanWeight) => {
    if (selectedPlanWeight === 'For 1kg to 5kg Pets') {
      return { name: 'Premium Plan', price: 'Rs 8500 Only' };
    } else if (selectedPlanWeight === 'For 6kg to 12kg Pets') {
      return { name: 'Premium Plan', price: 'Rs 12,000 Only' };
    } else if (selectedPlanWeight === 'For 13kg to 20kg Pets') {
      return { name: 'Premium Plan', price: 'Rs 14,000 Only' };
    } else if (selectedPlanWeight === 'For greater than 20kg Pets') {
      return { name: 'Premium Plan', price: 'Rs 15,000 Only' };
    }
    return null;
  };

  const handleWeightSelection = (selectedWeight) => {
    setSelectedPlanWeight(selectedWeight);
  };

  return (
    <div>
      <h2 className="title">Health Plans</h2>
      <div className="weight-selection">
        <h2>There are different plans according to weights of pets. Select one of the weight category of your pet.</h2>
        <div className='weight-selection'>
          <label>
            <input
              type="radio"
              name="weight"
              value="For 1kg to 5kg Pets"
              onChange={() => handleWeightSelection('For 1kg to 5kg Pets')}
            />
            Plans for 1kg to 5kg Pets
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="weight"
              value="For 6kg to 12kg Pets"
              onChange={() => handleWeightSelection('For 6kg to 12kg Pets')}
            />
            Plans for 6kg to 12kg Pets
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="weight"
              value="For 13kg to 20kg Pets"
              onChange={() => handleWeightSelection('For 13kg to 20kg Pets')}
            />
            Plans for 13kg to 20kg Pets
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="weight"
              value="For greater than 20kg Pets"
              onChange={() => handleWeightSelection('For greater than 20kg Pets')}
            />
            Plans for greater than 20kg Pets
          </label>
        </div>
      </div>
      {selectedPlanWeight && (
        <div className="plans-container">
          <div className="plan-card">
            <h3>{getStandardPlanPrice(selectedPlanWeight).name}</h3>
            <p>{getStandardPlanPrice(selectedPlanWeight).price}</p>
            <p>
              The Standard Plan covers routine check-ups, vaccinations, and preventive treatments to keep your pet healthy
              and protected against common diseases. Essential medications prescribed by the veterinarian for covered
              conditions are included under the Standard Plan.
            </p>
            {/* <button
              onClick={() =>
                handleSelectPlan(
                  getStandardPlanPrice(selectedPlanWeight).name,
                  getStandardPlanPrice(selectedPlanWeight).price
                )
              }
              className="select-plan-button"
            >
              Select Plan
            </button> */}
          </div>
          <div className="plan-card">
            <h3>{getPremiumPlanPrice(selectedPlanWeight).name}</h3>
            <p>{getPremiumPlanPrice(selectedPlanWeight).price}</p>
            <p>
              The Premium Plan offers comprehensive coverage to give your pet the highest level of care and protection. It
              includes all the features of the Standard Plan. It further includes chronic illnesses, specialized
              medications, dental care for your pets.
            </p>
            {/* <button
              onClick={() =>
                handleSelectPlan(
                  getPremiumPlanPrice(selectedPlanWeight).name,
                  getPremiumPlanPrice(selectedPlanWeight).price
                )
              }
              className="select-plan-button"
            >
              Select Plan
            </button> */}
              
          </div>
        
        </div>
      )}
      
      {selectedPlanWeight && (
  <div>
    <h2 className='middle'>If you want to take insurance of your pet, please first add your pet by clicking below.</h2>
    <button className="buttonAdd" onClick={handleAddpet}>
      Add Pet
    </button>
  </div>
)}
    </div>
  );
};

export default Plans;