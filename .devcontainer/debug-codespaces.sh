#!/usr/bin/env bash

# Debug script to check Codespaces environment
echo "=== Codespaces Environment Debug ==="
echo "CODESPACE_NAME: ${CODESPACE_NAME:-NOT SET}"
echo "GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: ${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN:-NOT SET}"
echo ""

if [ -n "$CODESPACE_NAME" ]; then
    if [ -n "$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN" ]; then
        CONSTRUCTED_URL="https://${CODESPACE_NAME}-1313.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}"
    else
        CONSTRUCTED_URL="https://${CODESPACE_NAME}-1313.app.github.dev"
    fi
    echo "Constructed Codespaces URL: $CONSTRUCTED_URL"
else
    echo "Not running in Codespaces (CODESPACE_NAME not set)"
fi

echo ""
echo "=== Hugo Binary Location ==="
which hugo
ls -la $(which hugo) 2>/dev/null || echo "Hugo not found"

echo ""
echo "=== Hugo Version ==="
hugo version 2>/dev/null || echo "Hugo command failed"

if [ -f "/usr/local/bin/hugo-real" ]; then
    echo ""
    echo "=== Hugo-real found ==="
    ls -la /usr/local/bin/hugo-real
    /usr/local/bin/hugo-real version
fi
