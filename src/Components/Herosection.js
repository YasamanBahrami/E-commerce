import LuluLemon from "../../src/image/LuluLemon.jpg";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box >
      <Box
        component="img"
        src={LuluLemon}
        alt="Hero"
        sx={{
          transform: 'rotate(90deg)',
         
          objectFit: 'cover',
          
          display: 'block', // Remove default image space
        }}
      />

      <Box
        position="absolute"
        bottom={40}
        left={40}
        bgcolor="white"
        p={2}
        borderRadius={2}
        boxShadow={3}
      >
        <Typography variant="h4" fontWeight="bold">
          Softest Launch: The BeCalm Collection
        </Typography>
        <Typography variant="body2" mt={1} color="text.secondary">
          Introducing sumptuous styles in freeing fabrics.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, bgcolor: 'black', '&:hover': { bgcolor: 'gray' } }}
        >
          SHOP WHAT'S NEW
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
