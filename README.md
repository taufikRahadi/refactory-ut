# Kubernetes
membuat sebuah aplikasi kubernates yang bisa di akses melalui

- nodeport
- loadbalancer
- ingress

buat sebuah langkah-langkah pembuatan, step-by step dokumentasi config-nya hingga bisa di lihat dan di akses dalam format makrdown

### NodePort
mengekspos service pada setiap ip node dan port yang sama. kita dapat mengakses service dengan tipe ini dari luar cluster melalui [NodeIP]:[NodePort]
```bash
# create pod dan service nya dulu
kubectl create -f nodeport-service.yaml

# cek berhasil atau engga
kubectl get all

# buka di browser dengan jalankan command ini
minikube service cv-service
```

### LoadBalancer
mengekpos service secara eksternal menggunakan LoadBalancer yang di sediakan oleh penyedia cloud service.
```bash
# create pod dan service nya dulu
kubectl create -f loadbalancer-service.yaml

# cek berhasil atau engga
kubectl get all

# buka di browser dengan jalankan command ini
minikube service cv-loadbalancer
```

### Ingress
mengekspos service dengan domain, jadi client yg akses ga perlu tau ip dan port nya.
```bash
# cek dulu addons ingress nya udah enable atau belum
minikube addons list

# kalo belum di enable dulu
minikube addons enable ingress

# cek dulu udah enable atau belum
kubectl get pod --namespace kube-system
# pastiin 3 pod dengan awalan nama
# ingress-nginx udah ada dan  
# pod ingress-nginx-controller udah running

# jalanin file yaml nya
kubectl create -f ingress-service.yaml

# cek udah running atau belum
kubectl get all
# ingress nya kan ga muncul disini

# cek ingress nya
kubectl get ingresses

# dapetin ip address node / minikube nya
minikube ip

# ubah host dari ip address minikube tadi
# dengan menambahkan baris di file /etc/hosts
# kalo mau pake vscode atau yg lain juga bisa kok
# buka file nya di vscode atau terserah dimana aja
code /etc/hosts

# terus tambahin line berikut
[ip-address-minikube-tadi]  docker-cv.test

# buka di browser
http://docker-cv.test
```