#!/bin/bash
echo "Don't run this!!!!"
exit
npm run build
scp -r app/* aswwu.com:/var/www/html/ask-anything/app/
scp dist/app.bundle.js aswwu.com:/var/www/html/ask-anything/dist/
