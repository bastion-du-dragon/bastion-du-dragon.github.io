# Bastion du Dragon – code source

**Ce dossier est la source de référence du jeu.** À sauvegarder à chaque mise à jour.

## Contenu
- `site/` : version du site bêta (avec comptes, sauvegarde en ligne, réseau).
  - `game.js` : tout le code du jeu (formaté, mais les noms de variables sont ceux du build minifié : `vr` = genWaves, `ma` = waveThreat, `gr` = startGold...).
  - `style.css` : les styles. `template.html` : la page, avec `/*@@CSS@@*/` et `/*@@JS@@*/` remplacés au build.
- `artifact/` : version du jeu principal (claude.ai), même structure. Elle diffère du site par le code DEV retiré (réseau, comptes, sauvegarde en ligne), donc **une modification d'équilibrage doit être faite dans les deux `game.js`**.
- `tools/build.mjs` : réassemble `template.html + style.css + game.js` en `dist/<site|artifact>.html` (option `--min` pour minifier avec esbuild).
- `tools/deploy.sh` : construit le site et met à jour `../index.html`.
- `archive/` : anciennes versions lisibles (utiles pour retrouver les vrais noms de fonctions) et `supabase-setup.sql`.

## État
Reconstruit le 2026-11-03 à partir des versions publiées (site : commit 85e79ff, jeu principal : version 224), après la perte du fichier source d'origine. Vérifié : le build reconstruit charge sans erreur et donne les mêmes valeurs d'équilibrage (ex. Grottes 9 Normal vague 1 = 24 834).

## Règles pour ne plus rien perdre
1. Toute modification du jeu est d'abord faite ici (`game.js`), puis construite, puis publiée.
2. Après chaque publication : commit + push de ce dossier.
3. Chaque semaine : une archive `.zip` de ce dossier est envoyée à Pierre, à garder de son côté (cloud, PC).
4. Scripts SQL Supabase : setup et matchmaking sont dans archive/. Invites et saves sont perdus : à rajouter ici dès qu'ils sont retrouvés.
