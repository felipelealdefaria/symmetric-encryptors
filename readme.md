# USAGE

## INITIALIZE:
```shell
make init
```

## FOR ENCRYPT TEXT w/ CAESAR CIPHER FUNCTION:
```shell
cesar -c -k 21 texto-aberto.txt texto-cifrado.txt  
```

## FOR DECRYPT TEXT w/ CAESAR CIPHER FUNCTION:
```shell
cesar -d -k 21 texto-cifrado.txt texto-aberto.txt
```

## FOR DECRYPT KEY w/ FREQUENCY ANALYSIS FUNCTION:
```shell
decifra texto-cifrado.txt texto-aberto.txt
```

## FOR ENCRYPT w/ VERNAM CIPHER FUNCTION:
```shell
vernam -c chave.dat texto-aberto.txt texto-cifrado.txt
```

## FOR DECRYPT w/ VERNAM CIPHER FUNCTION:
```shell
vernam -d chave.dat texto-cifrado.txt texto-aberto.txt
```

## FOR CLEAN:
```
make clean
```