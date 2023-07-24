# kub-dev-node

- Projeto para testes no GKE do GCP (Google Cloud Plataform)
- Foi criado um backend usando Node.js (Express) com apenas dois endpoints para testes. A imagem da aplicação backend (mhramos/kub-dev-node) está no DockerHub na conta ```mhramos```
- Na pasta ```k8s``` do projeto atual se encontram os manifestos de deployment e service (LoadBalancer)

- OBS: utilizei minha conta pessoal do Google para testes, criei um cluster standard (us-central1-c), com 3 nós, por que nada é de graça ;)

# requisitos

- Docker (caso queira criar imagem de uma aplicação)
- Kubernetes (para orquestrar, configurar e criar os containers e o load balancer)
- Kind Kubernetes (para testes locais antes de ir à produção)
- Node.js (no caso dessa aplicação, poderia outra tecnologia)
- Conta Google e Cluster no GKE do GCP (se é a primeira configuração, não esquecer de configurar as cotas (quotas) para não dar problemas de recursos)
- Google Cloud CLI (gcloud)