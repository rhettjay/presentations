K=kubectl -n devspark-demo
apply:; $(K) apply -f k8s/deploy-v1.yaml -f k8s/service.yaml
scale:; $(K) scale deploy demo-v1 --replicas=5
cutover:; $(K) apply -f k8s/deploy-v2.yaml; $(K) label deploy demo-v1 track=inactive --overwrite; $(K) label deploy demo-v2 track=active --overwrite
nuke:; $(K) delete deploy demo-v1 demo-v2 svc demo-svc --ignore-not-found
