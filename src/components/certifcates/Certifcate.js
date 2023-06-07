import React, { useState } from "react";
import data from "../../data/certifcate.json";
import Modal from "./modal/Modal";
import "../../styles/zoom.css";

function Certifcate() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[80%] mx-auto mt-20 max-md:max-w-[95%]">
      <p className="text-black font-bold text-[2.5rem] mb-8 ">Our Certifcates</p>
      <div className="grid grid-cols-3  gap-8 max-md:grid-cols-1">
        {data.data.map((item, index) => (
          <div
            key={index}
            className="wrapper-images certifcate-image cursor-pointer"
            data-aos="fade-up"
          >
            <img
              src={item.link}
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
