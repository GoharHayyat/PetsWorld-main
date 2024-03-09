import React from 'react';
import myeasy from '../../utils/apt/myeasy.png'

import health_plan from '../../utils/apt/health_plan.png'
 import pet9 from '../../utils/apt/pet9.png'
import insurance1 from '../../utils/apt/insurance1.jpg'
import plan from '../../utils/apt/plan.png'
import './PetInsurance.css'; 


const HealthInsurance = () => {
  // const navigate=useNavigate();
  // const handleSelectPlan = () => {
  //   navigate('/next-page');
    
  // };
  const handleOwnPetButtonClick = () => {
    window.location.href="/pet-info";
  };

  const handleOtherPetButtonClick = () => {
    window.location.href="/other-pet-info";
  };

  return (
    <div className="health-insurance-page">
      <div className="image-container">
        <img src={pet9} alt="Cover" className="cover-image" />
        {/* <button className="select-plans-button"  onClick={handleSelectPlan}>Get Plan</button> */}
      </div>

      <div className="word-container">
        <div className="word-card">
          <img src={health_plan} alt="logo" className="logo-image" />
        </div>
        {/* <div className="word-card">
          <img src={certified_vets} alt="logo" className="logo-image" />
        </div> */}
        <div className="word-card">
          <img src={myeasy} alt="logo" className="logo-image" />
        </div>
        <div className="word-card">
          <img src={plan} alt="Forbes Logo" className="logo-image" />
        </div>
      </div>

      <div className="line"></div>
      {/* <div className="plans-container">
        <div className="plan-card">
          <h2>Cat Insurance Plan</h2>
          <p>
            Our Cat Health Insurance Plan provides comprehensive coverage for
            your feline companion. It includes routine check-ups, vaccinations,
            diagnostics, emergency treatments, and coverage for common feline
            health issues.
            <br />
            With our plan, your cat's health needs are taken care of, giving you
            peace of mind.
          </p>
          <button onClick={handleSelectPlan}> Select Plan</button>
        </div>
        <div className="plan-card">
          <h2>Dog Insurance Plan</h2>
          <p>
            Our Dog Health Insurance Plan offers complete coverage for your
            furry friend. It includes preventive care, vaccinations, treatment
            for illnesses and injuries, as well as specialized care.
            <br />
            With our plan, your dog receives the best healthcare, allowing you
            to cherish every moment together.
          </p>
          <button onClick={handleSelectPlan}>Select Plan</button>
        </div>
        <div className="plan-card">
          <h2>Rabbit Insurance Plan</h2>
          <p>
            Get your pet's health insurance plan from our team and be free of
            pet health issues.
            <br />
            Just by getting the weight of your pet, a basic health insurance
            plan will be given to you. Health Insurance plan provides the
            vaccination services, day care facility for your pets and many other
            things.
          </p>
          <button onClick={handleSelectPlan}>Select Plan</button>
        </div>
      </div> */}
      {/* <div className="line"></div> */}
     <h2 className='text'>For which pet do you need the health insurance. Click below to access the plans.</h2>
      <div className="button-container2">
      <button className="insurance-button" onClick={handleOwnPetButtonClick}>Get Insurance of your own pet</button>
      <button className="quote-button" onClick={handleOtherPetButtonClick}>Get quote for another pet</button>
      </div>
      <div className="line"></div> 

      <div className="image-container2">
        <div className="image-overlay2">
          <img src={insurance1} alt="Cover" className="cover-image" />
          <div className="text-overlay2">
            <h2>Why Choose the Pets World Insurance Plan for Your Pet?</h2>
            <p>
              With Pets World, you can give your pet the medical care they need.
              The top-rated cat insurance & dog insurance plans cover accidents,
              illnesses, cancer, emergency care, genetic and hereditary
              conditions, breed-specific conditions, and alternative care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
