PHASE 11 — CORRECTIFS RESPONSIVE MOBILE

Objectif : corriger les débordements et incohérences de mise en page sur petits écrans, en particulier sur la page Réalisations et les six fiches individuelles.

Modifications :
- Ajout de assets/css/responsive-overrides.css chargé après les feuilles de style des pages HTML.
- Largeurs de conteneurs adaptées aux écrans de 480 px et moins.
- Grilles de réalisations et de domaines ramenées à une colonne sur mobile.
- Cartes, images et galeries redimensionnées sans débordement horizontal.
- Titres et textes longs autorisés à revenir à la ligne.
- Fiches de réalisation adaptées : bloc d'informations, métadonnées, galerie et boutons.
- Menu mobile et en-tête ajustés sur les petits écrans.
- Règles spécifiques pour les écrans de 350 px et moins.

Contrôles statiques :
- Feuille CSS présente et liée dans toutes les pages HTML.
- Balises viewport contrôlées.
- Accolades CSS équilibrées.
- Chemins relatifs de la nouvelle feuille vérifiés.

À vérifier sur appareils réels : rendu visuel exact selon le navigateur, dimensions et cache du téléphone. Les captures automatisées Chromium n'ont pas abouti dans l'environnement de génération ; aucun test visuel automatisé n'est revendiqué.
