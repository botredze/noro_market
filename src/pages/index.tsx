import { NextPage } from 'next';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const HomePage: NextPage = () => {
    return (

    <div>
        <Header/>
        Привет !
    </div>
    );
};

export default HomePage;
