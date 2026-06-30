#!/bin/bash

# Start Node.js application in background
node /app/app.js &

# Start Apache in foreground
exec apachectl -D FOREGROUND