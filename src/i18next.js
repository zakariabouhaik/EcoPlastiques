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
                Language: "AR",
                text1: "Livraison gratuite",
                text2: "Découper sur mesure",
                text3: "Meilleur rapport qualité prix",
                hero_slide_1_title: "Black Week – 10% SUR TOUT",
                hero_slide_1_description: "Code : blackweek\nA partir de 80€, un support de bricolage est offert en cadeau pour toute commande.\nVotre cadeau sera automatiquement ajouté.",
                hero_slide_2_title: "Black Week – 20% SUR TOUT",
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
                tablecloth_tri_or_title: "Nappe Tri-or",
                tablecloth_tri_or_text: "La nappe Tri-Or inspirée par le riche héritage du Zelij marocain, cette création transparente est une célébration de l'artisanat marocain.",
                tablecloth_transparent_title: "Nappe transparente",
                tablecloth_transparent_text: "À première vue, cette nappe transparente de table ressemble à une plaque de verre, mais avec l'avantage qu'elle ne peut pas se rompre.",
                tablecloth_mat_title: "Nappe mat",
                tablecloth_mat_text: "La nappe mat convient parfaitement aux tables et aux surfaces en verre extrêmement lisses. Sa surface légèrement mate ne permet pas la formation de bulles d’air.",
                textZwintwo_title: "Sécurité alimentaire",
                twin_two1:" Notre nappe est souvent utilisée sur la table de la salle à manger. C’est pourquoi, nous avons pris un soin particulier pour le choix des matières premières et pouvons maintenant dire que le film de protection est conforme aux normes de sécurité alimentaire et sans danger lors d’un contact avec les aliments. Habituellement, nous avons besoin d’une assiette pour manger. Cependant, chaque parent sait que cela ne fonctionne pas toujours avec les enfants. Avec notre film, ne doutez plus.",
                twin_two2:"Voir les produits",
                text_image1:"Élégant, moderne et avec du style",
                text_image2:"La nappe de protection transparente",
                text_image3:"À quoi sert la plus belle table, si elle est cachée sous une nappe traditionnelle? Le magnifique bois massif ou le motif particulier de votre table doivent être vus et protégés. Grâce à notre film transparent vous pouvez dorénavant toujours l’admirer. Cette nappe est coupée sur mesure et biseautée sur les bords. En cas de besoin, vous pouvez facilement enlever le film et l’enrouler. En une minute, vous reposez la nappe transparente et votre table est à nouveau protégée.",
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
                product_page8: "Nappe transparente",
                product_page9: "Conçu spécialement pour protéger votre table à manger.",
                product_page10: "La nappe mat",
                product_page11: "La nappe mat convient parfaitement aux tables et aux surfaces en verre extrêmement lisses. Sa surface légèrement mate ne permet pas la formation de bulles d’air.",
                product_page12: "Que vous placiez le film de table sur la table à manger, la commode ou la coiffeuse, il a toujours un aspect de haute qualité et protège également la surface.",
                product_page13: "Des taches sur la table ?",
                product_page14: "Ne vous souciez plus de ce que vos enfants renversent sur la table à manger ni de la façon dont vous y faites face. Le film de table de 1.5 mm et 2 mm d’épaisseur protège efficacement votre belle table contre les agressions et ne laisse aucune chance aux taches. Il suffit d’essuyer le nappe transparente de la table et elle est à nouveau propre.",
                product_page15: "Bord incliné",
                product_page16: "Il est difficile de croire qu’un bord incliné sur les bords du film puisse augmenter autant le confort d’assise. Les bords durs à angle droit peuvent entraîner une coupure désagréable dans l’avant-bras. Convainquez-vous en et remarquez déjà lorsque vous mettez le film mat qu’il se pose harmonieusement sur la table.",
                product_page17: "Nappe mat",
                product_page18: "Conçu spécialement pour protéger votre table à manger.",
                product_page19: "Tri-Or: L'Héritage du Zelij dans votre Salon",
                product_page20: "Dans un coin tranquille du Maroc, où l'art et la tradition se mêlent, naît une nappe unique : la nappe Tri-Or. Inspirée par le riche héritage du Zelij marocain, cette création transparente est une célébration de l'artisanat marocain, conçue pour faire rayonner la tradition dans les foyers modernes.",
                product_page21: "Plus qu'un simple protecteur de table, elle sert de pont entre les traditions millénaires et l'esthétique contemporaine. Facile à nettoyer et sur mesure, elle sublime chaque salon marocain, y ajoutant une touche d'élégance discrète.",
                product_page22: "Praticité et Durabilité",
                product_page23: "Conçue pour la vie quotidienne, cette nappe ne se contente pas d'embellir ; elle offre une protection durable et facile d'entretien pour vos tables, résistant aux taches et aux liquides tout en étant simple à nettoyer.",
                product_page24: "Élégance et Tradition Renouvelée",
                product_page25: "La nappe Tri-Or, avec ses motifs inspirés du Zelij marocain, apporte une touche d'élégance intemporelle à votre intérieur, fusionnant harmonieusement l'art ancestral marocain avec une esthétique moderne.",
                product_page26: "Nappe Tri-or",
                product_page27: "Conçue spécialement pour sublimer votre salon marocain.",
                product_info_arrivee: "Après l'arrivée de la commande",
                product_info_arrivee_content: "Texte de la section 'Après l'arrivée de la commande'",
                product_info_odeurs: "Développement des odeurs",
                product_info_odeurs_content: "Texte de la section 'Développement des odeurs'",
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
                product_presentation_thickness_1_5mm: "Épaisseur 1.5mm: 215 DH/m², plus frais de découpage",
                product_presentation_thickness_2mm: "Épaisseur 2mm: 254 DH/m², plus frais de découpage",
                product_presentation_food_contact: "Susceptible d'entrer en contact avec des aliments",
                product_presentation_protection: "Excellente protection contre les rayures et l'humidité",
                product_presentation_transparent: "Transparent pour que vous puissiez toujours voir la surface de la table",
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
                product_presentation_full_name: "Nom complet :",
                product_presentation_phone: "Téléphone :",
                product_presentation_address: "Adresse complète :",
             
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
                Longueur140:"La longueur ne peut pas dépasser 140 cm",
                Longueur1000:"La longueur ne peut pas dépasser 1000 cm",
                Largeur140:"La largeur ne peut pas dépasser 140 cm",
                ArcDepasse:"L'arc ne peut pas dépasser la moitié de la longueur",
                dh: "DH",
                RectangleACoinsArrondis: "Rectangle à coins arrondis",
                RectangleChanfreiné: "Rectangle chanfreiné",
                Rectangle: "Rectangle",
                Cercle:"Cercle",
                Octogone: "Octogone",
            }
        },
        ar: {
            translation: {
                Home: "الرئيسية",
                Command: "اطلب الآن",
                Contact: "اتصل بنا",
                Language: "FR",
                text1: "توصيل مجاني",
                text2: "قص حسب الطلب",
                text3: "القيمة الأفضل",
                hero_slide_1_title: "أسبوع التخفيضات – 10% على كل شيء",
                hero_slide_1_description: "الرمز: blackweek\nعند الشراء بمبلغ 80€، ستحصل على حامل أدوات كهدية مجانية مع كل طلب.\nستتم إضافة هديتك تلقائيًا.",
                hero_slide_2_title: "أسبوع التخفيضات – 20% على كل شيء",
                hero_slide_2_description: "الرمز: blackweeeek\nعند الشراء بمبلغ 80€، ستحصل على حامل أدوات كهدية مجانية مع كل طلب.\nستتم إضافة هديتك تلقائيًا.",
                icons_title: "ما الذي يجعل مفرشنا الأفضل في السوق؟",
                icons_protection_title: "الحماية",
                icons_protection_text: "بفضل الفيلم بسماكة 1.5 مم أو 2 مم، يتم حماية طاولتك من الخدوش والأضرار. لا داعي للقلق بشأن البقع أيضًا، لن يتسخ أي شيء على الطاولة.",
                icons_custom_cut_title: "قص حسب الطلب " ,
                icons_custom_cut_text: "قص باستخدام آلات عالية الدقة وبأشكال مختلفة (طاولة مستطيلة، مربعة ودائرية) حسب طلبك.",
                icons_transparent_title: "شفاف",
                icons_transparent_text: "احتفظ برؤية طاولتك الجميلة ولا تخفي الحبوب. تظل السطح مرئيًا ويزداد بروزًا بفضل الورقة اللامعة العالية.",
                product_button: "عرض المنتج",
                flexible_film_title: "فيلم طاولة مرن لجميع مجالات التطبيق",
                flexible_film_text: "يتميز مفرشنا الشفاف بكونه مرنًا للغاية وغير قابل للانزلاق. لذلك، يتم فرد الفيلم في أقل من دقيقة. يكفي وضعه - محاذاته - فرده، إنه جاهز! ميزة إضافية لفيلم الحماية هي أنه بمجرد وضعه، يصعب تحريكه ويثبت بقوة على الطاولة. الأطفال الذين يسحبون المفرش ويتسببون في الأضرار أصبحوا الآن جزءًا من الماضي.",
                tablecloths_title: "مفارش طاولتنا",
                tablecloth_tri_or_title: "مفرش ثلاثي الذهب",
                tablecloth_tri_or_text: "مفرش ثلاثي الذهب مستوحى من التراث الغني للزليج المغربي، هذا الإبداع الشفاف هو احتفال بالحرفية المغربية.",
                tablecloth_transparent_title: "مفرش شفاف",
                tablecloth_transparent_text: "للوهلة الأولى، يبدو هذا المفرش الشفاف وكأنه لوح زجاجي، ولكن مع ميزة أنه لا يمكن أن ينكسر.",
                tablecloth_mat_title: "مفرش مات",
                tablecloth_mat_text: "مفرش مات مناسب تمامًا للطاولات والأسطح الزجاجية الملساء للغاية. سطحه غير اللامع قليلاً لا يسمح بتكوين فقاعات الهواء.",
                textZwintwo_title: "سلامة الغذاء",
                twin_two1:"يتم استخدام مفرشنا غالبًا على طاولة غرفة الطعام. لهذا السبب، اخترنا بعناية المواد الخام ويمكننا الآن القول بأن فيلم الحماية مطابق لمعايير السلامة الغذائية وغير ضار عند الاتصال بالطعام. عادةً ما نحتاج إلى طبق لتناول الطعام. ومع ذلك، يعرف كل والد أن هذا لا يعمل دائمًا مع الأطفال. مع فيلمنا، لا داعي للشك.",
                twin_two2:"عرض المنتجات",
                text_image1:"أنيق، حديث وبأناقة",
                text_image2:"مفرش الحماية الشفاف",
                text_image3:"ما فائدة أجمل طاولة، إذا كانت مخفية تحت مفرش طاولة تقليدي؟ يجب أن تُرى الخشب الصلب الرائع أو النقش الخاص لطاولتك وتُحمى. بفضل فيلمنا الشفاف، يمكنك الآن رؤيته دائمًا. يتم قص هذا المفرش حسب الطلب وتشطيب حوافه. في حال الحاجة، يمكنك إزالة الفيلم بسهولة ولفه. في دقيقة واحدة، تعيد وضع المفرش الشفاف وتحمي طاولتك مرة أخرى.",
                text_image4:"عرض المنتجات",
                footer1: "سياسة الخصوصية",
                footer2: "سياسة الإرجاع والاسترداد",
                footer3: "معلومات عنا",
                footer4: "اتصل بنا",
                product_page1: "مفرش شفاف حسب الطلب في EcoPalistique.ma",
                product_page2: "اكتشف الأناقة الراقية لمفارشنا الشفافة حسب الطلب في EcoPalistique.ma يبدون بمظهرهم الشفاف البلوري الجذاب، مستحضرين جمال سطح زجاجي دون المخاطر المرتبطة به. يتمسك كل مفرش، مفكك برفق، بأثاثك بشكل مثالي بفضل وزنه، مما يضمن الاستقرار والأناقة بدون جهد.",
                product_page3: "مثالية لأي غرفة في المنزل، سواء كانت طاولة الطعام الخاصة بك، أو خزانتك، أو مكتبك، تتجاوز مفارشنا الشفافة التوقعات. إنها لا تقتصر على إضافة لمسة من الأناقة؛ بل توفر حماية لا مثيل لها ضد الخدوش والبقع والتآكل اليومي.",
                product_page4: "لا بقع على طاولاتك",
                product_page5: "لا تقلق بشأن ما يسكبه أطفالك على طاولة الطعام أو كيفية التعامل معه. يحمي فيلم الطاولة بسماكة 1.5 مم و 2 مم طاولتك الجميلة بشكل فعال من الأضرار ولا يترك أي فرصة للبقع. يكفي مسح المفرش الشفاف للطاولة ويصبح نظيفًا مرة أخرى.",
                product_page6: "شفاف",
                product_page7: "احتفظ برؤية طاولتك الجميلة ولا تخفي الحبوب. تظل السطح مرئيًا ويزداد بروزًا بفضل الورقة اللامعة العالية.",
                product_page8: "مفرش شفاف",
                product_page9: "مصمم خصيصًا لحماية طاولة الطعام الخاصة بك.",
                product_page10: "مفرش مات",
                product_page11: "مفرش مات مناسب تمامًا للطاولات والأسطح الزجاجية الملساء للغاية. سطحه غير اللامع قليلاً لا يسمح بتكوين فقاعات الهواء.",
                product_page12: "سواء وضعت فيلم الطاولة على طاولة الطعام، أو الخزانة، أو مكتبك، فإنه دائمًا ما يبدو عالي الجودة ويحمي السطح أيضًا.",
                product_page13: "بقع على الطاولة؟",
                product_page14: "لا تقلق بشأن ما يسكبه أطفالك على طاولة الطعام أو كيفية التعامل معه. يحمي فيلم الطاولة بسماكة 1.5 مم و 2 مم طاولتك الجميلة بشكل فعال من الأضرار ولا يترك أي فرصة للبقع. يكفي مسح المفرش الشفاف للطاولة ويصبح نظيفًا مرة أخرى.",
                product_page15: "حافة مائلة",
                product_page16: "من الصعب تصديق أن حافة مائلة على حواف الفيلم يمكن أن تزيد من راحة الجلوس. يمكن أن تؤدي الحواف الصلبة بزاوية قائمة إلى قطع غير مريح في الساعد. اقنع نفسك ولاحظ بالفعل عندما تضع الفيلم المات أنه يستقر بانسجام على الطاولة.",
                product_page17: "مفرش مات",
                product_page18: "مصمم خصيصًا لحماية طاولة الطعام الخاصة بك.",
                product_page19: "ثلاثي الذهب: إرث الزليج في صالونك",
                product_page20: "في زاوية هادئة من المغرب، حيث يلتقي الفن والتقاليد، يولد مفرش فريد: مفرش ثلاثي الذهب. مستوحى من التراث الغني للزليج المغربي، هذا الإبداع الشفاف هو احتفال بالحرفية المغربية، مصمم لجعل التقاليد تتألق في المنازل الحديثة.",
                product_page21: "أكثر من مجرد حامي للطاولة، إنه جسر بين التقاليد القديمة والجمالية المعاصرة. سهل التنظيف ومصمم حسب الطلب، يضفي لمسة من الأناقة الراقية على كل صالون مغربي.",
                product_page22: "العملية والمتانة",
                product_page23: "مصمم للحياة اليومية، هذا المفرش لا يقتصر على التجميل؛ بل يوفر حماية دائمة وسهلة الصيانة لطاولاتك، مقاوم للبقع والسوائل وسهل التنظيف.",
                product_page24: "الأناقة والتقاليد المتجددة",
                product_page25: "مفرش ثلاثي الذهب، بنقوشه المستوحاة من الزليج المغربي، يضفي لمسة من الأناقة الخالدة على داخلك، مما يدمج بسلاسة الفن المغربي القديم مع الجمالية الحديثة.",
                product_page26: "مفرش ثلاثي الذهب",
                product_page27: "مصمم خصيصًا لتجميل صالونك المغربي.",
                product_info_arrivee: "بعد وصول الطلب",
                product_info_arrivee_content: "نص القسم 'بعد وصول الطلب'",
                product_info_odeurs: "تطور الروائح",
                product_info_odeurs_content: "نص القسم 'تطور الروائح'",
                product_info_exterieur: "استخدام في الهواء الطلق",
                product_info_exterieur_content: "يرجى ملاحظة أن فيلم الطاولة غير مناسب للاستخدام الدائم في الهواء الطلق. الرطوبة بين فيلم الطاولة والسطح وأشعة الشمس المباشرة +30 درجة مئوية تقلل من عمر فيلم الطاولة. تساعد استقرار الأشعة فوق البنفسجية في مقاومة عملية التصفير، ولكن لا يمكن تجنبها تمامًا.",
                product_info_plastique: "الطاولات البلاستيكية",
                product_info_plastique_content: "لا يجب وضع فيلم الطاولة على الطاولات البلاستيكية لأن أجزاء من فيلم الطاولة تهاجر إلى سطح الطاولة بسبب هجرة الملدن ولا يمكن غسلها بعد ذلك.",
                product_info_moulage: "تشكيل أزرق",
                product_info_moulage_content: "وفقًا لزاوية الضوء الشمسي، يمكن أن يُلاحظ وهج أزرق خفيف. لا يحدث هذا مع مصابيح المنزل العادية.",
                product_info_magazines: "مجلات أو صحف",
                product_info_magazines_content: "نطلب منك عدم وضع المجلات أو الصحف على فيلم الطاولة خلال الأسابيع الأولى، لأنها قد تلطخ فيلم الطاولة وتكون صعبة الإزالة.\n \n بعد حوالي 2 إلى 3 أسابيع، لم يعد التأثير سيئًا مثل البداية.",
                product_info_donnees: "بيانات المنتج",
                product_info_donnees_content: "المواد: PVC مرنة،\nالتوافق مع الاتصال الغذائي: نعم،\nسمك المادة: 1.5 مم و 2 مم،\nالعرض الأقصى: 140 سم،\nالطول الأقصى: 1000 سم،\nدرجة حرارة الاستخدام: -5 درجة مئوية إلى +40 درجة مئوية،\nالتوافق مع الهواء الطلق: محدود،\nمقاومة الأشعة فوق البنفسجية: لا،\nنصائح العناية: تنظيف بالماء والصابون، عدم استخدام المنظفات الكاشطة أو المبيضات.",
                product_info_dimension:"أدخل  الأبعاد",
                product_presentation_title: "عرض المنتج",
                product_presentation_text: "نص عرض المنتج",
                product_presentation_best_seller: "الأكثر مبيعًا",
                product_presentation_free_shipping: "توصيل مجاني في جميع أنحاء المغرب",
                product_presentation_thickness_1_5mm: "سمك 1.5 مم: 215 درهم/م²، بالإضافة إلى تكاليف القص",
                product_presentation_thickness_2mm: "سمك 2 مم: 254 درهم/م²، بالإضافة إلى تكاليف القص",
                product_presentation_food_contact: "قابل للاتصال بالطعام",
                product_presentation_protection: "حماية ممتازة ضد الخدوش والرطوبة",
                product_presentation_transparent: "شفاف لكي ترى دائمًا سطح الطاولة",
                product_presentation_in_stock: "متوفر",
                product_presentation_delivery_date: "تاريخ التسليم: بين {{startDate}} و {{endDate}}",
                product_presentation_table_shape: "شكل طاولتك:",
                product_presentation_thickness: "سمك:",
                product_presentation_table_dimensions: "أبعاد طاولتك:",
                product_presentation_select_shape: "يرجى تحديد شكل الطاولة",
                product_presentation_enter_dimensions: "يرجى تحديد قياسات طاولتك لحساب السعر الإجمالي.",
                product_presentation_total_price: "السعر الإجمالي: {{prixTotal}} درهم",
                product_presentation_free_shipping_note: "التوصيل مجاني",
                product_presentation_add_another: "إضافة مفرش آخر",
                product_presentation_order_now: "اطلب الآن",
                product_presentation_your_info: "معلوماتك:",
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