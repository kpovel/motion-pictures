import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {AppBar, Box, Button, IconButton, styled, Toolbar, Tooltip, Typography} from "@mui/material";
import {Search} from "@mui/icons-material";
import {blueGrey, green} from "@mui/material/colors";

const ColorButton = styled(Button)(() => ({
    backgroundColor: green[600],
    "&:hover": {
        backgroundColor: green[700],
    },
}));

export function Header() {
    const [cookie, setCookie] = useCookies(["isAuthorized"]);
    const isUserAuthorized = cookie.isAuthorized === "true";

    function removeAuthorization() {
        setCookie("isAuthorized", false, {path: "/"});
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar>
                <Toolbar>
                    <Typography sx={{flexGrow: 1}}>
                        <Link to={"/"} style={{all: "unset"}}>
                            <Button sx={{color: "#FFFFFF"}} size="large">
                                Home
                            </Button>
                        </Link>
                    </Typography>
                    <Tooltip title="Search movie">
                        <IconButton sx={{mr: 1.5}}>
                            <Link to={"/search"} style={{
                                all: "unset",
                                width: "35px",
                                height: "35px",
                            }}>
                                <Search fontSize="large" sx={{color: blueGrey[800]}}/>
                            </Link>
                        </IconButton>
                    </Tooltip>
                    {isUserAuthorized ?
                        <ColorButton variant="contained" onClick={removeAuthorization}>
                            Log out
                        </ColorButton> :
                        <Link to={"/authorization"} style={{all: "unset"}}>
                            <ColorButton variant="contained">
                                Log in
                            </ColorButton>
                        </Link>
                    }
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </Box>
    );
}