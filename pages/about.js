import Layout from '../components/layout'
import { makeStyles, MuiThemeProvider } from '@material-ui/core'
import { theme } from '../styles/theme'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    padding: "3%"
  },
  typo: {
    fontWeight: "bold",
  },
  paperIn: {
    margin: "1%",
    padding: "3%"
  }
}))

export default function About() {
  const classes = useStyles(theme)

  return (
    <Layout home="关于我们 · SubIT">
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.typo}>
                  关于我们：
                </Typography>
                <Typography variant="body2">
                  SubIT，是一个下属于博雅学院的中心社团，设立目的为解决学校技术问题，包括 Office 365 等学校技术问题的解决、帮助。
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.typo}>
                  历届社员：
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.typo}>
                  联系我们：
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Paper className={classes.paperIn}>
                      <Typography variant="subtitle1" className={classes.typo}>
                        线下
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={6}>
                    <Paper className={classes.paperIn}>
                      <Typography variant="subtitle1" className={classes.typo}>
                        Office 365
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={6}>
                    <Paper className={classes.paperIn}>
                      <Typography variant="subtitle1" className={classes.typo}>
                        各社员（微信）
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={6}>
                    <Paper className={classes.paperIn}>
                      <Typography variant="subtitle1" className={classes.typo}>
                        公众号
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

          </Grid>
        </MuiThemeProvider>
      </div>
    </Layout>
  )
}
