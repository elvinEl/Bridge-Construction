import React, { useState,useEffect } from "react";
import Modal from "./modal/Modal";
import "../../styles/zoom.css";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Certifcate() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [certificateData, setCertificateData] = useState([])
  const {t} = useTranslation()
  const fetchData = async () => {
    try {
      const response = await axios.get("http://10.138.1.35:8000/api/v1/certificates"); // API_URL, kullanacağınız API'nin URL'si ile değiştirilmelidir
      const data = response.data; // API'den alınan veri response.data üzerinde bulunabilir
      setCertificateData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
  };

  const handelRotationRight = () => {
    const totalLength = certificateData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = certificateData[0].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = certificateData.filter((item) => {
      return certificateData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = certificateData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = certificateData[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = certificateData.filter((item) => {
      return certificateData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[80%] mx-auto mt-20 max-md:max-w-[95%] max-lg:max-w-[90%]">
      <p className="text-black font-bold text-[2.5rem] mb-8 max-md:text-[1.8rem]"> {t("Sertifkatlarımız")}</p>
      <div className="grid grid-cols-3 max-lg:grid-cols-2  max-md:grid-cols-1 gap-8">
        {certificateData.map((item, index) => (
          <div
            key={index}
            className="wrapper-images certifcate-image cursor-pointer"
            data-aos="fade-up"
          >
            <img
              src={item.image}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
            <h2>{item.text}</h2>
          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Certifcate;
