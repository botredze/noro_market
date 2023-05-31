import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        marginBottom: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9 aspect ratio
    },
    content: {
        padding: theme.spacing(2),
    },
}));

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Price: ${price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
