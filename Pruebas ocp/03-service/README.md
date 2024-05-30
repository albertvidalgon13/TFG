Pasos para desplegar un servicio:

1. aplicar el archivo yaml

``` sh
oc apply -f 03-np-service.yaml
```
2. comprobar si el servicio se ha desplegado y en que puerto (el puerto se especifica dentro del archo yaml)

``` sh
oc get service -o wide
```
3. comprobar si funciona haciendo curl a la direccion

``` sh
curl http://http-test-svc.apps.lab.ocp.lan:30000
```

Resultado esperado: It works!
