import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "../../store/partners/partnersActions";
import { useTranslation } from "react-i18next";

function Partners() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const partnersRedux = useSelector((state) => state.partners.partnersData);
  console.log(partnersRedux);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchPartners({ language }));
  }, [dispatch]);
  return (
    <div>
      {Object.keys(partnersRedux).map((key) => (
        <div className={`about/${partnersRedux[key].general_key}`}>
          <img src={partnersRedux[key].image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Partners;
