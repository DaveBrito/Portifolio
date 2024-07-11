import { Container, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/9440461.jpg"
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/FileDownload';
import MarkunreadIcon from '@mui/icons-material/Markunread';

function Hero() {

    const StyledHero = styled("div")({
        backgroundColor: "black",
        height: "100vh"
    })

    const StyledImage = styled("img")({
      width: "100%",
      borderRadius: "50%"
    })

    return (
     <>
       <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImage src={Avatar} />
            </Grid>
            <Grid item xs={8} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">Dave </Typography> 
              <Typography color="primary" variant="h2" textAlign="center">I´m Developer Student </Typography> 
                
              <Grid container display="flex" justifyContent="center">
               <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <button>
                    <DownloadIcon/ >
                    Download CV
                  </button>
                </Grid>  
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <button>
                  <MarkunreadIcon/>
                  Contact me
                </button>
                </Grid>
              </Grid>
              </Grid>
          </Grid> 
        </Container>
       </StyledHero>
     </>
   )
 }
 
 export default Hero
 