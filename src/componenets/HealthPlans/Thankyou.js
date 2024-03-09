import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Thankyou.css';

const ThanksPage = () => {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    setSelectedPlan(location.state?.selectedPlan);
  }, [location.state]);

  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="title">Thank you</h2>
      <div>
        <h3>
          Your generated quote is "{selectedPlan.id}". <br />
          You can take your pet to the clinic and by showing this id, plans will be provided.
        </h3>
      </div>
    </div>
  );
};

export default ThanksPage;