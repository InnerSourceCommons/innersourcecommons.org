#!/usr/bin/env bash

# Determine the base URL for Hugo server
# In Codespaces, use the Codespaces URL; otherwise, use localhost

if [ -n "$CODESPACE_NAME" ]; then
    # Running in GitHub Codespaces
    # Construct the Codespaces URL using the CODESPACE_NAME and port forwarding domain
    if [ -n "$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN" ]; then
        BASE_URL="https://${CODESPACE_NAME}-1313.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}"
    else
        # Fallback: construct using the standard pattern
        BASE_URL="https://${CODESPACE_NAME}-1313.app.github.dev"
    fi
    echo "🚀 Starting Hugo in Codespaces mode"
    echo "📍 Base URL: $BASE_URL"
    echo "📍 CODESPACE_NAME: $CODESPACE_NAME"
    echo "📍 GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: ${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN:-not set, using default}"
else
    # Running locally
    BASE_URL="http://localhost:1313"
    echo "🚀 Starting Hugo in local mode"
    echo "📍 Base URL: $BASE_URL"
fi

# Start Hugo server with the appropriate configuration
# Use the actual hugo binary path to ensure we're not calling a wrapper
HUGO_CMD="hugo"

# Check if hugo-real exists (wrapper might be installed)
if [ -x "/usr/local/bin/hugo-real" ]; then
    HUGO_CMD="/usr/local/bin/hugo-real"
    echo "📍 Using hugo-real binary"
elif command -v hugo &> /dev/null; then
    HUGO_CMD="hugo"
    echo "📍 Using standard hugo binary"
fi

exec $HUGO_CMD server \
    --bind=0.0.0.0 \
    --baseURL="$BASE_URL" \
    --appendPort=false \
    --liveReloadPort=443 \
    -D
