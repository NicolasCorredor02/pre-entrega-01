import { Box, Container, Typography } from "@mui/material"

// Import de CartWidget
import CartWidget from "./CartWidget"

function NavBar({logo}) {
    return(
        <Box component="header" className="header">
           <Container  className="navbar" component="navbar">
              <Typography variant="h3" component="h1">{logo}</Typography>
              <ul>
                <li>Ropa</li>
                <li>Electronicos</li>
                <li>Joyeria</li>
              </ul>
              <CartWidget cantidad="2"/>
           </Container>
        </Box>
    )
}

export default NavBar