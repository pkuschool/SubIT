import { makeStyles, MuiThemeProvider } from "@material-ui/core"
import { theme } from '../styles/theme'
import Image from 'next/image'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from '../components/Link'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  left: {
    flexGrow: 1,
    position: "relative",
    left: "10%"
  },
  right: {
    position: "relative",
    right: "10%"
  },
}))

export default function BottomBar() {
  const classes = useStyles(theme)

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Divider variant="middle"/>
        <div className={classes.root}>
          <Toolbar variacnt="dense">
            <Toolbar variant="dense" className={classes.left}>
              <Image
                src="/../public/images/logoDown.svg"
                alt="SubIT"
                width={80}
                height={40}
              />
              <Typography variant="body1" >
                2018-2021
              </Typography>
            </Toolbar>
            <Toolbar variant="dense" className={classes.right}>
              <Button color="primary" component={Link} naked href="/about" >关于我们</Button>
              <Divider orientation="vertical" flexItem/>
              <Typography variant="button">
                上次构建：2021/3/15
              </Typography>
            </Toolbar>
          </Toolbar>
        </div>
      </MuiThemeProvider>
    </div>
  )
}
