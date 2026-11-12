# Experts12 — Rapport de contrôle qualité (Phase 8)

## Périmètre
Contrôle de la version complète issue de la phase 7 : accueil, présentation de l’entreprise, services, sept pages de pôles d’expertise, projets, produits et contact.

## Contrôles effectués
- 13 pages HTML détectées et analysées.
- Titres HTML présents sur les 13 pages.
- Aucun identifiant HTML dupliqué détecté.
- Aucun lien local vers un fichier inexistant détecté dans les attributs `href`, `src` des liens, scripts, images et feuilles de style.
- Aucun lien d’ancrage local cassé détecté.
- Tous les fichiers JavaScript du dossier `assets/js` passent le contrôle syntaxique `node --check`.
- Les feuilles CSS comportent des règles de media queries pour les différentes mises en page responsive.
- Le formulaire de contact est présent sur la page Contact.

## Points à valider avant publication
- Effectuer un dernier test visuel sur téléphone, tablette et ordinateur (tailles d’écran et navigateurs réellement utilisés par les visiteurs).
- Tester manuellement le formulaire Contact et vérifier les coordonnées, l’adresse email et le numéro WhatsApp officiels.
- Confirmer auprès de l’entreprise les textes, chiffres clés, projets, produits et visuels publiés.
- Vérifier le rendu réel après déploiement sur GitHub Pages.

## Limite du contrôle
Les vérifications automatisées ci-dessus portent sur les fichiers et leur cohérence technique. Elles ne remplacent pas un test visuel dans un navigateur ni la validation des informations par Experts12.
