Pasos para desplegar la aplicación

1. añadir todos los archivos de la app en un directorio dentro de la máquina bastión

2. crear un configmap con todos los archivos

```sh
oc create configmap apache-html --from-file=index.html  --from-file=index.css --from-file=index.js --from-file=hero.jpg --from-file=profile-img-def.jpg -o yaml > ../myapp-configmap.yaml
```
3. aplicar el archivo yaml

```sh
oc apply -f 04-myapp.yaml
```
4. consultar que se ha desplegado de forma correcta

```sh
oc get service -o wide
```

5. acceder a la web a traves de la url http://myapp.appps.lab.ocp.lan:3000
