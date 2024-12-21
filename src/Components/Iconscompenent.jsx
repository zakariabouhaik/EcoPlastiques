 import { Box, Typography,Button } from '@mui/material';
import React from 'react'

const Iconscompenent = () => {

    const Chaque=({image,titre,text})=>{

        return(

            <Box sx={{justifyItems:'center'}}>
            <img
            src={image}
            style={{
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
            maxHeight: '600px',
             
          }}
           />
           <Box sx={{margin:3,justifyItems:'center'}}>
             <Typography sx={{margin:1}}  > {titre}</Typography>
             <Typography sx={{textAlign:'center'}}>{text}</Typography>
        </Box>
            </Box>
        )


    }

  return (
    <div>

    <Typography sx={{textAlign:'center', marginBottom:'5%',fontSize:30}}>Qu'est-ce qui rend notre nappe la Meilleur dans le marché</Typography>
<Box sx={{display:'flex',justifyContent: 'space-between',justifyItems:'center',width:'100%'}}>



    <Chaque

        image="/assets/icons/icons8-protect-64.png"
        titre="Protection"
        text="Grâce au film de 1.5mm ou 2mm d’épaisseur, votre table est protégée contre les rayures et les dommages. Vous n’avez pas à vous soucier des taches non plus, rien ne se mettra sur la table."
        
    />
     <Chaque

image="/assets/icons/icons8-ruler-64.png"
titre="Découpage sur mesure"
text="Découpe avec des machines de haute précision et de différentes formes (table rectangulaire, carrée et ronde) selon votre demande."

/>
<Chaque

image="/assets/icons/icons8-transparent-64.png"
titre="Transparent"
text="Gardez la vue sur votre belle table et ne cachez pas le grain. La surface reste visible et est encore plus accentuée par la feuille haute brillance."

/>
</Box>
      <Button sx={{bgcolor:'#9BC953',borderRadius:3,color:'white',margin:1,justifySelf:'center',display:'flex',marginTop:'2%',marginBottom:'2%'}}>Voir le produit</Button>

    </div>
  )
}

export default Iconscompenent
