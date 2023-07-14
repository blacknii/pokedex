import { Dialog, DialogContent, Typography } from "@mui/material";

type ModalProps = {
  open: boolean;
  handleOpen: () => void;
};

const Modal = ({ open, handleOpen }: ModalProps) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleOpen}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogContent>
          <img
            style={{
              width: "100%",
            }}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
          />
          <Typography>
            <strong>Name</strong>: bulbasaur
          </Typography>
          <Typography>
            <strong>Types</strong>: grass poison
          </Typography>
          <Typography>
            <strong>Generation</strong>: generation-i
          </Typography>
          <Typography>
            <strong>Color</strong>: green
          </Typography>
          <Typography>
            <strong>Height</strong>: 7
          </Typography>
          <Typography>
            <strong>Weight</strong>: 69
          </Typography>
          <Typography>
            <strong>Info</strong>: A strange seed was planted on its back at
            birth. The plant sprouts and grows with this POKéMON.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
