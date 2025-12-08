#!/usr/bin/env bash

# Hugo Server Starter for Codespaces and Local Development
# This script automatically detects the environment and starts Hugo with the correct configuration

if [ -n "$CODESPACE_NAME" ]; then
    # Running in GitHub Codespaces
    BASE_URL="https://${CODESPACE_NAME}-1313.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}"
    echo "🚀 Starting Hugo in Codespaces mode"
    echo "📍 Base URL: $BASE_URL"
else
    # Running locally
    BASE_URL="http://localhost:1313"
    echo "🚀 Starting Hugo in local mode"
    echo "📍 Base URL: $BASE_URL"
fi

# Start Hugo server with the appropriate configuration
exec hugo server \
    --bind=0.0.0.0 \
    --baseURL="$BASE_URL" \
    --appendPort=false \
    --liveReloadPort=443 \
    -D
