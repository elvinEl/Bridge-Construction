import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./services/serviceSlice";
import serviceDetailReducer from "./services/serviceDetailSlice";
import projectReducer from "../store/projects/projectsSlice";
// import projectDetailReducer from "../store/projects/projectsDetailSlice";

export default configureStore({
  reducer: {
    service: serviceReducer,
    serviceDetail: serviceDetailReducer,
    project: projectReducer,
    // projectDetail: projectDetailReducer,
  },
});
