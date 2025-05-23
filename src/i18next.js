import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import RectangleACoinsArrondis from './Components/RectangleACoinsArrondis';
import { Octagon } from 'lucide-react';
const savedLanguage = localStorage.getItem('language') || 'fr';


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    returnObjects: true,
    interpolation: {
        escapeValue: false, // Disable escaping of values
      },
    lng: savedLanguage, 
    resources: {
        fr: {
            translation: {
                Home: "Accueil",
                Command: "Commander",
                Contact: "Contact",
                Language: "العربية",
                text1: "Livraison gratuite",
                text2: "Découper sur mesure",
                text3: "Meilleur rapport qualité prix",
                hero_slide_1_title: "Transformez votre meuble en toute élégance grâce à nos Nappes",
                hero_slide_1_description: "Code : blackweek\nA partir de 80€, un support de bricolage est offert en cadeau pour toute commande.\nVotre cadeau sera automatiquement ajouté.",
                hero_slide_2_title: "Faites ressortir la beauté de vos tables grâce à notre nappe transparente ultra résistante & facile à nettoyer",
                hero_slide_2_description: "Code : blackweeeek\nA partir de 80€, un support de bricolage est offert en cadeau pour toute commande.\nVotre cadeau sera automatiquement ajouté.",
                icons_title: "Qu'est-ce qui rend notre nappe la Meilleure dans le marché?",
                icons_protection_title: "Protection",
                icons_protection_text: "Grâce au film de 1.5mm ou 2mm d’épaisseur, votre table est protégée contre les rayures et les dommages. Vous n’avez pas à vous soucier des taches non plus, rien ne se mettra sur la table.",
                icons_custom_cut_title: "Découpage sur mesure",
                icons_custom_cut_text: "Découpe avec des machines de haute précision et de différentes formes (table rectangulaire, carrée et ronde) selon votre demande.",
                icons_transparent_title: "Transparent",
                icons_transparent_text: "Gardez la vue sur votre belle table et ne cachez pas le grain. La surface reste visible et est encore plus accentuée par la feuille haute brillance.",
                product_button: "Voir le produit",
                flexible_film_title: "Film de table flexible pour tous les domaines d’application",
                flexible_film_text: "Notre nappe transparente a l’avantage d’être très élastique et antidérapante. De ce fait, le film est déroulé en moins d’une minute. Il suffit de poser – aligner – dérouler, c’est prêt ! Un point positif supplémentaire du film de protection est qu’une fois posé, il est difficile de le bouger et se trouve fixé fermement à la table. Les enfants tirant sur la nappe et occasionnant des dégâts, font dorénavant partie du passé.",
                tablecloths_title: "Nos Nappes de Table",
                tablecloth_tri_or_title: "Nappe Dorée",
                tablecloth_tri_or_text: "La nappe Dorée inspirée par le riche héritage du Zelij marocain, cette création transparente est une célébration de l'artisanat marocain.",
                tablecloth_transparent_title: "Nappe Transparente",
                tablecloth_transparent_text: "À première vue, cette nappe transparente de table ressemble à une plaque de verre, mais avec l'avantage qu'elle ne peut pas se rompre.",
                tablecloth_mat_title: "Nappe Mate",
                tablecloth_mat_text: "La nappe Mate convient parfaitement aux tables et aux surfaces en verre extrêmement lisses. Sa surface légèrement Mate ne permet pas la formation de bulles d’air.",
                textZwintwo_title: "Une solution parfaite pour chaque table",
                twin_two1:" Les nappes normales ont l’avantage de protéger la surface de la table. Le film transparent est découpé sur mesure et repose parfaitement sur votre table. Cela signifie que vous n’avez plus de côtés ennuyeux et tombants. Le film de table transparent est antidérapant et ne peut donc pas être tiré vers le bas sur les côtés des enfants ou des animaux domestiques, comme c’est le cas avec la nappe habituelle.",
                twin_two2:"Voir les produits",
                text_image1:"Vue libre de la table",
                text_image2:"La nappe de protection transparente",
                text_image3:"Avez-vous une belle table en bois véritable ou une belle surface brillante ?\n Pourquoi devrait-elle être cachée sous une toile cirée ou une nappe normale ? \n La surface de notre nappe est transparente et durable. Même si la table à manger est utilisée fréquemment, votre table restera propre et protégée. Vous gardez une vue dégagée de votre belle table et vous n’avez pas à vous soucier d’éventuels dommages à la surface.",
                text_image4:"Voir les produits",
                footer1: "Politique de confidentialité",
                footer2: "Politique de retour et remboursement",
                footer3: "À propos de nous",
                footer4: "Contactez-nous",
                product_page1: "Nappe transparente sur mesure chez EcoPalistique.ma",
                product_page2: "Découvrez l'élégance discrète de nos nappes transparentes sur mesure chez EcoPalistique.ma. À première vue, elles captivent par leur clarté cristalline, évoquant la beauté d'une surface en verre sans en présenter les risques. Chaque nappe, délicatement déroulée, adhère parfaitement à votre mobilier grâce à son poids, garantissant stabilité et élégance sans effort.",
                product_page3: "Idéale pour toute pièce de la maison, que ce soit votre table à manger, votre commode ou votre coiffeuse, notre nappe transparente transcende les attentes. Elle ne se contente pas d'ajouter une touche de sophistication ; elle offre une protection inégalée contre les rayures, les taches et l'usure quotidienne.",
                product_page4: "Aucune Tache sur Vos Tables",
                product_page5: "Ne vous souciez plus de ce que vos enfants renversent sur la table à manger ni de la façon dont vous y faites face. Le film de table de 1.5 mm et 2 mm d’épaisseur protège efficacement votre belle table contre les agressions et ne laisse aucune chance aux taches. Il suffit d’essuyer le nappe transparente de la table et elle est à nouveau propre.",
                product_page6: "Transparente",
                product_page7: "Gardez la vue sur votre belle table et ne cachez pas le grain. La surface reste visible et est encore plus accentuée par la feuille haute brillance.",
                product_page8: "Nappe Transparente",
                product_page9: "Conçu spécialement pour protéger votre table.",
                product_page10: "La nappe Mate",
                product_page11: "La nappe Mate convient parfaitement aux tables et aux surfaces en verre extrêmement lisses. Sa surface légèrement Mate ne permet pas la formation de bulles d’air.",
                product_page12: "Que vous placiez le film de table sur la table à manger, la commode ou la coiffeuse, il a toujours un aspect de haute qualité et protège également la surface.",
                product_page13: "Des taches sur la table ?",
                product_page14: "Ne vous souciez plus de ce que vos enfants renversent sur la table à manger ni de la façon dont vous y faites face. Le film de table de 1.5 mm et 2 mm d’épaisseur protège efficacement votre belle table contre les agressions et ne laisse aucune chance aux taches. Il suffit d’essuyer le nappe transparente de la table et elle est à nouveau propre.",
                product_page15: "Bord incliné",
                product_page16: "Il est difficile de croire qu’un bord incliné sur les bords du film puisse augmenter autant le confort d’assise. Les bords durs à angle droit peuvent entraîner une coupure désagréable dans l’avant-bras. Convainquez-vous en et remarquez déjà lorsque vous mettez le film Mate qu’il se pose harmonieusement sur la table.",
                product_page17: "Nappe Mate",
                product_page18: "Conçu spécialement pour protéger votre table à manger.",
                product_page19: "Dorée: L'Héritage du Zelij dans votre Salon",
                product_page20: "Dans un coin tranquille du Maroc, où l'art et la tradition se mêlent, naît une nappe unique : la nappe Dorée. Inspirée par le riche héritage du Zelij marocain, cette création transparente est une célébration de l'artisanat marocain, conçue pour faire rayonner la tradition dans les foyers modernes.",
                product_page21: "Plus qu'un simple protecteur de table, elle sert de pont entre les traditions millénaires et l'esthétique contemporaine. Facile à nettoyer et sur mesure, elle sublime chaque salon marocain, y ajoutant une touche d'élégance discrète.",
                product_page22: "Praticité et Durabilité",
                product_page23: "Conçue pour la vie quotidienne, cette nappe ne se contente pas d'embellir ; elle offre une protection durable et facile d'entretien pour vos tables, résistant aux taches et aux liquides tout en étant simple à nettoyer.",
                product_page24: "Élégance et Tradition Renouvelée",
                product_page25: "La nappe Dorée, avec ses motifs inspirés du Zelij marocain, apporte une touche d'élégance intemporelle à votre intérieur, fusionnant harmonieusement l'art ancestral marocain avec une esthétique moderne.",
                product_page26: "Nappe Dorée",
                product_page27: "Conçue spécialement pour sublimer votre salon marocain.",
                product_info_arrivee: "Après l'arrivée de la commande",
                product_info_arrivee_content: "Certains films sont coupés un peu plus longtemps pour contrer le processus de rétraction. Dans ce cas, nous vous demandons d’attendre 1 à 4 semaines pour que le film se rétracte. Vous ne devez rien ajouter à la taille réelle de votre surface lorsque vous passez votre commande.",
                product_info_odeurs: "Développement des odeurs",
                product_info_odeurs_content: "Les premiers jours, les personnes sensibles aux odeurs peuvent ressentir une odeur désagréable. Ne vous inquiétez pas ! Cette odeur disparaîtra au bout de quelques jours. Si c’est le cas, il suffit d’étaler le film de protection dans un endroit bien ventilé",
                product_info_exterieur: "Utilisation en extérieur",
                product_info_exterieur_content: "Veuillez noter que la feuille de table n’est pas adaptée à une utilisation permanente en extérieur. L’humidité entre le film de table et la surface ainsi que la lumière directe du soleil +30 °C réduisent la durée de vie du film de table. La stabilisation UV permet de contrer le processus de jaunissement, mais celui-ci ne peut être totalement évité.",
                product_info_plastique: "Tables en plastique",
                product_info_plastique_content: "Le film de table ne doit pas être placé sur des tables en plastique car des parties du film de table migrent dans la surface de la table en raison de la migration du plastifiant et ne peuvent plus être lavées.",
                product_info_moulage: "Moulage bleu",
                product_info_moulage_content: "Selon l’incidence de la lumière du soleil, une légère lueur bleue peut être perçue. Ce n’est pas le cas avec les luminaires normaux de la maison.",
                product_info_magazines: "Magazines ou journaux",
                product_info_magazines_content: "Nous vous demandons de ne pas placer de magazines ou de journaux sur le film de table pendant les premières semaines, car ils risquent de tacher le film de table et sont difficiles à enlever.\n \n Après environ 2 à 3 semaines, l’effet n’est plus aussi mauvais qu’au début.",
                product_info_donnees: "Données sur le produit",
                product_info_donnees_content: "Matériau : PVC souple,\nAptitude au contact alimentaire : oui,\nÉpaisseur du matériau : 1.5 mm et 2 mm,\nTaille max. largeur: 140 cm,\nLongueur max. Longueur: 1000 cm,\nTempérature d’utilisation : -5°C à +40°C,\nAptitude à l’extérieur : Limitée,\nRésistance aux UV : non,\nConseils pour l’entretien : Nettoyer avec de l’eau savonneuse, ne pas utiliser de produits abrasifs ou de blanchiment.",
                product_info_dimension:"Entrez les dimensions",
                product_presentation_title: "Présentation du produit",
                product_presentation_text: "Texte de présentation du produit",
                product_presentation_best_seller: "Best-seller",
                product_presentation_free_shipping: "Livraison gratuite partout au Maroc",
                Appliquer:"Appliquer",  
                product_presentation_thickness_1_5mm_dore:"Dorée : 250 DH/m², plus frais de découpage",
                product_presentation_thickness_1_5mm_mat:"Mate : 250 DH/m², plus frais de découpage",
                product_presentation_food_contact_dore_mat:"Le film de protection de table peut entre en contact avec des aliments.",
                product_presentation_protection_dore_mat:"Il est résistant à l’eau et protège contre les rayures.",
                product_presentation_transparent_dore_mat:"Grâce à sa transparence, vous pouvez toujours voir la surface de la table.",
                
                Prix_final:"Prix final",
                Prix_original:"Prix original",

                product_presentation_thickness_1_5mm: "Épaisseur 1.5mm: 199 DH/m², plus frais de découpage",
                product_presentation_thickness_2mm: "Épaisseur 2mm: 250 DH/m², plus frais de découpage",
                product_presentation_food_contact: "Le film de protection de table peut entre en contact avec des aliments.",
                product_presentation_protection: "Il est résistant à l’eau et protège contre les rayures.",
                product_presentation_transparent: "Grâce à sa transparence, vous pouvez toujours voir la surface de la table.",

                product_presentation_cancelicon: "Il ne convient pas pour l’extérieur ni pour les tables brillantes, laquées ou en verre.",

                clickici:"Cliquez ici",

                product_presentation_in_stock: "En stock",
                product_presentation_delivery_date: "Date de livraison : Entre le {{startDate}} et le {{endDate}}",
                product_presentation_table_shape: "Forme de votre table :",
                product_presentation_thickness: "Épaisseur :",
                product_presentation_table_dimensions: "Dimensions de votre table :",
                product_presentation_select_shape: "Veuillez sélectionner une forme de table",
                product_presentation_enter_dimensions: "Merci d'indiquer les mesures de votre table pour calculer le prix total.",
                product_presentation_total_price: "Prix total : {{prixTotal}} DHs",
                product_presentation_free_shipping_note: "La livraison est gratuite",
                product_presentation_add_another: "Ajouter une autre nappe",
                product_presentation_order_now: "Commander Maintenant",
                product_presentation_your_info: "Vos informations :",
                product_presentation_email: "Email :",
                Message:"Message:",
                product_presentation_mat: "Nappe Mate",
                product_presentation_dore: "Nappe Dorée",


                loading: "Traitement en cours...",
                order_success_title: "Commande réussie !",
                order_success_description: "Votre commande a été enregistrée avec succès. Notre service de confirmation vous contactera dans les plus brefs délais.",


                product_presentation_transparentse: "Nappe Transparente",

                product_presentation_full_name: "Nom complet :",
                product_presentation_phone: "Téléphone :",
                product_presentation_address: "Adresse complète :",
                Sujet:"Sujet",
                assistance1:"Besoin d'aide pour passer votre commande ?",
                assistance2:"Nous sommes là pour vous assister !",
                assistance3:"Appelez-nous au ",
                assistance4:"et nous vous guiderons tout au long du processus de commande.",
                Longueur: "Longueur",
                Largeur: "Largeur",
                cm: "cm",
                mm: "mm",
                Diametre: "Diamètre",
                Arc: "Arc",
                ArcA: "Arc A",
                ArcB: "Arc B",
                Rayon: "Rayon",

                Longueur15:"La longueur ne peut pas être moins 15 cm",
                Longueur15:"La longueur ne peut pas être moins 15 cm",
                Diametre15:"le Diametre ne peut pas être moins 15 cm",
                Largeur15:"La largeur ne peut pas être moins 15 cm",
                Vousavezuncodepromo:"Vous avez un code promo ?",
                Code_promo:"Code promo",
                Longueur140:"La longueur ne peut pas dépasser 140 cm",
                Longueur1000:"La longueur ne peut pas dépasser 1000 cm",
                Diametre140:"le Diametre ne peux pas dépasser 140 cm",
                Largeur140:"La largeur ne peut pas dépasser 140 cm",


                ArcDepasse:"L'arc ne peut pas dépasser la moitié de la longueur",
                dh: "DH",
                RectangleACoinsArrondis: "Rectangle à coins arrondis",
                RectangleChanfreiné: "Rectangle chanfreiné",
                Envoie_nous_un_message:"Envoie-nous un email",
                Liens_rapides:"Liens rapides",
                Envoyer_le_message:"Envoyer le message",
                Rectangle: "Rectangle",
                Cercle:"Cercle",
                Octogone: "Octogone",
                Contactez_nous:"Contactez-nous",
                Avis_de_nos_clients:"Avis clients",
                textfooter:'Leader dans la fabrication de nappes protectrices au Maroc, offrant des solutions innovantes pour protéger vos meubles avec style.'
            }
        },
        ar: {
            translation: {
                textfooter:'الشركة المغربية الرائدة في مجال تصنيع مفارش المائدة الواقية في المغرب، والتي تقدم حلولاً مبتكرة لحماية أثاثك بأناقة.',
                Avis_de_nos_clients:"التقيمات ", 
                Sujet:"الموضوع:",
                Contactez_nous:"تواصل معنا",
                Liens_rapides:"روابط سريعة",
                Home: "الرئيسية",
                Command: "اطلب الآن",
                Envoie_nous_un_message:"أرسل لنا بريداً إلكترونياً",
                Contact: "اتصل بنا",
                Message:"الرسالة:",
                Language: "FR",
                text1: "توصيل مجاني",
                Envoyer_le_message:"إرسال الرسالة",
                text2: "قص حسب الطلب",
                text3: "القيمة الأفضل",

                product_presentation_mat: "غطاء مضبب",
                product_presentation_dore: "غطاء ذهبي",
                product_presentation_transparentse: "غطاء شفاف",
                

                loading: "تتم المعالجة...",
                order_success_title: "تم الطلب بنجاح !",
                order_success_description: "لقد تم تسجيل طلبك بنجاح. سوف تقوم خدمة التأكيد لدينا بالاتصال بك في أقرب وقت ممكن.",


                hero_slide_1_title: "أسبوع التخفيضات – 10% على كل شيء",
                hero_slide_1_description: "الرمز: blackweek\nعند الشراء بمبلغ 80€، ستحصل على حامل أدوات كهدية مجانية مع كل طلب.\nستتم إضافة هديتك تلقائيًا.",
                hero_slide_2_title: "أسبوع التخفيضات – 20% على كل شيء",
                hero_slide_2_description: "الرمز: blackweeeek\nعند الشراء بمبلغ 80€، ستحصل على حامل أدوات كهدية مجانية مع كل طلب.\nستتم إضافة هديتك تلقائيًا.",
                icons_title: "ما الذي يجعل غطاءنا الأفضل في السوق؟",
                icons_protection_title: "الحماية",
                icons_protection_text: "بفضل الفيلم بسماكة 1.5 مم أو 2 مم، يتم حماية طاولتك من الخدوش والأضرار. لا داعي للقلق بشأن البقع أيضًا، لن يتسخ أي شيء على الطاولة.",
                icons_custom_cut_title: "قص حسب الطلب " ,
                icons_custom_cut_text: "قص باستخدام آلات عالية الدقة وبأشكال مختلفة (طاولة مستطيلة، مربعة ودائرية) حسب طلبك.",
                icons_transparent_title: "شفاف",
                icons_transparent_text: "احتفظ برؤية طاولتك الجميلة ولا تخفي الحبوب. تظل السطح مرئيًا ويزداد بروزًا بفضل الورقة اللامعة العالية.",
                product_button: "عرض المنتج",
                flexible_film_title: "فيلم طاولة مرن لجميع مجالات التطبيق",
                flexible_film_text: "يتميز غطاءنا الشفاف بكونه مرنًا للغاية وغير قابل للانزلاق. لذلك، يتم فرد الفيلم في أقل من دقيقة. يكفي وضعه - محاذاته - فرده، إنه جاهز! ميزة إضافية لفيلم الحماية هي أنه بمجرد وضعه، يصعب تحريكه ويثبت بقوة على الطاولة. الأطفال الذين يسحبون الغطاء ويتسببون في الأضرار أصبحوا الآن جزءًا من الماضي.",
                tablecloths_title: "مفارش طاولتنا",
                tablecloth_tri_or_title: "غطاء ذهبي",
                tablecloth_tri_or_text: "غطاء ذهبي مستوحى من التراث الغني للزليج المغربي، هذا الإبداع الشفاف هو احتفال بالحرفية المغربية.",
                tablecloth_transparent_title: "غطاء شفاف",
                tablecloth_transparent_text: "للوهلة الأولى، يبدو هذا الغطاء الشفاف وكأنه لوح زجاجي، ولكن مع ميزة أنه لا يمكن أن ينكسر.",
                tablecloth_mat_title: "غطاء مضبب",
                tablecloth_mat_text: "غطاء الطاولة الذهبي مستوحى من تراث الزليج المغربي العريق، هذا الابتكار الشفاف هو احتفال بالحرفية المغربية.",
                textZwintwo_title:"الحل المثالي لكل طاولة",
                twin_two1:"تتميز مفارش المائدة العادية بميزة حماية سطح الطاولة. يتم قص الغشاء الشفاف حسب المقاس ويستقر بشكل مثالي على طاولتك. وهذا يعني لا مزيد من الجوانب المملة والمتدلية. غشاء الطاولة الشفاف غير قابل للانزلاق، لذا لا يمكن للأطفال أو الحيوانات الأليفة سحبه على الجوانب، كما هو الحال مع مفارش المائدة العادية.",
                twin_two2:"عرض المنتجات",
                text_image1:"أنيق، حديث وبأناقة",
                text_image2:"غطاء الحماية الشفاف",
                text_image3:"هل لديك طاولة خشبية حقيقية جميلة أو سطح لامع جميل؟\n لماذا يجب إخفاؤه تحت قماش زيتي أو مفرش طاولة عادي؟ \n سطح مفرش الطاولة لدينا شفاف ومتين. حتى لو تم استخدام طاولة الطعام بشكل متكرر، ستبقى طاولتك نظيفة ومحمية. يمكنك الاحتفاظ برؤية طاولتك الجميلة دون عائق ولا داعي للقلق بشأن أي تلف للسطح.",
                text_image4:"عرض المنتجات",
                footer1: "سياسة الخصوصية",
                footer2: "سياسة الإرجاع والاسترداد",
                footer3: "من نحن ", 
                footer4: "اتصل بنا",
                product_page1: "غطاء شفاف حسب الطلب في EcoPalistique.ma",
                product_page2: "اكتشف الأناقة الراقية لمفارشنا الشفافة حسب الطلب في EcoPalistique.ma يبدون بمظهرهم الشفاف البلوري الجذاب، مستحضرين جمال سطح زجاجي دون المخاطر المرتبطة به. يتمسك كل غطاء، مفكك برفق، بأثاثك بشكل مثالي بفضل وزنه، مما يضمن الاستقرار والأناقة بدون جهد.",
                product_page3: "مثالية لأي غرفة في المنزل، سواء كانت طاولة الطعام الخاصة بك، أو خزانتك، أو مكتبك، تتجاوز مفارشنا الشفافة التوقعات. إنها لا تقتصر على إضافة لمسة من الأناقة؛ بل توفر حماية لا مثيل لها ضد الخدوش والبقع والتآكل اليومي.",
                product_page4: "لا بقع على طاولاتك",
                product_page5: "لا تقلق بشأن ما يسكبه أطفالك على طاولة الطعام أو كيفية التعامل معه. يحمي فيلم الطاولة بسماكة 1.5 مم و 2 مم طاولتك الجميلة بشكل فعال من الأضرار ولا يترك أي فرصة للبقع. يكفي مسح الغطاء الشفاف للطاولة ويصبح نظيفًا مرة أخرى.",
                product_page6: "شفاف",
                product_page7: "احتفظ برؤية طاولتك الجميلة ولا تخفي الحبوب. تظل السطح مرئيًا ويزداد بروزًا بفضل الورقة اللامعة العالية.",
                product_page8: "غطاء شفاف",
                product_page9: "مصمم خصيصًا لحماية طاولة الطعام الخاصة بك.",
                product_page10: "غطاء مضبب",
                product_page11: "غطاء الطاولة الذهبي مستوحى من تراث الزليج المغربي العريق، هذا الابتكار الشفاف هو احتفال بالحرفية المغربية.",
                product_page12: "سواء وضعت فيلم الطاولة على طاولة الطعام، أو الخزانة، أو مكتبك، فإنه دائمًا ما يبدو عالي الجودة ويحمي السطح أيضًا.",
                product_page13: "بقع على الطاولة؟",
                product_page14: "لا تقلق بشأن ما يسكبه أطفالك على طاولة الطعام أو كيفية التعامل معه. يحمي فيلم الطاولة بسماكة 1.5 مم و 2 مم طاولتك الجميلة بشكل فعال من الأضرار ولا يترك أي فرصة للبقع. يكفي مسح الغطاء الشفاف للطاولة ويصبح نظيفًا مرة أخرى.",
                product_page15: "حافة مائلة",
                product_page16: "من الصعب تصديق أن حافة مائلة على حواف الفيلم يمكن أن تزيد من راحة الجلوس. يمكن أن تؤدي الحواف الصلبة بزاوية قائمة إلى قطع غير مريح في الساعد. اقنع نفسك ولاحظ بالفعل عندما تضع الفيلم المضبب أنه يستقر بانسجام على الطاولة.",
                product_page17: "غطاء مضبب",
                product_page18: "مصمم خصيصًا لحماية طاولة الطعام الخاصة بك.",
                product_page19: "ذهبي: إرث الزليج في صالونك",
                product_page20: "في زاوية هادئة من المغرب، حيث يلتقي الفن والتقاليد، يولد غطاء فريد: غطاء ذهبي. مستوحى من التراث الغني للزليج المغربي، هذا الإبداع الشفاف هو احتفال بالحرفية المغربية، مصمم لجعل التقاليد تتألق في المنازل الحديثة.",
                product_page21: "أكثر من مجرد حامي للطاولة، إنه جسر بين التقاليد القديمة والجمالية المعاصرة. سهل التنظيف ومصمم حسب الطلب، يضفي لمسة من الأناقة الراقية على كل صالون مغربي.",
                product_page22: "العملية والمتانة",
                product_page23: "مصمم للحياة اليومية، هذا الغطاء لا يقتصر على التجميل؛ بل يوفر حماية دائمة وسهلة الصيانة لطاولاتك، مقاوم للبقع والسوائل وسهل التنظيف.",
                product_page24: "الأناقة والتقاليد المتجددة",
                product_page25: "غطاء ذهبي، بنقوشه المستوحاة من الزليج المغربي، يضفي لمسة من الأناقة الخالدة على داخلك، مما يدمج بسلاسة الفن المغربي القديم مع الجمالية الحديثة.",
                product_page26: "غطاء ذهبي",
                product_page27: "مصمم خصيصًا لتجميل صالونك المغربي.",
                product_info_arrivee: "بعد وصول الطلب",
                product_info_arrivee_content: "يتم قص بعض الأفلام لفترة أطول قليلاً لمواجهة عملية الانكماش. في هذه الحالة، نطلب منك الانتظار من أسبوع إلى 4 أسابيع حتى يتقلص الفيلم.لا تحتاج إلى إضافة أي شيء إلى الحجم الفعلي للسطح عند تقديم طلبك.",
                product_info_odeurs: "تطور الروائح",
                product_info_odeurs_content: "في الأيام القليلة الأولى، قد يشعر الأشخاص الذين لديهم حساسية تجاه الروائح برائحة كريهة. ولكن لا تقلق! ستختفي هذه الرائحة بعد بضعة أيام. إذا حدث ذلك، ما عليك سوى نشر الطبقة الواقية في منطقة جيدة التهوية.",
                product_info_exterieur: "استخدام في الهواء الطلق",
                product_info_exterieur_content: "3- يرجى ملاحظة أن غشاء الطاولة غير مناسب للاستخدام الخارجي الدائم. الرطوبة بين غشاء الطاولة والسطح وأشعة الشمس المباشرة +30 درجة مئوية تقلل من عمر غشاء الطاولة. يعمل التثبيت بالأشعة فوق البنفسجية على مقاومة عملية الاصفرار، ولكن لا يمكن تجنبها تماماً.",
                product_info_plastique: "الطاولات البلاستيكية",
                product_info_plastique_content: "يجب عدم وضع غشاء الطاولة على الطاولات البلاستيكية، حيث تنتقل أجزاء من غشاء الطاولة إلى سطح الطاولة بسبب هجرة الملدن ولا يمكن غسلها بعد ذلك.",
                product_info_moulage: "تشكيل أزرق",
                product_info_moulage_content: "قد يظهر توهج أزرق خفيف حسب درجة سطوع أشعة الشمس. ليس هذا هو الحال مع تركيبات الإضاءة المنزلية العاد",
                product_info_magazines: "مجلات أو صحف",
                product_info_magazines_content:  "يُرجى عدم وضع المجلات أو الجرائد على مفرش المائدة في الأسابيع القليلة الأولى، لأنها قد تلطخ مفرش المائدة ويصعب إزالتها. \n بعد حوالي 2 إلى 3 أسابيع، لن يكون التأثير سيئاً كما كان في البداية ",
                product_info_donnees: "بيانات المنتج",
                product_info_donnees_content: "المادة: بولي كلوريد الفينيل الناعم \n مناسب للتلامس مع الطعام: نعم \n سمك المادة: 1.5 و2 مم \n نطاق درجة الحرارة: -5 درجة مئوية إلى +40 درجة مئوية \n ملاءمة للاستخدام الخارجي: محدود  \n مقاومة للأشعة فوق البنفسجية: لا \n   القابلية للاشتعال: غير قابل للاشتعال ومثبط للهب وفقًا لمعيار DIN 53382/2/DIN4102/B2  \n تعليمات العناية: التنظيف بالماء والصابون، لا تستخدم منتجات كاشطة أو مبيضة",
                product_info_dimension:"أدخل  الأبعاد",
                product_presentation_title: "عرض المنتج",
                product_presentation_text: "نص عرض المنتج",
                product_presentation_best_seller: "الأكثر مبيعًا",
                product_presentation_free_shipping: "توصيل مجاني في جميع أنحاء المغرب",


                product_presentation_thickness_1_5mm: "السُمك 1.5 مم: 199 درهم/م²، بالإضافة إلى تكاليف القطع",
                product_presentation_thickness_2mm: "سمك 2 مم: 250 درهم/م²، بالإضافة إلى تكاليف التقطيع",
                product_presentation_food_contact: "فيلم حماية الطاولة يمكن أن يلامس الطعام",
                product_presentation_protection: "مقاوم للماء ويحمي من الخدوش.",
                product_presentation_transparent: "بفضل شفافيتها، يمكنك دائمًا رؤية سطح الطاولة.",
                product_presentation_cancelicon: "لا يناسب الاستخدام الخارجي أو الطاولات اللامعة أو المطلية أو الزجاجية." ,
                
                clickici:" \t انقر هنا لمشاهدة \t "  ,
                product_presentation_thickness_1_5mm_dore:"غطاء ذهبي : 250 درهم/م²، بالإضافة إلى تكاليف التقطيع",
                product_presentation_thickness_1_5mm_mat:"غطاء مضبب : 250 درهم/م²، بالإضافة إلى تكاليف التقطيع",
                product_presentation_thickness_1_5mm_dore_mat:"مضبب / غطاء ذهبي : 250 درهم/م²، بالإضافة إلى تكاليف التقطيع",
                product_presentation_food_contact_dore_mat:"فيلم حماية الطاولة يمكن أن يلامس الطعام.",
                product_presentation_protection_dore_mat:"مقاوم للماء ويحمي من الخدوش.",
                product_presentation_transparent_dore_mat:"بفضل شفافيتها، يمكنك دائمًا رؤية سطح الطاولة.",


                Vousavezuncodepromo:"هل لديك رمز ترويجي ؟",

                product_presentation_in_stock: "متوفر",
                product_presentation_delivery_date: "تاريخ التسليم: بين {{startDate}} و {{endDate}}",
                product_presentation_table_shape: "شكل طاولتك:",
                product_presentation_thickness: "سمك:",
                product_presentation_table_dimensions: "أبعاد طاولتك:",
                product_presentation_select_shape: "يرجى تحديد شكل الطاولة",
                product_presentation_enter_dimensions: "يرجى تحديد قياسات طاولتك لحساب السعر الإجمالي.",
                product_presentation_total_price: "السعر الإجمالي: {{prixTotal}} درهم",
                product_presentation_free_shipping_note: "التوصيل مجاني",
                product_presentation_add_another: "إضافة غطاء آخر",
                product_presentation_order_now: "اطلب الآن",
                product_presentation_your_info: "معلومضببك:",
                product_presentation_email: "البريد الإلكتروني:",
                product_presentation_full_name: "الاسم الكامل:",
                product_presentation_phone: "الهاتف:",
                product_presentation_address: "العنوان الكامل:",
              
                assistance1:"تحتاج مساعدة في تقديم طلبك؟",
                assistance2:"نحن هنا لمساعدتك!",
                assistance3:" اتصل بنا على ",
                assistance4:"وسنرشدك خلال عملية الطلب بأكملها.",
                Longueur: "الطول",
                Largeur: "العرض",
                cm: "سم",
                mm: "مم",
                Diametre: "القطر",
                Arc: "القوس",
                ArcA: "القوس أ",
                ArcB: "القوس ب",
                Rayon: "النصف",

                Longueur140:"لا يمكن أن يتجاوز الطول 140 سم",
                Longueur1000:"لا يمكن أن يتجاوز الطول 1000 سم",
                Largeur140:"لا يمكن أن يتجاوز العرض 140 سم",
                Diametre140:"لا يمكن أن يتجاوز القطر 140 سم" ,
                Code_promo:"الرمز الترويجي",
                Longueur15:"لا يمكن أن يكون أقل الطول 15 سم",
            
                Largeur15:"لا يمكن أن يكون أقل العرض 15 سم",
                Diametre15:"لا يمكن أن يكون أقل القطر 15 سم" ,
                
                Prix_final:"السعر النهائي",
                Prix_original:"السعر الأصلي",
                Appliquer:"طبّق",  
                ArcDepasse:"لا يمكن أن يتجاوز القوس نصف الطول",
                dh: "درهم",
                RectangleACoinsArrondis: "مستطيل بزوايا مستديرة",
                RectangleChanfreiné: "مستطيل مشطوف",
                Rectangle: "مستطيل",
                Cercle: "دائرة",
                Octogone: "مضلع",
            }
        }
    }
});

export default i18n;