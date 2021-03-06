import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { useRef } from "react";

interface Props {
  open: boolean;
  id: string;
  form: HTMLFormElement;
  error: boolean;
  errorText: string;
  setError: (value: boolean) => void;
  setErrorText: (value: string) => void;
  handleClose: () => void;
}

const EditDialog = (props: Props) => {
  const keyInputRef = useRef<HTMLInputElement>(null);

  const sendData = async () => {
    const key = keyInputRef.current?.value;

    const formData = new FormData(props.form);
    const formDataObject = Object.fromEntries(formData);

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ place: formDataObject, key: key }),
    };

    let res = {} as Response;
    if (key != "") {
      res = await fetch(`/api/place?id=${props.id}`, data);
    }

    if (res.status == 200) {
      props.handleClose();
      window.location.href = `/locais/${props.id}`;
    } else {
      props.setError(true);
      props.setErrorText("Senha incorreta");
    }
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Digite a chave do local</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Para editar um local, você precisa da chave cadastrada.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="chave"
          type="password"
          inputRef={keyInputRef}
          fullWidth
          error={props.error}
          helperText={props.errorText}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          cancelar
        </Button>
        <Button variant="outlined" color="primary" onClick={sendData}>
          Salvar Alterações
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
