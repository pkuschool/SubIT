import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { theme } from '../styles/theme'
import Image from 'next/image'
import Date from '../components/date'
import { makeStyles, MuiThemeProvider } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(( theme ) => ({
  paper: {
    display: "flex",
    alignItems:"center",
    textAlign:"center",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "1%",
    marginBottom: "1%",
    padding: "3%",
  },
  Typo: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    margin: "auto"
  },
  thg: {
    flexGrow: 1,
    fontSize: "20px",
    marginLeft: "1%",
    margin: theme.spacing(1),
    padding: theme.spacing(2.5),
  },
  pcg: {
    flexGrow: 1,
    fontSize: "20px",
    marginLeft: "1%",
    margin: theme.spacing(1),
    padding: theme.spacing(2.5),
  },
  center: {
    margin: "auto"
  }
}))

export default function Home({ allPostsData }) {
  const classes = useStyles()

  return (
    <Layout home="SubIT">
      <div>
        <MuiThemeProvider theme={theme}>
          <Grid container>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h5" className={classes.Typo} elevation={3}>
                      北大附中的中心社团
                    </Typography>
                    <Typography variant="body2">
                      SubIT 社团，是下属于博雅学院的中心社团，设立目的为解决学校技术问题，包括 Office 365 等学校技术问题的解决、帮助。
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>

                  </Grid>
                </Grid>
              </Paper>
              <Divider variant="middle"/>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item xs={6}>
                    <div className={classes.center}>
                      <Typography variant="h5" className={classes.Typo}>
                        并非只有技术
                      </Typography>
                      <Typography variant="body2">
                        我们不止有技术。在负责技术的技术与支持事业群之外，我们还有负责宣传与外联的平台与内容事业群。
                      </Typography>
                      <Typography variant="body2">
                        这样的架构使我们社团的未来变得更加宽广。
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <Toolbar variant="dense">
                      <Image
                      src="/../public/images/thg.svg"
                      alt="技术与支持事业群"
                      width={75}
                      height={75}
                      />
                      <Chip
                        className={classes.thg}
                        color="primary"
                        label="THG · 技术与支持事业群"
                        variant="outlined"
                        clickable
                      />
                    </Toolbar>
                    <Typography variant="h3">
                      +
                    </Typography>
                    <Toolbar variant="dense">
                      <Image
                      src="/../public/images/pcg.svg"
                      alt="平台与内容事业群"
                      width={75}
                      height={75}
                      />
                      <Chip
                        className={classes.pcg}
                        color="secondary"
                        label="PCG · 平台与事业内容群"
                        variant="outlined"
                        clickable
                      />
                    </Toolbar>
                  </Grid>
                </Grid>
              </Paper>
              <Divider variant="middle"/>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Typography variant="h5" className={classes.Typo}>
                        我们的职责
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Typography variant="h5" className={classes.Typo}>
                        我们的成就
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
              <Divider variant="middle"/>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.Typo}>
                  新闻
                </Typography>
              </Paper>
            </Grid>

          </Grid>
        </MuiThemeProvider>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
