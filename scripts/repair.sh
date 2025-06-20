#!/bin/bash
echo "Überprüfe Octra-Projektstruktur..."
[ ! -f bot/index.js ] && echo "Bot-Index fehlt, erstelle neu..." && touch bot/index.js
[ ! -d web/public ] && echo "Web-Public fehlt, erstelle neu..." && mkdir -p web/public
echo "Reparatur abgeschlossen!"