import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./services/serviceSlice";
import serviceDetailReducer from "./services/serviceDetailSlice";
import aboutReducer from "./about/aboutSlice";
import partnersReducer from "./partners/partnersSlice";
import teamReducer from "./team/teamSlice";
import contactReducer from "./contact/contactSlice";
import methodologyReducer from "./methology/methodologySlice";
import featuresReducer from './features/featuresSlice'


export default configureStore({
  reducer: {
    service: serviceReducer,
    serviceDetail: serviceDetailReducer,
    about: aboutReducer,
    partners: partnersReducer,
    team: teamReducer,
    contact: contactReducer,
    methodology: methodologyReducer,
    features:featuresReducer
  },
});
