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

- docker tag d70922b6c9ed maxcl10/football-web-site:test

### Push the image in the reporsitory

- docker push maxcl10/football-web-site:test

### Deploy to azure
