#!/bin/bash

set -e

# Recibir input como variable de entorno: INPUT_MESSAGE
MESSAGE="$INPUT_MESSAGE"

echo "Mensaje recibido: $MESSAGE"

# Convertir a mayúsculas
upper=$(echo "$MESSAGE" | tr '[:lower:]' '[:upper:]')

# Exportar output
echo "uppercase_message=$upper" >> $GITHUB_OUTPUT
