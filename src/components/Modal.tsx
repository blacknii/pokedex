import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

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
          <DialogActions>
            <Button
              variant="contained"
              href={`https://www.pokemon.com/us/pokedex/${modalData.id}`}
              target="_blank"
            >
              more info
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
