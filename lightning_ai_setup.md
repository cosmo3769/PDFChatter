# Setup the project in Lightning_AI

## Git clone the project in Lightning_AI

`git clone https://github.com/cosmo3769/PDFChatter.git`

## Git clone chroma repo

`git clone https://github.com/chroma-core/chroma.git`

## Install NVM (Node Version Manager)

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

After this, reopen the terminal.

## Download and install node.js

`nvm install 20` 

## Verify the right Node.js version is in the environment

`node -v` should print `v20.12.1`

## Verify the right NPM version is in the environment

`npm -v` should print `10.5.0`

## Install yarn globally

`npm install -g yarn`

## Install docker

```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## Verify docker installation

`sudo docker run hello-world`

## Install Ollama

`sudo curl -fsSL https://ollama.com/install.sh | sh`

## Start Chroma Server

`cd chroma`

`docker compose up -d --build`

## Verify docker container running for chroma server

`docker ps`

## Move to project (PDFChatter) and install dependencies

`cd PDFChatter`

`yarn install`

## Run the project

`yarn dev`

This starts the project at `https://lightning.ai/cosmo3769/text-based/studios/pdfchatter/web-ui?port=3000`

The username and teamspace will be different according to the different user.

## Serve Ollama

`OLLAMA_ORIGINS=https://lightning.ai/cosmo3769/text-based/studios/pdfchatter/web-ui?port=3000 OLLAMA_HOST=127.0.0.1:11435 ollama serve`

The username and teamspace will be different according to the different user.

## Pull mistral model

`OLLAMA_HOST=127.0.0.1:11435 ollama pull mistral`

## Go to the running application

Move to the application at `https://lightning.ai/cosmo3769/text-based/studios/pdfchatter/web-ui?port=3000`

The username and teamspace will be different according to the different user.

## Upload the PDF and embed

Upload any pdf document and click on embed. NOTE: To test it really quickly, upload small pdf size (1 page or 10 page).

## Expected Behavior

It should embed the document and move on to the chat page in the application. It works successfully in my local machine. Also, it works with my hosted website at `https://pdf-chatter-beta.vercel.app` 

## Actual Behavior

Getting an error in studio: 

`Uncaught (in promise) Error: Chroma getOrCreateCollection error: Error: TypeError: Failed to fetch. `
