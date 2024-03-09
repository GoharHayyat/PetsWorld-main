import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtherPetInfo.css';

const OtherPetInfo = () => {
  const navigate = useNavigate();
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petGender, setPetGender] = useState('');
  const [weight, setweight] = useState('');




  const handleFormSubmit = (e) => {
    e.preventDefault();

    navigate('/nonaddpets-plans', { state: { weight: weight } });

  };

  return (
    <div className="otherpet-info-page">
      <div className="form-container3">
        <h2>Enter Details of your pet</h2>
        <label>Tell us about your pet</label>
        <form onSubmit={handleFormSubmit}>
          <label>
            Pet Name:
            <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
          </label>

          <label>
            Is your pet a dog or cat?
            <select value={petType} onChange={(e) => setPetType(e.target.value)}>
              <option value="">Select</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
            </select>
          </label>

          <label>
            Is your pet a boy or girl?
            <select value={petGender} onChange={(e) => setPetGender(e.target.value)}>
              <option value="">Select</option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>
          </label>

          {/* <label>
            Select a weight:
            <select value={weight} onChange={(e) => setweight(e.target.value)}>
              <option value="">Choose</option>
              <option value="For 1kg to 5kg Pets">1kg - 5kg</option>
              <option value="For 6kg to 12kg Pets">6kg - 12kg</option>
              <option value="For 13kg to 20kg Pets">13kg - 20kg</option>
              <option value="For greater than 20kg Pets">20kg+</option>
            </select>
          </label>

          <label>
            Phone Number:
            <input type="tel" value={phonenumber} onChange={(e) => setPhone(e.target.value)}/>
          </label>

          <label>
            Email Address:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label> */}

          <button type="submit" >Next</button>
        </form>
      </div>
    </div>
  );
};

export default OtherPetInfo;
