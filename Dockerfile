FROM node:14.21
ENV NODE_ENV=production
ENV PORT=3000
WORKDIR /app
COPY . .
RUN npm install --silent
EXPOSE 3001:3001
CMD ["npm", "start"]
