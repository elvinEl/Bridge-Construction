import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./services/serviceSlice";
import serviceDetailReducer from "./services/serviceDetailSlice";
import aboutReducer from "./about/aboutSlice";
import partnersReducer from "./partners/partnersSlice";
import teamReducer from "./team/teamSlice";

export default configureStore({
  reducer: {
    service: serviceReducer,
    serviceDetail: serviceDetailReducer,
    about: aboutReducer,
    partners: partnersReducer,
    team: teamReducer,
  },
});
