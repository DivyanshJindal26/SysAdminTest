# Retrieving all the data
- `git clone https://github.com/sntc-tech/TIP`

# Setting up docker stuff
- Created file "Dockerfile" to setup docker and a .dockerignore in TIP folder to prevent stuff to get uploaded to docker as it will be automtically installed.

# Hosting the app
- `docker build -t nextjs-app .` building the app
- `docker run -p 3000:3000 nextjs-app` running it on the 3000 port.
- The website is hosted at `https://localhost:3000`