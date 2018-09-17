# *DOCKER*


**Docker is a containerization platform that packages your application and all its dependencies together in the form of a docker container to ensure that your application works seamlessly in any environment.**

## **DOCKER INSTALLATION:**

- sudo apt-get -y remove docker docker-engine 
- sudo apt-get install -y linux-image-extra-$(uname -r) linux-image-extra-virtual
## **SETUP DOCKER REPOSITORY:**
- Update the repositiry cache.
sudo apt-get update
- Install the packages
sudo apt-get install -y apt-transport-https software-properties-common ca-certificates curl  
- Add GPG key for the  repository on your  system
wget https://download.docker.com/linux/ubuntu/gpg – 
sudo apt-key add gpg     
- Now add the official docker repository.                                       echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" | sudo  tee /etc/apt/sources.list.d/docker.list 
- Update the apt database
 sudo apt-get update 
- Make sure you are installing the docker from the official repository, not from the default Ubuntu 16.04 / 14.04 repo.
 sudo apt-cache policy docker-ce 

## **INSTALL DOCKER ON UBUNTU:**
- sudo apt-get -y install docker-ce

- Now you have Docker installed on your machine, start the Docker service in case if it is not started automatically after the installation.

- sudo systemctl start docker.service 
- sudo systemctl enable docker.service

- Run a sample.
sudo docker run hello-world 
## **DOCKER COMMANDS:**

1) docker help 
 
2) docker command –help

3) sudo docker version  (needs sudo because we dont have the root access)

4)  sudo docker info

5) sudo docker images 

6) sudo docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

7) sudo docker start <container name>

8) sudo docker commit <container name>

9) sudo docker stop 

10. sudo docker rm

11. sudo docker rmi


## **NOTE:**
by default docker requires root privilege to run docker commands  like using sudo  before every commands.

To give root access to non-root users to run docker:
1.  sudo groupadd docker
2.  sudo  useradd  $USER
3. sudo  usermod -aG   docker $USER


Now we are able to run docker command without prefix sudo.
