import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import cn from 'classnames'; 

import space from '/home/ub/SUI_PROJECTS/Predictrix_new/vite-project/src/assets/space.gif';


const Roadmap = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      p: 2, 
      border: '1px solid white',  
      boxShadow: '0px 0px 10px orange', 
      borderRadius: '4px', 
      m: 1, 
      width: '100%',  }}>
      <Typography className={cn("px-2 py-2 m-2 pixelify_sans")} variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', pb: 2, color: 'blue', }}>
        Roadmap
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <img src={space} alt="Map" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>

    </Box>
  );
};

export default Roadmap;
