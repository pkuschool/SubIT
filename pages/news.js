//新闻 页

import Layout from '../components/layout'
import { makeStyles, MuiThemeProvider } from '@material-ui/core'
import { theme } from '../styles/theme'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign:"center",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "1%",
    marginBottom: "1%",
    padding: "3%"
  },
  TypoDown: {
    visibility: "hidden"
  },
  typo: {
    fontWeight: "bold"
  }
}))

export default function News() {
  const classes = useStyles(theme)

  return (
    <Layout home="新闻 · SubIT">
      <div>
        <MuiThemeProvider theme={theme}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.typo}>
              我们的新闻
            </Typography>
          </Paper>
        </MuiThemeProvider>
      </div>
    </Layout>
  )
}
