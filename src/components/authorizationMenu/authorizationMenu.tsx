/* eslint-disable indent */
import {Link, useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";
import {useCookies} from "react-cookie";
import {add} from "date-fns";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Modal,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {Close, Visibility, VisibilityOff} from "@mui/icons-material";

export function AuthorizationMenu() {
    const [visibilityPassword, setVisibilityPassword] = useState(false);
    const [, setCookie] = useCookies(["isAuthorized"]);
    const navigate = useNavigate();

    function togglePasswordVisibility() {
        setVisibilityPassword(!visibilityPassword);
    }

    function authorisationUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const LOGIN = "kpovel";
        const PASSWORD = "1234";
        const data = new FormData(event.currentTarget);
        const {login, password} = {
            login: data.get("login"),
            password: data.get("password"),
        };

        const isCorrectAuthorizationData = LOGIN === login && PASSWORD === password;
        if (isCorrectAuthorizationData) {
            const expiresDate = add(new Date(), {months: 1});
            setCookie("isAuthorized", true, {expires: expiresDate, path: "/"});

            navigate("/");
        }
    }

    return (
        <Modal open onClose={() => navigate("/")}>
            <Box sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
            }}>
                <Grid container spacing={2} sx={{alignItems: "center"}}>
                    <Grid xs={2}></Grid>
                    <Grid xs={8} sx={{alignItems: "center"}}>
                        <Typography component="h2" variant="h6" textAlign="center">Log in</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Link to="/">
                            <IconButton aria-label="close">
                                <Close/>
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
                <Box component="form" onSubmit={authorisationUser} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="Login"
                        name="login"
                        autoComplete="login"
                        autoFocus
                        defaultValue="kpovel"
                    />
                    <FormControl margin="normal"
                                 variant="outlined"
                                 required
                                 fullWidth
                    >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            label="Password"
                            autoComplete="password"
                            defaultValue="1234"
                            type={visibilityPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                    >
                                        {visibilityPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}