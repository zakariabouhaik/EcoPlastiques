import React from 'react'
import { Box, Button, Typography } from '@mui/material';
 
const Type = () => {

  const Blan = ({ image, titre, text }) => {
  return (
    <Box sx={{border:'1px solid black' ,width:'15%' ,margin:10 , borderRadius:4 ,boxShadow: '1px 3px 6px rgb(104, 114, 115)', width:'33%' }}>
      <img
         src={image}
         style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            maxHeight: '600px',
            borderRadius: '16px', 
          }}
      />
      <Box sx={{margin:'10px'}}>
      <Typography
        variant="h4"
        sx={{
          color: 'black',
          fontWeight: 'bold',
           
          mb: 2,
        }}
      >
        {titre}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'black',
          maxWidth: '600px',
          margin: '0 auto',
           
        }}
      >
        {text}
      </Typography>
      </Box>
      <Button sx={{bgcolor:'#9BC953',borderRadius:3,color:'white',margin:1}}>Voir le produit</Button>
    </Box>
  );
};



  return (
    <div>

    
    
    <Typography sx={{textAlign:'center',fontSize: 40}}> Nos Nappes de Table </Typography>

<Box sx={{display:'flex',justifyContent: 'space-between'}}>
    <Blan
        image="/assets/Typepic/12.png"
        titre="Nappe Tri-or"
        text="La nappe Tri-Or inspirée par le riche héritage du Zelij marocain, cette création transparente est une célébration de l'artisanat marocain."
        buttonText="Voir le produit"
      />
       <Blan
       image="/assets/Typepic/3.jpg"
        titre="Nappe transparente"
        text="À première vue, cette nappe transparente de table ressemble à une plaque de verre, mais avec l'avantage qu'elle ne peut pas se rompre."
        buttonText="Voir le produit"
      />
       <Blan
       image="/assets/Typepic/nappe-mat-1.jpg"
        titre="Nappe mat"
        text="La nappe mat convient parfaitement aux tables et aux surfaces en verre extrêmement lisses. Sa surface légèrement mate ne permet pas la formation de bulles d’air."
        
      />
      </Box>
    </div>
  )
}

export default Type
