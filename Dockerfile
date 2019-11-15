FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app/

# Install app dependencies
COPY package*.json /usr/src/app/

# Bundle app source
COPY . /usr/src/app/

EXPOSE 3000

RUN npm install -g nodemon
RUN npm install -g sucrase

RUN npm install
CMD [ "yarn", "dev" ]