import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(2),
    },
}));

interface BannerProps {
    image: string;
    title: string;
    description: string;
}

const Banner: React.FC<BannerProps> = ({ image, title, description }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <img src={image} alt={title} />
            <Typography variant="h5" component="h2">
                {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
        </Paper>
    );
};

export default Banner;
