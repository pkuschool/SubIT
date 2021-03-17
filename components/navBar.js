//导航栏，已完成

import React from 'react'
import Link from './Link'
import { theme } from '../styles/theme'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles, MuiThemeProvider, useScrollTrigger } from '@material-ui/core'
import Image from 'next/image'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    width: "100%",
    position: "sticky",
  },
  title: {
    flexGrow: 1,
    visibility: "hidden"
  },
  button: {
    position: "relative",
    right: "15%",
  },
  image: {
    position: "relative",
    left: "15%"
  }
}))

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
}

export default function NavBar(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <ElevationScroll {...props}>
          <AppBar color="primary">
            <Toolbar variant="dense">
              <Toolbar className={classes.image} variant="dense">
                <Image
                  src="/../public/images/logo.svg"
                  alt="SubIT"
                  width={110}
                  height={55}
                  onClick={() => { window.open('/', '_self') }}
                />
              </Toolbar>
              <Typography className={classes.title}>
                SubIT
              </Typography>
              <Button className={classes.button} variant="contained" color="primary" component={Link} naked href="/" disableElevation>主页</Button>
              <Button className={classes.button} variant="contained" color="primary" component={Link} naked href="/projects" disableElevation>项目与成就</Button>
              <Button className={classes.button} variant="contained" color="primary" component={Link} naked href="/news" disableElevation>新闻推送</Button>
              <Button className={classes.button} variant="contained" color="primary" component={Link} naked href="/about" disableElevation>关于我们</Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </MuiThemeProvider>
    </div>
  )
}
