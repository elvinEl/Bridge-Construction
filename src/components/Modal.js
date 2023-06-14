import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} >Biz Sizə Zəng Edək</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <p>Zəng Sifarişi</p>
            <div className="flex">
              <input
                placeholder="Ad və Soyad"
                className="border-[1px] placeholder:px-2"
                type="text"
              />
              <input
                placeholder="Telefon"
                className="border-[1px] placeholder:px-2"
                type="text"
              />
            </div>
              <button className="bg-blue-500 text-white mt-4">Göndər</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
