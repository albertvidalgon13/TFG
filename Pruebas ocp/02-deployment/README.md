Pasos para desplegar el deployment

1. aplicar el archivo yaml

``` sh
oc apply-f 02-deployment.yaml
```
2. Comprobar los pods que se han creado (deberian ser 2) y el deployment

``` sh
oc get all -o wide
```
3. Eliminar un pod de los dos que se han creado

``` sh
oc delete pod <nombre_pod>
```

4. Comprobar que aun hau un pod activo y se esta creando uno nuevo

``` sh
oc get pods -o wide
```
