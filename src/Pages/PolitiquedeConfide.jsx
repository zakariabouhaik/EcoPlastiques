import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import TopNavigation from '../Components/TopNavigation';
import Footer from '../Components/Footer';

const PolitiquedeConfide = () => {
  const sections = [
    {
      title: "Introduction",
      content: `Merci d'être entré dans notre magasin EcoPlastiques.ma!

Notre site respecte votre vie privée et s'efforce de protéger vos données personnelles. Pour en savoir plus, veuillez lire la politique de confidentialité ci-dessous.

Cette politique de confidentialité explique comment nous collectons et utilisons vos données personnelles (dans certaines circonstances). Il mentionne également les procédures utilisées pour assurer la confidentialité de vos informations. Enfin, cette politique définit les choix qui s'offrent à vous concernant la collecte, l'utilisation et la divulgation des données personnelles. En visitant le Site directement ou via un autre site Web, vous consentez aux pratiques décrites dans cette politique.

La protection de vos données est très importante pour nous. Par conséquent, votre nom et d'autres informations vous concernant seront utilisés de la manière indiquée dans la présente politique de confidentialité et nous collecterons des informations si nécessaire ou s'il est nécessaire de se rapporter directement à nos relations avec vous.

Nous conserverons vos données conformément à la loi ou les utiliserons aux fins pour lesquelles elles ont été collectées, et vous pourrez naviguer sur le site sans avoir à fournir de données personnelles, et votre identité personnelle restera anonyme tout au long de votre visite sur le site, et il ne sera pas révélé à moins que vous n'ayez un compte électronique spécial sur le site auquel vous accédez en utilisant le nom d'utilisateur et le mot de passe.`
    },
    {
      title: "Données que nous collectons",
      content: `Nous pouvons être amenés à collecter vos informations si vous souhaitez enregistrer un bon de commande pour un produit sur notre site et nous collectons, stockons et traitons vos données nécessaires au suivi de votre achat sur notre site pour sécuriser toute réclamation potentielle qui pourrait apparaître ultérieurement, et pour vous fournir les services à notre disposition. Nous pouvons collecter des informations personnelles qui incluent, mais sans s'y limiter, le nom, le sexe, l'adresse e-mail, l'adresse postale, l'adresse de livraison (si différente), le numéro de téléphone, le numéro de téléphone portable, les détails de paiement Nous utilisons les informations que vous fournissez pour nous permettre de traiter vos commandes et de vous fournir les services et informations affichés sur notre site que vous demandez.En outre, nous utiliserons les informations que vous fournissez pour gérer votre compte chez nous afin de vérifier la situation financière les transactions que vous effectuez sur Internet, les audits de téléchargement des données du site, l'identification des visiteurs du site, le développement de la conception et/ou du contenu des pages du site et leur attribution aux utilisateurs, nous effectuons de nombreuses recherches liées à la démographie et envoyons des informations utiles ou requises à l'utilisateur, par exemple des informations sur les produits et services Et c'est dans le cas où vous ne vous opposez pas à communiquer avec vous à ce sujet, et la communication a lieu via le B Reed e-mail, téléphone ou WhatsApp pour vous fournir des détails sur d'autres produits et services si vous le souhaitez, et si vous préférez ne pas recevoir de communications promotionnelles et marketing, veuillez vous retirer de cette option à tout moment et nous pouvons donner votre nom et adresse à un tiers afin de livrer votre commande.Par exemple, un transporteur ou un fournisseur.Nous pouvons être en mesure de stocker les détails de votre commande en cours sur notre site Web, mais nous ne pouvons pas les récupérer directement pour des raisons de sécurité.`
    },
    {
      title: "Autres utilisations de vos informations personnelles",
      content: `Nous pouvons utiliser vos informations personnelles dans des sondages d'opinion et des études marketing, à votre demande, à des fins statistiques tout en garantissant une totale confidentialité, et vous avez le droit de vous retirer à tout moment. Nous n'envoyons aucune réponse à des tiers et votre adresse e-mail ou votre numéro de téléphone ne sont pas divulgués, sauf si vous souhaitez participer à des concours. Et nous conservons les réponses aux enquêtes dans un endroit complètement séparé de votre e-mail privé, et nous pouvons envoyer des informations sur nous, ou sur le site ou nos autres sites, ou sur nos produits, ventes, offres commerciales, newsletters et autres choses liées aux sociétés affiliées à notre groupe ou à nos partenaires. Si vous ne souhaitez pas recevoir ces informations supplémentaires (ou une partie de celles-ci), veuillez cliquer sur le lien "se désabonner" dans tout e-mail qui vous est envoyé, et nous cesserons de vous envoyer ces informations dans les sept jours ouvrables (tous les jours sauf le vendredi , samedi et jours fériés dans tout le Royaume du Maroc) à compter de la réception de votre notification et nous vous contacterons pour vous demander des informations alors qu'elles ne sont pas claires et nous pouvons utiliser certaines données, tout en préservant pleinement la vie privée et la confidentialité sur le site, à d'autres fins, y compris vérifier la localisation des utilisateurs et suivre leur visite sur le site ou les liens contenus dans l'e-mail lorsqu'ils s'inscrivent pour le recevoir, et fournir ces données anonymes, qui ne permettent pas votre identification personnelle réelle, à des tiers tels que les éditeurs par exemple. Cependant, ces données ne vous identifieront pas personnellement car elles ne sont pas identifiantes.`
    },
    {
      title: "Compétitions",
      content: `Dans le cadre de tout concours, nous utilisons les données pour informer les gagnants et pour annoncer nos offres. Vous pouvez trouver plus de détails sur les conditions de participation à chaque concours individuel.`
    },
    {
      title: "Tiers et liens vers des sites Web",
      content: `Nous pouvons transférer vos informations à d'autres sociétés de notre groupe ou à nos agents et sous-traitants pour nous aider dans les transactions connexes conformément aux termes de la présente politique de confidentialité. Nous pouvons, par exemple, faire appel à un tiers pour nous aider à vous livrer des produits. , recevoir des paiements de votre part, les utiliser à des fins statistiques et de recherche marketing, ou aider notre équipe de service client, et nous pouvons avoir besoin d'échanger des informations avec un tiers afin de nous protéger contre la fraude et de réduire le risque de crédit. ou une partie de celle-ci est vendue, nous pouvons être amenés à transférer nos bases de données qui incluent vos informations personnelles. En dehors de ce qui est indiqué dans la politique de confidentialité, nous ne vendrons ni ne divulguerons vos données personnelles à un tiers sans votre consentement préalable, à moins qu'il est nécessaire aux fins énoncées dans la présente politique de confidentialité, ou nous sommes tenus de le faire par la loi. Le site peut contenir des publicités pour des tiers ou des liens menant à d'autres sites ou des cadres pour d'autres sites, et nous vous informons que nous ne sommes pas responsables de la politique de confidentialité d'un tiers ou du contenu de ces politiques appliquées dans d'autres sites, en plus à cela nous ne sommes pas responsables des tiers auxquels nous transférons vos données conformément à la politique de confidentialité.`
    },
    {
      title: "Cookies",
      content: `L'acceptation des cookies n'est pas une condition préalable à la visite du Site, mais nous vous précisons qu'il n'est pas possible d'utiliser les fonctions « panier » du Site et de commander un article sans activer les cookies.Les cookies sont de petits fichiers texte qui permettent à notre serveur d'identifier votre ordinateur en tant qu'utilisateur unique lors de la visite de certaines pages du Site.Le site et votre navigateur enregistrent ces fichiers sur le disque dur de votre ordinateur. Les cookies peuvent être utilisés pour découvrir votre adresse IP (Internet Protocol), ce qui vous fait gagner du temps lorsque vous êtes sur ou souhaitez visiter le site. modifier votre panier sans avoir à ressaisir votre adresse e-mail ou votre numéro de téléphone) et non dans le but d'obtenir ou d'utiliser d'autres informations vous concernant (par exemple à des fins de marketing ciblé). Vous pouvez configurer votre navigateur pour qu'il n'accepte pas les cookies, mais cela limitera votre utilisation du site. Soyez assuré que notre utilisation des cookies ne contient aucune information personnelle ou privée et est exempte de virus.Ce site utilise Google Analytics, un service fourni par Google pour analyser les pages Web.

Afin d'analyser la façon dont les utilisateurs utilisent le site Web, Google Analytics s'appuie sur des cookies qui sont des fichiers texte placés sur votre ordinateur et les informations générées par les cookies concernant votre utilisation de ce site Web (y compris votre adresse IP) seront transmises par Google à des serveurs dans aux États-Unis où il sera stocké. Google utilisera ces informations pour évaluer votre utilisation du site Web, pour compiler des rapports sur l'activité du site Web pour les opérateurs de site Web et pour fournir d'autres services connexes.

Site actif et utilisation d'Internet. Google peut également transférer ces informations à des tiers si la loi l'exige ou si un tiers traite les informations pour le compte de Google. Google ne recoupera pas votre adresse IP avec d'autres données que vous détenez. Vous pouvez refuser l'utilisation de cookies. en choisissant les paramètres appropriés sur votre navigateur, mais gardez à l'esprit qu'alors vous ne pourrez pas profiter de toutes les fonctionnalités du site et en utilisant ce site, vous acceptez que Google utilise vos données de la manière et aux fins détaillé ci-dessus`
    },
    {
      title: "Sécurité",
      content: `Nous utilisons des technologies et des procédures de sécurité appropriées pour empêcher tout accès non autorisé ou illégal, perte ou destruction de vos informations.Lorsque nous collectons des données via le site, nous stockons vos informations personnelles dans une base de données au sein d'un serveur électronique sécurisé.

Nous utilisons des systèmes de pare-feu sur nos serveurs et lorsque nous collectons les détails de carte de paiement par voie électronique, nous les protégeons grâce à l'utilisation d'un cryptage, tel que Secure Sockets Layer (SSL). Il est donc difficile pour tout intrus de déchiffrer vos informations puisque nous ne pouvons pas garantir une protection à 100 %. Nous vous conseillons fortement de ne pas envoyer tous les détails de carte de crédit ou de débit lorsque vous communiquez avec nous par voie électronique et sans cryptage. Nous plaçons des garanties physiques, électroniques et procédurales directement sur la collecte, le stockage et la divulgation de vos informations.

Nos procédures de sécurité exigent que nous vous demandions parfois de vérifier votre identité avant de vous divulguer vos informations personnelles. Il est de votre responsabilité de protéger votre mot de passe et votre ordinateur contre toute utilisation non autorisée.`
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <TopNavigation />
      
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, sm: 4, md: 5 },
            bgcolor: 'white',
            borderRadius: 2
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 4,
              color: '#1a1a1a',
              textAlign: 'center'
            }}
          >
            Politique de Confidentialité
          </Typography>

          {sections.map((section, index) => (
            <Box 
              key={index}
              sx={{ 
                mb: 5,
                '&:last-child': { mb: 0 }
              }}
            >
              {section.title !== "Introduction" && (
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    fontWeight: 600,
                    mb: 2,
                    color: '#2C3E50'
                  }}
                >
                  {section.title}
                </Typography>
              )}
              
              <Typography
                sx={{
                  color: '#4a4a4a',
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  whiteSpace: 'pre-line',
                  '& > p': {
                    mb: 2
                  }
                }}
              >
                {section.content}
              </Typography>

              {index !== sections.length - 1 && (
                <Box 
                  sx={{ 
                    height: '1px',
                    bgcolor: 'rgba(0,0,0,0.1)',
                    my: 4 
                  }} 
                />
              )}
            </Box>
          ))}
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
};

export default PolitiquedeConfide;