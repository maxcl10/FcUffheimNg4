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

Change the id with the correct image id

- docker tag 4f8cc01d8bcd maxcl10/football-web-site:test

### Push the image in the reporsitory

- docker push maxcl10/football-web-site:test

### Deploy to azure

### Todos

- Add Pictures for organizational chart
- move service to shared?
- move app env to normal env.
- add cup assist in DB and UI
- fix FB integration => check if sharing os working
- Improve games method performance
- improve page header in xs
- move guard in core or shared?
- improve toogle dashboard button
- get ride of moment locale in vendor
- set back footer
- use following code to set the title
  ngOnInit() {
  if (document.getElementById('pagetitle')) {
  document.getElementById('pagetitle').innerHTML = '<h2>Addresses & Contacts</h2>';
  }

### Done

- make direct link work
- Use caching services to avoid serive calls
- Improve admin navigation
- use route guard for securing the admin part
- Get Next Game must return the next game if today

# Tiny MCE

maxime.matter@hotmail.fr
Key x6kya91fxd4udiq2afldv6hr7u1oseggp245bsyzbtpysjey

### Pricing

docker container
service app
DB => free
