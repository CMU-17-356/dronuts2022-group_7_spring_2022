FROM gcr.io/google-appengine/nodejs

RUN mkdir -p /app

RUN npm install -g typescript

# Change working directory
WORKDIR /app

# Install App Dependencies

RUN npm install

# Copy App Source
COPY ./ ./
#TODO Run any build scripts here

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
