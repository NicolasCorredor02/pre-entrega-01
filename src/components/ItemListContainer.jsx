import { Container, Typography } from "@mui/material"

function  ItemListContainer({mensaje}) {
    return (
        <Container component="main">
            <Typography sx={{textAlign:"center"}} variant="h2" component="p">{mensaje}</Typography>
        </Container>
    )
}

export default ItemListContainer