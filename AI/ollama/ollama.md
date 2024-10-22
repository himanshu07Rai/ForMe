- run ollama in docker
- go in the container and get different models using `ollama pull {<model>}`
- run model using `ollama run {<model>}`


- can query ollama using api
```powershell
curl --location 'http://localhost:11434/api/generate' \
--header 'Content-Type: application/json' \
--data '{
    "model":"llama3.2",
    "prompt":"what is it'\''s capital"
}'
```

```powershell
curl --location 'http://localhost:11434/api/generate' \
--header 'Content-Type: application/json' \
--data '{
    "model":"llama3.2",
    "prompt":"what is it'\''s capital",
    "stream":false
}'
```

