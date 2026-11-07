+++
title = "Shell Scripting – Versão Portuguesa"
date = 2019-07-26T08:15:36Z
lastmod = 2019-07-26T08:15:36Z
author = "Kayte Studio"
categories = ["Unix / Linux"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2019/07/26/shell-scripting-versao-portuguesa/"
+++

Bem-vindos ao meu tutorial de shell scripting em linux/unix. O shell scripting é uma forma de executar comandos ou acções através de formas de repetição e de ciclos.

Para esse modo, irei abordar alguns comandos mas, não todos, porque isto é um mundo.

Os scripts irão ser testados no Sabayon 4.2 e no BSD, mach Kernel, isto é, Mac OS X. Podem testá-los nas outras versões de posix, para que se saiba que são executáveis.

Assim, irei apresentar o tutorial. Obrigado.

Para sabermos, como é que funcionam os comando linux/unix podemos escrever este comando:

``` bash
man nome_do_comando;
```

Exemplo: man ls.

O man ls irá listar todos os argumentos possíveis do ls. O que é o ls? O ls é o comando para listar as directorias.

Ls: Este comando serve para listar as directorias.

Exemplo: ls /home/user

Assim, o comando lista tudo mas, não mostra os escondidos nem as permissões. Só mostra o que é visível.

Ls -lisa:

Exemplo: ls -lisa /home/user

Desta forma, o ls lista todos os ficheiros daquela directoria com os escondidos e com as devidas permissões.

Mkdir: O comando makedir cria uma pasta ou directoria no local pretendido.

Exemplo: mkdir /home/user/scripts

Com este comando, o utilizador cria na directoria user uma pasta que se chama scripts.

Rmdir: O comando rmdir remove ou apaga como quiserem chamar a pasta pretendida.

Exemplo: rmdir /home/user/scripts

Assim, o utilizador remove a directoria scripts, como anteriormente referido.

Cd: o cd faz com que seja mudado a directoria.

Exemplo: cd /home/user/scripts

Assim, o utilizador está a deslocar-se para a pasta scripts.

Cd ..:

Exemplo: cd ..

Assim, desce um nível da directoria actual.

Who: faz com que sejam apresentados os utilizadores.

Exemplo: who

vi: isto é um comando que se direcciona para um editor de texto que trabalha na consola directamente.

Exemplo: vi nome_do_ficheiro.extensão ou sem extensão.

Chmod: este comando modifica os modos de utilização dos ficheiros.

Exemplos: chmod +x nome_do_ficheiro.

               Assim, está a tornar o ficheiro como executável.

              Chmod 777 nome_do_ficheiro

             com o número 777 está a dar permisssões ao owner, others e groups. É mau porque, assim todos têm permissões de acesso ao ficheiro.

Os scripts quando são criados temos que pôr logo, na primeira linha este comentário:

\#!/bin/sh

Com este comentário, o interpretador de shell irá interpretá-lo como um script dessa mesma shell.

O comentário faz-se desta forma: \#

``` text
variável é da seguinte maneira: variável=”valor”
```

a escrita para o monitor é: echo ”mensagem que queremos apresentar”

ler do teclado: read variável

Há mais tipos de comandos, mas irei abordá-los através dos scripts.

Agora começarei a explicar o funcionamento dos scripts em shell.

Primeiro escrevemos, pode ser no editor de texto do gnome, o  seguinte comentário:

\#!/bin/sh

Dentro do script podemos fazer administração e automatização dos scripts e funcionalidades pretendidas.

Os ficheiros podem ser escritos, sem extensão ou com extensão. Com extensão podem ser bin,sh.

Exemplo de um script simples:

\#!/bin/sh

``` bash
echo “ola mundo”
```

Gravamos com a extensão .sh ou sem extensão e com  o nome hello. Porque iremos fazer o seguinte comando e para todos eles:

``` bash
chmod +x  hello.sh ou chmod +x hello
```

Agora, iremos executá-lo da seguinte maneira:

``` bash
./hello.sh ou ./hello
```

E a mensagem que é apresentada é ola mundo.

Outra forma de o fazer é criar uma variável com o valor “ola mundo” e depois fazer um echo da variável.

Exemplo:

\#!/bin/sh

\#variavel

``` bash
ola=”ola mundo”
echo $ola
```

O cifrão é para indicar que é uma variável.

E assim, temos outra forma de o fazer com variáveis.

Vamos falar de formas de selecção. Existe o if e o case.

O if é uma forma de selecção para escolher várias opções. E o case também é uma forma de selecção mas com várias opções e com uma opção default, digamos assim.

Exemplo de uma estrutura if:

\#!/bin/sh

``` bash
if test -e $1;
then
echo “o ficheiro existe”
else
echo “o ficheiro não existe”
```

fi

Salvar o ficheiro com o nome ficheiro_existe. Fazer o chmod +x ficheiro_existe. Executá-lo da seguinte maneira: ./ficheiro_existe /home/user/nome_do_ficheiro

Isto é um exemplo, e é aplicável para outras directorias e ficheiros de todo o sistema de ficheiros do linux/unix.

Irei, agora tratar o caso do case.

``` bash
Exemplo;
#!/bin/sh
case “$variavel” in
1.  comandos;;
2.  comandos;;
3.  comandos;;
*) echo “opcao invalida”;;
```

esac

já explicarei o case, porque não consigo explicá-lo sem usar funções. Por isso, vou falar de funções.

A sintaxe de uma funcão é:

``` bash
sair(){
            exit 1
}
```

Assim, irei mostrar uma forma de case aplicável.

\#!/bin/sh

\# funcoes sair lista limpar e principal

``` bash
sair(){
            exit 1
}
lista(){
            ls -lisa $1|more
}
limpar(){
                clear
}
principal(){
                         echo -n “escolha uma das opcoes”
                        echo “1. lista”
                        echo “2. limpar  o ecran”
                        echo “3. sair do programa”
                         read opcao
                                     case $opcao in
                                     1)lisa;;
- limpar;;
  - sair;;
*) echo “opcao invalida”: exit 1;;
esac
}
```

\#menu principal

principal

Há várias formas de ciclos. Eles são o while, do, for e o until. Cada um tem a sua forma de fazer interações ou ciclos.

Sintaxe do while:

``` bash
while condicao
do
bloco de instrucoes;
```

done

exemplo prático de um while:

``` bash
ver =”n”
while [$ver !=”y”]
```

do

read ver

``` bash
echo “introduza uma opcao”
read opcao
echo “e esta a $opcao correcta (y/n)”
```

read ver

done

o until corre enquanto é verdade.

Sintaxe:

until condicao_verdadeira

do

``` bash
bloco de instrucoes;
```

done

Exemplo também prático:

\#!/bin/sh

until \[-z \$1\]

do

``` bash
ls -lisa $1|more
```

done

A sintaxe do for é:

``` bash
for variavel [in lista]
do
bloco_de_instruções;
```

done

Exemplo de um for:

\#!/bin/sh

\#comeco do programa

``` bash
for i in pedro,1,sara,luis;do
echo “a lista é: $i”
```

done

Espero que tenha sido produtivo para a vossa formação em scripting nos sistemas linux/unix.

Agora é convosco para as ideias de scripts. Irei falar de scripting gráfico, mas para isso tenho  de estudar melhor a função Xdialog. Para esse fim, podem “googlar” acerca dessa matéria.

Vou introduzir mais comandos para que possam conhecer e ter o “bichinho” do scripting shell para a vossa função de administração.

Exemplos de comandos interessantes:

ping:

``` bash
ping ip_do_destino
ping endereco_de_destino
```

man ping para visualizar os parâmetros

rm:

``` bash
rm nome_do_ficheiro
```

man rm para visualizar os parâmetros

date:

date

date +”ola são %H e %M”

tail:

``` bash
tail -n numero a visualizar nome_do_ficheiro
```

man tail para visualizar os parâmetros

more:

``` bash
more nome_do_ficheiro
```

man more para visualizar os parâmetros

Podem também usar o pipe, isto é, agregar comandos, instruções numa linha só,

Exemplo:

``` bash
ls -lisa directorio_de_destino|more
```

Espero que eu tenha esclarecido e tenha tirado algumas dúvidas que tenham. Espero também que haja mais tutoriais meus a explicar como este. Em breve irei escrever um tutorial a explicar como é que se usa o Xdialog.
