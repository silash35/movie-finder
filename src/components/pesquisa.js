import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import styles from "../styles/pesquisa.module.scss";

export default function Pesquisa(props) {
  const handleSearch = async () => {

    const pesquisa = document.getElementById("campo").value;

    const res = await fetch("https://alis.silash35.vercel.app/api/local", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pesquisa }),
    });

    const data = await res.json();

    props.setLocais(data.body);
  };

  return (
    <form action="javascript:void(0);" className={styles.form}>
      <label className={styles.pesquisa}>
        <input type="text" id="campo"></input>
        <IconButton aria-label="pesquisar" type="submit" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </label>
    </form>
  );
}