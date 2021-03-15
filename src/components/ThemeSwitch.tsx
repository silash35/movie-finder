import Switch from "@material-ui/core/Switch";
import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const checked = theme == "light" ? true : false;

  return (
    <form>
      <Switch
        color="primary"
        onChange={toggleTheme}
        checked={checked}
        aria-label="Toggle Theme (light dark)"
      />
    </form>
  );
};

export default ThemeSwitch;
