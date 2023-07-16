import { Dialog, DialogContent, Typography } from "@mui/material";

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  modalData: {
    img: string;
    id: number;
    name: string;
    weight: number;
    height: number;
    types: string[];
    generation: string;
  };
};

const Modal = ({ open, handleClose, modalData }: ModalProps) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img
            style={{
              width: "100%",
            }}
            src={modalData.img}
          />
          <Typography>
            <strong>id</strong>: {modalData.id}
          </Typography>
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
