#!/bin/sh
# Reconstruit le site à partir des sources et le place à la racine du dépôt (index.html).
# ESBUILD = chemin vers esbuild/lib/main.js (ou "esbuild" si installé avec npm i esbuild)
set -e
cd "$(dirname "$0")/.."
node tools/build.mjs site --min
cp dist/site.html ../index.html
echo "index.html mis à jour (à tester puis commit/push)"
