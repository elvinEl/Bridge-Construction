import * as React from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close"; 

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 300,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
  });
  const notify = () => toast("Mesajınız gönderildi");
  const errorNotify = () => toast("Mesajınız gönderilmedi!");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "https://brick-api.capitalist.az/api/v1/contact";
    const XStaticToken = "b@b!um1JBF4rRs#gGskv^SaFC5@DX68y";

    try {
    await axios
        .post(url, formData, {
          headers: {
            XStaticToken: XStaticToken,
          },
        })
        .then(
          (result) => {
            notify(result.text);
          },
          (error) => {
            errorNotify(error.text);
          }
        );
      setFormData({
        name: "",
        surname: "",
        phone: "",
      });
    } catch (error) {
      errorNotify(error.text).then(
        (result) => {
          notify(result.text);
        },
        (error) => {
          errorNotify(error.text);
        }
      );
    }
  };

  return (
    <div className="flex items-center bg-[#ff5f32] justify-center gap-12 py-4 mt-20">
      <p className="text-white font-bold text-[2rem]  max-md:text-[1rem]">
        {t("Sualınız varsa biz sizə")}
      </p>
      <button
        onClick={handleOpen}
        className="bg-white rounded text-black px-4 py-2 font-bold text-[1.2rem] max-md:text-[1rem]"
      >
        {t("Zəng edək")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end"> 
            <CloseIcon onClick={handleClose} className="cursor-pointer" />
          </div>
          <div>
            <p className="font-bold pb-4">{t("Zəng Sifarişi")}</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  onChange={handleInputChange}
                  name="name"
                  value={formData.name}
                  placeholder={t("Ad")}
                  required
                  className="border-[1px] placeholder:px-1 outline-none px-1 py-1 border-blue-500 placeholder:text-[14px]"
                  type="text"
                />
                <input
                  onChange={handleInputChange}
                  name="surname"
                  id="surname-input"
                  value={formData.surname}
                  placeholder={t("Soyad")}
                  required
                  className="border-[1px] placeholder:px-1 outline-none px-1 py-1 border-blue-500 placeholder:text-[14px]"
                  type="text"
                />
                <input
                  name="phone"
                  id="phone-input"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t("Telefon")}
                  className="border-[1px] placeholder:px-1 outline-none px-1 py-1 border-blue-500 placeholder:text-[14px]"
                  type="number"
                />
              </div>
              <button className="bg-[#ff5f32] text-white mt-4 w-full py-1 font-bold">
                {t("Göndər")}
              </button>
            </form>
          </div>
          <div>
            <Toaster position="top-center" />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
