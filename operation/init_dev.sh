sudo mkdir /opt/jenkins-data
sudo chown -R 1000:1000 /opt/jenkins-data
kubectl apply -f environment/kubernetes/dev/jenkins-pv-volume.yaml
kubectl apply -f environment/kubernetes/dev/jenkins-pv-claim.yaml
kubectl apply -f environment/kubernetes/dev/jenkins-deployment.yaml
kubectl apply -f environment/kubernetes/dev/jenkins-service.yaml
# until [ -n "$(kubectl get svc jenkins -o jsonpath={
kubectl port-forward service/jenkins 8080:8080
