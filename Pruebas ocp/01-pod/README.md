Pasos para desplegar el pod:

1. aplicar el archivo yaml en el sistema
   
     $ oc apply -f 01-pod-yaml
   
3. comprobar que se ha desplegado
   
     $ oc get pods -o wide
   
5. ya se puede usar el pod, para entrar y usar su consola se debe ejecutar:
   
     $ oc exec -it ubuntu -- bash
