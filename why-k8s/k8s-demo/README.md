# Kubernetes Demo App
Simple web app to show scaling, self-healing, and blue/green deployments.

## Local
npm install && npm start

## Docker
docker build -t yourrepo/k8s-demo:v1 .

## Kubernetes
kubectl apply -f k8s/service.yaml -f k8s/deploy-v1.yaml
