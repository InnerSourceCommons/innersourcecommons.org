#!/usr/bin/env bash

# Hugo Wrapper Script for Codespaces
# This script wraps the hugo command to automatically set the correct baseURL in Codespaces

# Path to the real hugo binary
HUGO_BIN="/usr/local/bin/hugo-real"

# Check if we're running 'hugo server' command
if [[ "$1" == "server" ]]; then
    # Check if we're in GitHub Codespaces
    if [ -n "$CODESPACE_NAME" ]; then
        # Construct the Codespaces URL
        BASE_URL="https://${CODESPACE_NAME}-1313.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}"
        
        # Check if --baseURL is already provided in arguments
        has_baseurl=false
        for arg in "$@"; do
            if [[ "$arg" == --baseURL=* ]] || [[ "$arg" == "--baseURL" ]]; then
                has_baseurl=true
                break
            fi
        done
        
        # If no baseURL is provided, add our Codespaces URL
        if [ "$has_baseurl" = false ]; then
            echo "🚀 Running Hugo in Codespaces mode"
            echo "📍 Base URL: $BASE_URL"
            
            # Check if --bind is already provided
            has_bind=false
            for arg in "$@"; do
                if [[ "$arg" == --bind=* ]] || [[ "$arg" == "--bind" ]]; then
                    has_bind=true
                    break
                fi
            done
            
            # Build the command with automatic Codespaces configuration
            if [ "$has_bind" = false ]; then
                exec "$HUGO_BIN" "$@" --baseURL="$BASE_URL" --bind=0.0.0.0 --appendPort=false --liveReloadPort=443
            else
                exec "$HUGO_BIN" "$@" --baseURL="$BASE_URL" --appendPort=false --liveReloadPort=443
            fi
        fi
    fi
fi

# If not 'hugo server' in Codespaces, or baseURL was already provided, just run hugo normally
exec "$HUGO_BIN" "$@"
