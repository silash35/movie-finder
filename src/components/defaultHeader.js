import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './defaultHeader.module.scss';

export default function DefaultHeader() {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <i className={styles.bigFont + " material-icons"}>&nbsp;science&nbsp;</i>
          <Typography variant="h6">News</Typography>

          <Button color="inherit">2</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}