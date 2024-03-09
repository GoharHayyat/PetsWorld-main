import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HealthPlans.css';
import axios from 'axios';

const HealthPlans = () => {
  const [selectedPlanWeight, setSelectedPlanWeight] = useState('');
  const [userObjectId, setUserObjectId] = useState('');
  const [petObjectId, setPetObjectId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAndPetObjectIDs = async () => {
      try {
        const userResponse = await axios.get('http://localhost:5000/api/users');
        const petResponse = await axios.get('http://localhost:5000/api/pets');
        setUserObjectId(userResponse.data[0].userObjectIds); // Assuming you want to use the first user's _id
        setPetObjectId(petResponse.data[0]._id); // Assuming you want to use the first pet's _id
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserAndPetObjectIDs();
  }, []);

  const handleSelectPlan = async (planName, planPrice) => {
    try {
      const response = await axios.post('http://localhost:5000/api/selected-plans', {
        user: userObjectId,
        pet: petObjectId,
        planName: planName,
        planPrice: planPrice,
      });
      const planId = response.data.planId;
      navigate('/checkout', {
        state: {
          selectedPlan: { id: planId, name: planName, price: planPrice },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

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
        <h3>Please confirm the weight of your pet:</h3>
        <div>
          <label>
            <input
              type="radio"
              name="weight"
              value="For 1kg to 5kg Pets"
              onChange={() => handleWeightSelection('For 1kg to 5kg Pets')}
            />
            For 1kg to 5kg Pets
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
            For 6kg to 12kg Pets
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
            For 13kg to 20kg Pets
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
            For greater than 20kg Pets
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
            <button
              onClick={() =>
                handleSelectPlan(
                  getStandardPlanPrice(selectedPlanWeight).name,
                  getStandardPlanPrice(selectedPlanWeight).price
                )
              }
              className="select-plan-button"
            >
              Select Plan
            </button>
          </div>
          <div className="plan-card">
            <h3>{getPremiumPlanPrice(selectedPlanWeight).name}</h3>
            <p>{getPremiumPlanPrice(selectedPlanWeight).price}</p>
            <p>
              The Premium Plan offers comprehensive coverage to give your pet the highest level of care and protection. It
              includes all the features of the Standard Plan. It further includes chronic illnesses, specialized
              medications, dental care for your pets.
            </p>
            <button
              onClick={() =>
                handleSelectPlan(
                  getPremiumPlanPrice(selectedPlanWeight).name,
                  getPremiumPlanPrice(selectedPlanWeight).price
                )
              }
              className="select-plan-button"
            >
              Select Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthPlans;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './HealthPlans.css';
// import axios from 'axios';

// const HealthPlans = () => {
//   const [selectedPlanWeight, setSelectedPlanWeight] = useState('');
//   const navigate = useNavigate();

//   const handleSelectPlan = async (planName, planPrice) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/selected-plans', {
//         user: 'user', // Replace 'user' with the appropriate user data
//         planName: planName,
//         planPrice: planPrice,
//       });
//       const planId = response.data.planId; // Get the plan ID from the response
//       navigate('/checkout', {
//         state: {
//           selectedPlan: { id: planId, name: planName, price: planPrice },
//         },
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   const getStandardPlanPrice = (selectedPlanWeight) => {
//     if (selectedPlanWeight === 'For 1kg to 5kg Pets') {
//       return { name: 'Standard Plan', price: 'Rs 4500 Only' };
//     } else if (selectedPlanWeight === 'For 6kg to 12kg Pets') {
//       return { name: 'Standard Plan', price: 'Rs 8500 Only' };
//     } else if (selectedPlanWeight === 'For 13kg to 20kg Pets') {
//       return { name: 'Standard Plan', price: 'Rs 9500 Only' };
//     } else if (selectedPlanWeight === 'For greater than 20kg Pets') {
//       return { name: 'Standard Plan', price: 'Rs 10,000 Only' };
//     }
//     return null;
//   };

//   const getPremiumPlanPrice = (selectedPlanWeight) => {
//     if (selectedPlanWeight === 'For 1kg to 5kg Pets') {
//       return { name: 'Premium Plan', price: 'Rs 8500 Only' };
//     } else if (selectedPlanWeight === 'For 6kg to 12kg Pets') {
//       return { name: 'Premium Plan', price: 'Rs 12,000 Only' };
//     } else if (selectedPlanWeight === 'For 13kg to 20kg Pets') {
//       return { name: 'Premium Plan', price: 'Rs 14,000 Only' };
//     } else if (selectedPlanWeight === 'For greater than 20kg Pets') {
//       return { name: 'Premium Plan', price: 'Rs 15,000 Only' };
//     }
//     return null;
//   };

//   const handleWeightSelection = (selectedWeight) => {
//     setSelectedPlanWeight(selectedWeight);
//   };

//   return (
//     <div>
//       <h2 className="title">Health Plans</h2>
//       <div className="weight-selection">
//         <h3>Please enter the weight of your pet once again:</h3>
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="weight"
//               value="For 1kg to 5kg Pets"
//               onChange={() => handleWeightSelection('For 1kg to 5kg Pets')}
//             />
//             For 1kg to 5kg Pets
//           </label>
//         </div>
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="weight"
//               value="For 6kg to 12kg Pets"
//               onChange={() => handleWeightSelection('For 6kg to 12kg Pets')}
//             />
//             For 6kg to 12kg Pets
//           </label>
//         </div>
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="weight"
//               value="For 13kg to 20kg Pets"
//               onChange={() => handleWeightSelection('For 13kg to 20kg Pets')}
//             />
//             For 13kg to 20kg Pets
//           </label>
//         </div>
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="weight"
//               value="For greater than 20kg Pets"
//               onChange={() => handleWeightSelection('For greater than 20kg Pets')}
//             />
//             For greater than 20kg Pets
//           </label>
//         </div>
//       </div>
//       {selectedPlanWeight && (
//         <div className="plans-container">
//           <div className="plan-card">
//             <h3>{getStandardPlanPrice(selectedPlanWeight).name}</h3>
//             <p>{getStandardPlanPrice(selectedPlanWeight).price}</p>
//             <p>
//               The Standard Plan covers routine check-ups, vaccinations, and preventive treatments to keep your pet healthy
//               and protected against common diseases. Essential medications prescribed by the veterinarian for covered
//               conditions are included under the Standard Plan.
//             </p>
//             <button
//               onClick={() =>
//                 handleSelectPlan(
//                   getStandardPlanPrice(selectedPlanWeight).name,
//                   getStandardPlanPrice(selectedPlanWeight).price
//                 )
//               }
//               className="select-plan-button"
//             >
//               Select Plan
//             </button>
//           </div>
//           <div className="plan-card">
//             <h3>{getPremiumPlanPrice(selectedPlanWeight).name}</h3>
//             <p>{getPremiumPlanPrice(selectedPlanWeight).price}</p>
//             <p>
//               The Premium Plan offers comprehensive coverage to give your pet the highest level of care and protection. It
//               includes all the features of the Standard Plan. It further includes chronic illnesses, specialized
//               medications, dental care for your pets.
//             </p>
//             <button
//               onClick={() =>
//                 handleSelectPlan(
//                   getPremiumPlanPrice(selectedPlanWeight).name,
//                   getPremiumPlanPrice(selectedPlanWeight).price
//                 )
//               }
//               className="select-plan-button"
//             >
//               Select Plan
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HealthPlans;

