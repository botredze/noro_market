import { NextPage } from 'next';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const HomePage: NextPage = () => {
    return (
        <Box sx={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
            <Header />
            <Box sx={{ backgroundColor: '#f6f6f6', height: '40vh' }} />

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Box sx={{ display: 'flex', marginBottom: 4 }}>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                        Our Products
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Button variant="contained" color="primary">View All</Button>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {/*<Card sx={{ maxWidth: 345, marginBottom: 3 }}>*/}
                    {/*    <CardActionArea>*/}
                    {/*        <CardMedia component="img" height="140" image="/product-1.jpg" alt="Product 1" />*/}
                    {/*        <CardContent>*/}
                    {/*            <Typography gutterBottom variant="h5" component="h2">*/}
                    {/*                Product 1*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant="body2" color="textSecondary" component="p">*/}
                    {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                    {/*            </Typography>*/}
                    {/*        </CardContent>*/}
                    {/*    </CardActionArea>*/}
                    {/*    <CardActions>*/}
                    {/*        <Button size="small">Learn More</Button>*/}
                    {/*        <Button size="small" color="primary">Buy Now</Button>*/}
                    {/*    </CardActions>*/}
                    {/*</Card>*/}

                    {/*<Card sx={{ maxWidth: 345, marginBottom: 3 }}>*/}
                    {/*    <CardActionArea>*/}
                    {/*        <CardMedia component="img" height="140" image="/product-2.jpg" alt="Product 2" />*/}
                    {/*        <CardContent>*/}
                    {/*            <Typography gutterBottom variant="h5" component="h2">*/}
                    {/*                Product 2*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant="body2" color="textSecondary" component="p">*/}
                    {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                    {/*            </Typography>*/}
                    {/*        </CardContent>*/}
                    {/*    </CardActionArea>*/}
                    {/*    <CardActions>*/}
                    {/*        <Button size="small">Learn More</Button>*/}
                    {/*        <Button size="small" color="primary">Buy Now</Button>*/}
                    {/*    </CardActions>*/}
                    {/*</Card>*/}

                    {/*<Card sx={{ maxWidth: 345, marginBottom: 3 }}>*/}
                    {/*    <CardActionArea>*/}
                    {/*        <CardMedia component="img" height="140" image="/product-3.jpg" alt="Product 3" />*/}
                    {/*        <CardContent>*/}
                    {/*            <Typography gutterBottom variant="h5" component="h2">*/}
                    {/*                Product 3*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant="body2" color="textSecondary" component="p">*/}
                    {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                    {/*            </Typography>*/}
                    {/*        </CardContent>*/}
                    {/*    </CardActionArea>*/}
                    {/*    <CardActions>*/}
                    {/*        <Button size="small">Learn More</Button>*/}
                    {/*        <Button size="small" color="primary">Buy Now</Button>*/}
                    {/*    </CardActions>*/}
                    {/*</Card>*/}

                    {/*<Card sx={{ maxWidth: 345, marginBottom: 3 }}>*/}
                    {/*    <CardActionArea>*/}
                    {/*        <CardMedia component="img" height="140" image="/product-4.jpg" alt="Product 4" />*/}
                    {/*        <CardContent>*/}
                    {/*            <Typography gutterBottom variant="h5" component="h2">*/}
                    {/*                Product 4*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant="body2" color="textSecondary" component="p">*/}
                    {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                    {/*            </Typography>*/}
                    {/*        </CardContent>*/}
                    {/*    </CardActionArea>*/}
                    {/*    <CardActions>*/}
                    {/*        <Button size="small">Learn More</Button>*/}
                    {/*        <Button size="small" color="primary">Buy Now</Button>*/}
                    {/*    </CardActions>*/}
                    {/*</Card>*/}
                </Box>

                <Footer />
            </Container>
        </Box>
    );
};

export default HomePage;
