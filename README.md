# Chat with your Docs

A locally running PDF chatter where users can upload their documentation in pdf format and chat about it. It's a Next.js app that read the content of an uploaded PDF, chunks it, adds it to a vector store, and performs RAG, all client side. You can even turn off your WiFi after the site loads. Suppose if you have a book and you want to read it but you don’t have the time right now. What you can do is you can upload the book and then start a conversation with the chatbot. You can ask the summary of the book and when you get the answer, you can derive a question from the summary and ask the chatbot again. The chatbot remembers your chat history as well so you can go back and forth with the chatbot having a nice factual conversation getting to know the contents of the book without even fully reading it.

## Tech Stack used

- [Chroma](https://github.com/chroma-core/chroma/) as the vector store.
- [Ollama](https://ollama.ai/) to run an LLM locally and expose it to the web app.
- [LangChain.js](https://js.langchain.com) to call the models, perform retrieval, and generally orchestrate all the pieces.
- [Transformers.js](https://huggingface.co/docs/transformers.js/index) to run embeddings in the browser.
- [Docker](https://www.docker.com/products/docker-desktop/) to run chroma server.
- [Next.js](https://nextjs.org) for frontend.
- [TailwindCSS](https://tailwindcss.com) for design.
- [Vercel](https://vercel.com/) for hosting.

## Setup

### Clone/Fork

- Clone this repo by running `git clone https://github.com/cosmo3769/PDFChatter`
- Move to the root directory by running `cd PDFChatter`
- Install all dependencies by running `yarn install` 

### Install Ollama

Users will need to download and set up [Ollama](https://ollama.ai), then run the following commands to
allow the site access to a locally running Mistral instance:

```bash
$ OLLAMA_ORIGINS=https://pdf-chatter-beta.vercel.app/ OLLAMA_HOST=127.0.0.1:11435 ollama serve
```
Then, in another terminal window:

```bash
$ OLLAMA_HOST=127.0.0.1:11435 ollama pull mistral
```

### Install Docker

Download and set up [Docker](https://www.docker.com/products/docker-desktop/) to run chroma server.

### Setup Chroma

- Clone the repo [Chroma]() by running `git clone https://github.com/chroma-core/chroma`.
- Move to the directory by running `cd chroma`
- Before running the server, go to `docker-compose.yml` file and add this line under `environment` to resolve CORS issue during development in local `- CHROMA_SERVER_CORS_ALLOW_ORIGINS=["https://localhost:3000"]`
- Run docker command: `docker-compose up -d --build`

### Live version

Go to [PDFChatter](https://pdf-chatter-beta.vercel.app/) deployed at vercel.

**Note - After deploying to vercel, you need to make one change to chroma to resolve CORS issue. Replace `- CHROMA_SERVER_CORS_ALLOW_ORIGINS=["https://localhost:3000"]` with `- CHROMA_SERVER_CORS_ALLOW_ORIGINS=["https://data-bot-sooty.vercel.app"]`. Don't forget to rerun the server by running `docker-compose up -d --build`**

### Upload PDF and Embed

Upload PDF document either by clicking or drag and drop.

<img width="1372" alt="Screenshot 2024-01-26 at 6 15 05 AM" src="https://github.com/cosmo3769/PDFChatter/assets/53268607/9fd61bbf-9546-448e-95e6-5941403ffbd9">

Click on embed.

<img width="1372" alt="Screenshot 2024-01-26 at 6 28 41 AM" src="https://github.com/cosmo3769/PDFChatter/assets/53268607/81a67416-798a-45b2-bcfb-66be0c0795df">

### Chat with your Doc

Ask your questions and have a conversation.

<img width="1375" alt="Screenshot 2024-01-26 at 6 46 16 AM" src="https://github.com/cosmo3769/PDFChatter/assets/53268607/b266230d-6482-4bb1-8e1a-dd76554c8a36">

## Future Scope
 
- [ ] Web scraper
- [ ] Persist data
- [ ] New chat
- [ ] Pop up button for 3rd party application
- [ ] New browser api for non-technical web end-users where a web app can request access to a locally running LLM, e.g. via a popup.

## Reference

* [Jacob Lee's local pdf chatbot](https://github.com/jacoblee93/fully-local-pdf-chatbot/tree/main)
