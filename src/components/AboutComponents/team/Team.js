import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeam } from "../../../store/team/teamActions";
function Team() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const teamRedux = useSelector((state) => state.team.teamData);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchTeam({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="max-w-[80%] mx-auto mt-20 text-[#6c757d] max-lg:max-w-[90%] max-md:max-w-[95%]">
      <div className="flex justify-center items-center flex-col">
        <p className="text-[1.25rem]">Our Team</p>
        <p className="text-black font-bold text-[2.5rem] mb-8 ">
          Our genius experts!
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 max max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {Object.keys(teamRedux).map((key) => (
          <div className={`about/${teamRedux[key].general_key}`}>
            <div className="col-span-1 " data-aos="fade-up">
              <img src={teamRedux[key].image} alt="" />
              <p className="text-black font-bold mt-3">
                {teamRedux[key].title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
