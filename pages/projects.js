import Layout from '../components/layout'
import { makeStyles, MuiThemeProvider } from '@material-ui/core'
import { theme } from '../styles/theme'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    padding: "3%"
  },
  typo: {
    fontWeight: "bold"
  }
}))

export default function Projects() {
  const classes = useStyles(theme)

  return (
    <Layout home="项目 · SubIT">
      <div>
        <MuiThemeProvider theme={theme}>
          <Paper className={classes.paper}>
            <Grid container>

              <Grid item xs={12}>
                <Toolbar>
                  <Typography variant="h5" className={classes.typo}>
                    来看看我们的成就！
                  </Typography>
                </Toolbar>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography variant="subtitle1" className={classes.typo}>
                    2021年：
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography variant="subtitle1" className={classes.typo}>
                    2020年：
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography variant="subtitle1" className={classes.typo}>
                    2019年：
                  </Typography>
                </Paper>
              </Grid>

            </Grid>
          </Paper>
        </MuiThemeProvider>
      </div>
    </Layout>
  )
}
