import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget({cantidad}) {
    return(
        <>
            <Badge badgeContent={cantidad} color="primary">
                <ShoppingCartIcon />
            </Badge>
        </>
    )
}

export default CartWidget