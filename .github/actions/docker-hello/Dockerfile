FROM ubuntu:22.04

# Instalar herramientas necesarias
RUN apt-get update && apt-get install -y \
    bash \
    coreutils \
    && rm -rf /var/lib/apt/lists/*

# Copiar entrypoint al contenedor
COPY entrypoint.sh /entrypoint.sh

# Hacerlo ejecutable
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
