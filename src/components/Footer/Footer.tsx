import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f8f8f8",
        padding: theme.spacing(5, 0),
    },
    logo: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginBottom: theme.spacing(2),
    },
    navLink: {
        fontSize: 14,
        color: "#333",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    contact: {
        fontSize: 14,
        color: "#888",
        marginBottom: theme.spacing(1),
    },
    social: {
        fontSize: 20,
        color: "#888",
        marginRight: theme.spacing(2),
        "&:hover": {
            color: "#333",
        },
    },
}));

const Footer: React.FC = () => {
    const classes = useStyles();
    const date = new Date().getFullYear();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <div className={classes.logo}>NoraMarket</div>
                    <div className={classes.contact}>123 Main St, San Francisco, USA</div>
                    <div className={classes.contact}>info@noramarket.com</div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link href="#" className={classes.navLink}>
                        Home
                    </Link>
                    <br />
                    <Link href="#" className={classes.navLink}>
                        Shop
                    </Link>
                    <br />
                    <Link href="#" className={classes.navLink}>
                        About Us
                    </Link>
                    <br />
                    <Link href="#" className={classes.navLink}>
                        Blog
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link href="#" className={classes.social}>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#" className={classes.social}>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#" className={classes.social}>
                        <i className="fab fa-instagram"></i>
                    </Link>
                </Grid>
            </Grid>
            <div className={classes.contact}>&copy; {date} NoraMarket. All rights reserved.</div>
        </div>
    );
};

export default Footer;
