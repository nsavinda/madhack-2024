FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

# Set pnpm 

ENV PNPM_HOME="./pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Set workdir
WORKDIR /app

COPY package.json pnpm-lock.yaml /app/

# Install dependencies
RUN pnpm install --frozen-lockfile




RUN pnpm config set store-dir /app/pnpm





