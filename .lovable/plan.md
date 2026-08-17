# SEO local + compléments de la page Ventouses & Gua Sha

La page existante couvre déjà : en-tête, avertissement bien-être, les 3 techniques, formules 60/90 € et forfaits 165/245 €, déroulé en 4 étapes, FAQ, contre-indications, bloc réservation, avis (vide), accès, pied de page, barre fixe mobile. Le travail porte donc sur l'optimisation SEO locale et quelques manques repérés.

## 1. Métadonnées enrichies

- Titre et description affinés autour de la requête locale (« ventouses sèches et Gua Sha à Ivry-sur-Seine (94200) »), en vocabulaire bien-être uniquement.
- Ajout de : `keywords` locales, `geo.region` / `geo.placename` / `geo.position` / `ICBM`, `robots`, `canonical`, `og:image` + `twitter:image` pointant sur l'image d'en-tête, `og:site_name`, `og:url`.

## 2. Données structurées schema.org

Remplacement du bloc JSON-LD actuel par un graphe plus complet, orienté bien-être et non médical :

- `HealthAndBeautyBusiness` (type non médical) : nom, description, adresse complète, `geo`, `openingHoursSpecification`, `telephone`, `email`, `image`, `url`, `priceRange`, `paymentAccepted`, `areaServed` (communes voisines), `knowsAbout` (ventouses sèches, Gua Sha, pistolet de massage).
- `OfferCatalog` avec les 4 offres exactes : Ciblée 60 €, Complète 90 €, forfait 3 Ciblées 165 €, forfait 3 Complètes 245 €.
- `FAQPage` reprenant mot pour mot les 7 questions/réponses déjà affichées.
- `BreadcrumbList` simple.

Les champs non encore connus (téléphone, e-mail, adresse précise, coordonnées GPS, SIRET) sont centralisés dans une constante `businessInfo` en haut du fichier, avec valeurs à compléter, pour éviter d'inventer des données.

## 3. Nouvelle section « À proximité »

Insérée entre « Venir » et le pied de page :

- Court paragraphe de contexte local (quartier d'Ivry, accès métro ligne 7 / RER C, depuis Paris 13e).
- Liste des communes et quartiers desservis : Ivry-sur-Seine, Vitry-sur-Seine, Charenton-le-Pont, Alfortville, Maisons-Alfort, Paris 13e, Paris 12e, Kremlin-Bicêtre, Villejuif.
- Ton descriptif, sans promesse de résultat ni vocabulaire de soin.

## 4. Compléments repérés

- Réservation : deux boutons distincts « Réserver la Ciblée » et « Réserver la Complète », chacun prêt à recevoir un identifiant Cal.com (constante en haut de fichier). Tant que l'identifiant est vide, état « en attente de configuration » propre : message court + lien mailto de contact.
- Pied de page : ajout de la ligne assurance RC professionnelle (nom + n° de contrat, à compléter), aujourd'hui absente.
- Thème sombre : la page suit actuellement une classe `.dark` mais rien ne l'active. Ajout du basculement automatique sur `prefers-color-scheme`, palette conservée (sauge sur lin clair / sauge clair sur anthracite doux).

## Garde-fous respectés

Aucun mot interdit (thérapie, soin médical, traiter, guérir, soulager, drainage lymphatique, diagnostic) ne sera introduit, y compris dans les métadonnées et le JSON-LD. Aucun avis client ne sera inventé ; l'emplacement reste vide avec un commentaire d'avertissement dans le code. Les prix et les contre-indications restent inchangés.

## Détails techniques

Tout se joue dans `src/routes/index.tsx` (`head()`, JSON-LD, nouvelles sections) et `src/styles.css` (dark auto). Aucune dépendance externe ajoutée.
