/* eslint-disable indent */
import {Link, useNavigate} from "react-router-dom";
import {FormEvent, useReducer} from "react";
import {useCookies} from "react-cookie";
import {add} from "date-fns";
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
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

type authorizationHint = {
    showLoginHint?: boolean,
    showPasswordHint?: boolean,
    visiblePassword?: boolean
};

export function AuthorizationMenu() {
    const [authorizationHints, setAuthorizationHints] = useReducer(
        (state: authorizationHint, event: authorizationHint) => ({
            ...state, ...event
        }),
        {showLoginHint: false, showPasswordHint: false, visiblePassword: false}
    );
    const [, setCookie] = useCookies(["isAuthorized"]);
    const navigate = useNavigate();

    function togglePasswordVisibility() {
        setAuthorizationHints({visiblePassword: !authorizationHints.visiblePassword});
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

        const loginCorrect = LOGIN === login;
        const correctPassword = PASSWORD === password;
        if (loginCorrect && correctPassword) {
            const expiresDate = add(new Date(), {months: 1});
            setCookie("isAuthorized", true, {expires: expiresDate, path: "/"});

            navigate("/");
        } else {
            setAuthorizationHints({
                showLoginHint: !loginCorrect,
                showPasswordHint: !correctPassword
            });
        }
    }

    return (
        <Modal open onClose={() => navigate("/")}>
            <Box sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                maxWidth: 400,
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
                        error={authorizationHints.showLoginHint}
                        helperText={authorizationHints.showLoginHint ? "Login must be \"kpovel\"" : ""}
                    />
                    <FormControl margin="normal"
                                 variant="outlined"
                                 required
                                 fullWidth
                                 error={authorizationHints.showPasswordHint}
                    >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            label="Password"
                            autoComplete="password"
                            defaultValue="1234"
                            type={authorizationHints.visiblePassword ? "text" : "password"}
                            error={authorizationHints.showPasswordHint}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                    >
                                        {authorizationHints.visiblePassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {authorizationHints.showPasswordHint ?
                            <FormHelperText error>Password must be &quot;1234&quot;</FormHelperText> : ""}
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