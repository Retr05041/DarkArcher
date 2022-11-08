FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ ./

# We just want to run a build, so we have access to our static frontpage
CMD ["npm", "run", "build"]