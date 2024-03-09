import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import React from "react";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from "./componenets/MainNavbar/MainNavbar";
import TabCheck from "./componenets/TabCheck/TabCheck";
import MainFooter from "./componenets/MainFooter/MainFooter";
import ProductDetails from "./componenets/ProductDetails/ProductDetails";
import Petsprofile from "./pages/Petsprofile/Petsprofile";
import DaycareService from "./pages/DaycareService/DaycareService";
import Mydaycarerequests from "./pages/Mydaycarerequests/Mydaycarerequests";
import Specialists from "./pages/Specialists/specialist";
import LoginPage from "./pages/TEST/Login";
import AdminPanel from "./pages/Admin/AdminPanel";
import LoginSignupModal from "./componenets/LoginSignupModal/LoginSignupModal";
import { useState } from "react";
import Dropoffrequest from "./pages/Dropoffrequest/Dropoffrequest";
import PetsDetails from "./componenets/PetsSale/PetsDetails";
import BuyAndSell from "./componenets/PetsSale/BuyAndSell";
import SellPet from "./componenets/SellPet/SellPet";
import HealthInsurance from "./componenets/HealthInsurance/PetInsurance";
import ThanksPage from "./componenets/HealthPlans/Thankyou";
import PetInfoPage from "./componenets/PetInfo/PetInfo";
import PlansPage from "./componenets/HealthPlans/HealthPlans";
import AdsStatus from "./pages/AdsStatus/AdsStatus";
import AppointmentForm from "./componenets/Appointments/AppointmentForm";
import SellPetDetails from "./componenets/SellPet/SellPetDetails";
import { Provider } from "react-redux";
import { store } from "./app/store";
import CartMenu from "./componenets/CartMenu/CartMenu";
import AppointmentsStatus from "./pages/AppointmentsStatus/AppointmentsStatus";
import Plans from "./componenets/PlansForNonAddPets/Plans";

import DaycareInformation from "./componenets/DaycareInformation/DaycareInformation";
import OtherPetInfo from "./componenets/OtherPetInfo/OtherPetInfo";
import ShopCheckout from "./componenets/ShopCheckout/ShopCheckout";

import Success from "./componenets/ShopCheckout/Success";
import Error from "./componenets/ShopCheckout/Error";

function App() {
  const [showModal, setShowModal] = useState(true);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div>
        <Provider store={store}>
          <MainNavbar />
          <BrowserRouter>
            <CartMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/products/:id" element={<ProductDetails />} />
              <Route path="/shop/:category/*" element={<Shop />} />
              <Route path="/shop/:category/:maxPrice/*" element={<Shop />} />
              {/* <Route path="/shop/:category/*:maxPrice" component={Shop} /> */}
              {/* Updated route path */}
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/insurance" element={<HealthInsurance />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/tabs" element={<TabCheck />} />
              <Route path="/pets" element={<Petsprofile />} />
              <Route path="/pet-info" element={<PetInfoPage />} />
              <Route path="/other-pet-info" element={<OtherPetInfo />} />
              <Route path="/nonaddpets-plans" element={<Plans />} />
              <Route path="/plans" element={<PlansPage />} />
              <Route path="/checkout" element={<ThanksPage />} />
              {/* <Route path="/next-page" element={<NextPage />} /> */}
              <Route path="/pets/:id" element={<Petsprofile />} />
              <Route path="/daycare" element={<DaycareService />} />
              <Route path="/req" element={<Mydaycarerequests />} />
              <Route path="/sep" element={<Specialists />} />
              <Route
                path="/book-appointment/:id"
                element={<AppointmentForm />}
              />
              <Route path="/TEST/login" element={<LoginPage />} />
              <Route path="/TEST/Admin" element={<AdminPanel />} />
              <Route path="/dropoff/:id" element={<Dropoffrequest />} />
              <Route path="/buyandsell/:id" element={<PetsDetails />} />
              <Route path="/buyandsell" element={<BuyAndSell />} />
              <Route path="/sell" element={<SellPet />} />
              <Route path="/adsstatus" element={<AdsStatus />} />
              <Route path="/info" element={<DaycareInformation />} />
              <Route path="/sellpetdetails/:id" element={<SellPetDetails />} />

              <Route path="/Aptstatus" element={<AppointmentsStatus />} />

              <Route path="/shopcheckout" element={<ShopCheckout />} />

              <Route path="/checkout/success" element={<Success />} />
              <Route path="/checkout/error" element={<Error />} />
            </Routes>
            {showModal && <LoginSignupModal onHide={handleCloseModal} />}
          </BrowserRouter>
        </Provider>
        <MainFooter />
      </div>
    </>
  );
}

export default App;
