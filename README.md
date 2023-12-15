# ConsuRural

### Construindo imagem Docker

```bash
docker build -t consurural .
```

### Executando o projeto Docker

```bash
docker run -p 5173:5173 consurural
```

### Verificar o IP do Container

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <CONTAINER_ID>
```
