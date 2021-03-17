import Head from 'next/head'
import NavBar from './navBar'
import BottomBar from './bottomBar'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
}))

export const siteTitle = 'SubIT'

export default function Layout({ children, home }) {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <link rel="shortcut icon" sizes="16 x 16" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAC1AAAAtQE50M6fAAACf0lEQVR4nO2bPWvbUBSGX1fFIAsCNw4UggrGJVozqIvnyFtXz9kcr8kSg9cO9dK1SX6Cs3qz8JqlGgItBIeIlJgGg40gxFFwMe0Q1EZItVQj6VjVfTbrw3r16H4cXVAO+19+IsO8oA5ADRdAHYAaLoA6ADVcAHUAargA6gDUcAHUAajhAqgDUMMFUAegJvMCXsb555oiodco+e7LHXz13d5rlKApUiTXb3ZHaPfHC4/JfAvgAqgDUJN5AbEOgsvQ7I7ACt7nosoiPrx75XtO9ejad7s5+RF4vZUTYAztfz5HH0yXvl7muwAXQB2AGi6AOgA1XAB1AGq4AOoA1ISuBFVZRL3CoCkSWEEAABg3j9AH9zg5s2DZ89hCxkkoAfUKw3Ft07NdUyRoioTDnQ3sdb7j9Pwu8oBxE9gFVFn0vfnnMFGILFDSBLaAeoW5flePrn+/fNS213C4swHj5jGVTx8IIcDp7wBg2XPXm9fp+V1qb9whsAtYD38GNyYKOK5tolzMxxoqSQIFtPtj1whfrzBctbbQa5RQ216LNVwSBAowJzNUP33zTHOaIqGz+xpXra3IlrEpCFUIGUMbb95fotkdeUSUi/lI1/KTJnQlaNlztPtjrLcuXDOBQ9BUuaosVQrrg6lHQloHxkABThNXZdGzz5zMYgmVJIF1QGdXhiqL+HxQhj6YQh/cA3gS87xIWmY1dxVYKECVRdeTd2p/P/Y6t9EmS4iFXcAY2lhvXeDkzPrrMeZkhrcfzdS2gFzY7wWYKEBTJJSLebCCAOvhqSxO6407hBbwv5L5FSEugDoANVwAdQBquADqANRwAdQBqOECqANQwwVQB6Am8wJ+AWmWqQUmboQRAAAAAElFTkSuQmCC" type="image/x-icon"/>
        <title>{home}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div>
        <NavBar />
        <main>{children}</main>
        <BottomBar />
      </div>
    </div>
  )
}
