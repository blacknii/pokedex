import { Dialog, DialogContent, Typography } from "@mui/material";
import { types } from "../data/types";

type ModalProps = {
  open: boolean;
  handleOpen: () => void;
};

const Modal = ({ open, handleClose, modalData }: ModalProps) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogContent>
          <img
            style={{
              width: "100%",
            }}
            src={modalData.img}
          />
          <Typography>
            <strong>Name</strong>: {modalData.name}
          </Typography>
          <Typography>
            <strong>Types</strong>:{" "}
            {modalData.types && modalData.types.join(", ")}
          </Typography>
          <Typography>
            <strong>Region</strong>: {modalData.generation}
          </Typography>
          <Typography>
            <strong>Height</strong>: {modalData.height}
          </Typography>
          <Typography>
            <strong>Weight</strong>: {modalData.weight}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
