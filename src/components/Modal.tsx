import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Grid,
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
      <Dialog open={open} onClose={handleClose} disableScrollLock>
        <DialogContent>
          <img
            style={{
              width: "100%",
            }}
            src={modalData.img}
          />
          <Grid
            container
            spacing={2}
            columns={{ xs: 1, sm: 2 }}
            sx={{
              maxWidth: { xs: 300, sm: 440 },
              margin: "0 auto 15px auto",
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <Grid item xs={1}>
              <Typography variant="h6">
                <strong>Name</strong>: {modalData.name}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">
                <strong>id</strong>: {modalData.id}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">
                <strong>Region</strong>: {modalData.generation}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">
                <strong>Types</strong>:{" "}
                {modalData.types && modalData.types.join(", ")}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">
                <strong>Height</strong>: {modalData.height}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">
                <strong>Weight</strong>: {modalData.weight}
              </Typography>
            </Grid>
          </Grid>
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
