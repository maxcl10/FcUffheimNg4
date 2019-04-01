# Football Web Site

This is a web site developped for local football clubs.

## Multi tenant

Currently this website is provided for two different clubs. In order to build it for the correct club, you need to set the correct configuration
ng build --configuration=fcb --buildOptimizer=true
ng build --configuration=fcu

git push origin master

## Docker deployment

In order to deploy the web site, I'm using docker. The following steps has to be done.

### Create the image:

docker build --rm -f "Dockerfile" -t test .
--file , -f Name of the Dockerfile (Default is ‘PATH/Dockerfile’)
--rm true Remove intermediate containers after a successful build

### Test the image

- Run the image on 8080
  docker run --rm -it -p 8080:80/tcp test:latest

### Tag the image

Change the id with the correct image ifd

- docker tag c11381224b65 maxcl10/football-web-site:test

### Push the image in the reporsitory

- docker push maxcl10/football-web-site:test

### Deploy to azure

### Todos

- Get Next Game must return the next game if today
- Improve admin navigation
- Add Pictures for organizational chart
- move service to shared?
- add cup assist in DB and UI
- fix FB integration => check if sharing os working
- use route guard for securing the admin part
- get ride of moment locale in vendor
- set back footer

### Done

- make direct link work

# Tiny MCE

maxime.matter@hotmail.fr
Key x6kya91fxd4udiq2afldv6hr7u1oseggp245bsyzbtpysjey

### Pricing

docker container
service app
DB => free
