+++
title = "ringsCE #2 (En Castellano)"
date = 2024-06-27T07:41:04Z
lastmod = 2024-06-27T07:41:04Z
author = "Kayte Studio"
categories = ["macOS"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2024/06/27/ringsce-2-en-castellano/"
+++

Vamos a aprender a hackear RingsCE en nuestras máquinas MacBook M1+.

Claro, desglosamos el archivo `CMakeLists.txt` para el proyecto Kayte Lang:

### Versión de CMake y Definición del Proyecto

``` cmake
cmake_minimum_required(VERSION 3.29)
project(Kayte-lang VERSION 0.1.0 LANGUAGES CXX kayte)
```

- `cmake_minimum_required(VERSION 3.29)`: Especifica que se requiere la versión 3.29 o superior de CMake.
- `project(Kayte-lang VERSION 0.1.0 LANGUAGES CXX kayte)`: Define el nombre del proyecto como "Kayte-lang" con la versión 0.1.0. El proyecto utiliza C++ (`CXX`) y un lenguaje personalizado `kayte`.

### Características de Qt y Estándar de C++

``` cmake
set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_INCLUDE_CURRENT_DIR ON)
```

- Estas configuraciones habilitan el manejo automático de características de Qt:
  - `CMAKE_AUTOUIC`: Procesa automáticamente archivos `.ui`.
  - `CMAKE_AUTOMOC`: Maneja automáticamente el Meta-Object Compiler de Qt.
  - `CMAKE_AUTORCC`: Procesa automáticamente archivos de recursos de Qt.
  - `CMAKE_INCLUDE_CURRENT_DIR`: Incluye los directorios de origen y binarios actuales en la ruta de inclusión.

``` cmake
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
```

- `set(CMAKE_CXX_STANDARD 17)`: Especifica que se debe usar el estándar C++17.
- `set(CMAKE_CXX_STANDARD_REQUIRED ON)`: Asegura que el estándar C++ especificado es obligatorio.

### Configuraciones Específicas de la Plataforma

``` cmake
if(ANDROID)
    set(CMAKE_SYSTEM_NAME Android)
    set(CMAKE_SYSTEM_VERSION 21)
elseif(APPLE)
    if(IOS)
        set(CMAKE_SYSTEM_NAME iOS)
        set(CMAKE_OSX_ARCHITECTURES "arm64")
        set(CMAKE_IOS_DEPLOYMENT_TARGET 15.0)
    else()
        set(CMAKE_SYSTEM_NAME macOS)
        set(CMAKE_OSX_ARCHITECTURES "arm64")
        set(CMAKE_OSX_DEPLOYMENT_TARGET 11.0)
    endif()
elseif(UNIX AND NOT APPLE)
    set(CMAKE_SYSTEM_NAME Linux)
    if(CMAKE_SYSTEM_PROCESSOR STREQUAL "aarch64")
        set(CMAKE_SYSTEM_PROCESSOR arm64)
    endif()
else()
    message(FATAL_ERROR "Unsupported platform")
endif()
```

- Esta sección establece los requisitos mínimos para diferentes plataformas:
  - Android: Requiere API nivel 21 o superior.
  - Apple (iOS y macOS): Especifica la arquitectura (`arm64`) y los objetivos de despliegue.
  - Linux: Maneja diferentes procesadores, especialmente ARM64.

### Funcionalidad de Verificación de Directorios

``` cmake
set(DIRECTORIES
    "dir1"
    "dir2"
    "dir3"
    "dir4"
    "dir5"
    "dir6"
    "dir7"
    "dir8"
    "dir9"
)
```

- Define una lista de directorios a verificar.

``` cmake
function(check_directory dir)
    if(IS_DIRECTORY ${dir})
        message(STATUS "Directory found: ${dir}")
        set(DIR_${dir}_FOUND ON PARENT_SCOPE)
    else()
        message(STATUS "Directory not found: ${dir}")
        set(DIR_${dir}_FOUND OFF PARENT_SCOPE)
    endif()
endfunction()
```

- `check_directory`: Función que verifica si un directorio existe y establece una bandera en consecuencia.

``` cmake
foreach(dir ${DIRECTORIES})
    check_directory(${dir})
endforeach()
```

- Recorre la lista de directorios y verifica cada uno.

### Directorios de Salida e Inclusión/Vinculación

``` cmake
foreach(dir ${DIRECTORIES})
    if(DIR_${dir}_FOUND)
        message(STATUS "${dir} is present.")
    else()
        message(STATUS "${dir} is not present.")
    endif()
endforeach()
```

- Muestra los resultados de las verificaciones de directorios.

``` cmake
foreach(dir ${DIRECTORIES})
    if(DIR_${dir}_FOUND)
        include_directories(${dir})
    endif()
endforeach()
```

- Incluye los directorios que se encuentran.

### Ejemplo de Objetivo

``` cmake
#add_executable(example main.cpp)
```

- Define un objetivo ejecutable llamado `example` usando `main.cpp` al final.

``` cmake
foreach(dir ${DIRECTORIES})
    if(DIR_${dir}_FOUND)
        target_link_libraries(example ${dir})
    endif()
endforeach()
```

- Vincula los directorios al objetivo `example` si se encuentran.

### Resumen

Este archivo `CMakeLists.txt` configura un proyecto CMake para Kayte Lang con las siguientes características clave:

- Requiere CMake 3.29 o superior.
- Configura el proyecto con C++ y un lenguaje personalizado `kayte`.
- Habilita características automáticas de Qt.
- Requiere el estándar C++17.
- Especifica configuraciones específicas de la plataforma para Android, iOS, macOS y Linux.
- Verifica la existencia de directorios especificados.
- Incluye y vincula directorios según su existencia.
- Define un objetivo ejecutable de ejemplo y lo vincula a los directorios encontrados.

Este archivo de encabezado define las instrucciones de bytecode para la máquina virtual Kayte Lang. Vamos a repasarlo paso a paso:

### Guardas de Encabezado

``` cpp
#ifndef BYTECODE_INSTRUCTIONS_H
#define BYTECODE_INSTRUCTIONS_H
```

- **Guardas de encabezado**: Se utilizan para prevenir múltiples inclusiones del mismo archivo de encabezado, lo que puede causar errores de compilación. `#ifndef` verifica si `BYTECODE_INSTRUCTIONS_H` no está definido, y si no lo está, lo define. Esto asegura que el contenido entre estas guardas se incluya solo una vez.

### Enumeración de Instrucciones de Bytecode

``` cpp
enum class BytecodeInstruction {
    NOP,        // No operation
    HALT,       // Halt execution
    PUSH,       // Push a value onto the stack
    POP,        // Pop a value from the stack
    ADD,        // Add two values from the stack
    SUBTRACT,   // Subtract two values from the stack
    MULTIPLY,   // Multiply two values from the stack
    DIVIDE,     // Divide two values from the stack
    PRINTLN     // Print a value from the stack
};
```

- **enum class BytecodeInstruction**: Esto define una enumeración llamada `BytecodeInstruction` usando `enum class` para asegurar la seguridad de tipos y para encerrar los enumeradores dentro de `BytecodeInstruction`.
- Cada enumerador representa una instrucción diferente que la máquina virtual puede ejecutar:
  - **NOP**: Sin operación. La VM no hace nada cuando encuentra esta instrucción.
  - **HALT**: Detiene la ejecución del bytecode. Se utiliza para detener la VM.
  - **PUSH**: Empuja un valor en la pila. Se utiliza para añadir un valor a la pila.
  - **POP**: Saca un valor de la pila. Esto elimina el valor superior de la pila.
  - **ADD**: Suma los dos valores superiores de la pila, empuja el resultado de nuevo en la pila.
  - **SUBTRACT**: Resta los dos valores superiores de la pila, empuja el resultado de nuevo en la pila.
  - **MULTIPLY**: Multiplica los dos valores superiores de la pila, empuja el resultado de nuevo en la pila.
  - **DIVIDE**: Divide los dos valores superiores de la pila, empuja el resultado de nuevo en la pila.
  - **PRINTLN**: Imprime el valor superior de la pila. Esto es útil para depuración o propósitos de salida.

### Fin de las Guardas de Encabezado

``` cpp
#endif // BYTECODE_INSTRUCTIONS_H
```

- Esto marca el final de la guarda de encabezado. Cierra el condicional que comenzó con `#ifndef`, asegurando que el contenido entre las guardas se incluya solo una vez.

### Resumen del Encabezado

Este archivo de encabezado define un conjunto de instrucciones para una máquina virtual de bytecode en el proyecto Kayte Lang. Estas instrucciones incluyen operaciones básicas como aritmética (suma, resta, multiplicación, división), manipulación de pila (empujar, sacar) y operaciones de control (sin operación, detener, imprimir). El uso de un `enum class` asegura que estas instrucciones sean seguras en cuanto a tipos y encapsuladas, haciendo el código más robusto y fácil de mantener.

### Uso del Archivo de Configuración de Doxygen (`Doxyfile`)

Un archivo de configuración de Doxygen, a menudo llamado `Doxyfile`, se utiliza para generar documentación a partir del código fuente anotado. Aquí, el `Doxyfile` proporcionado está personalizado para el proyecto Kaytana. Vamos a desglosar sus secciones y configuraciones clave.

### Configuraciones Relacionadas con el Proyecto

``` ini
PROJECT_NAME           = Kaytana
PROJECT_NUMBER         = 1.0
PROJECT_BRIEF          = "Object Pascal Interpreter with

 AI Assistance"
OUTPUT_DIRECTORY       = @CMAKE_BINARY_DIR@/doxygen
OUTPUT_LANGUAGE        = English
```

- **PROJECT_NAME**: El nombre del proyecto (Kaytana).
- **PROJECT_NUMBER**: El número de versión (1.0).
- **PROJECT_BRIEF**: Una breve descripción del proyecto.
- **OUTPUT_DIRECTORY**: Especifica dónde se generará la documentación. `@CMAKE_BINARY_DIR@` es un marcador de posición que CMake reemplazará con la ruta del directorio de compilación actual.
- **OUTPUT_LANGUAGE**: El idioma de la documentación (Inglés).

### Configuraciones Relacionadas con la Construcción

``` ini
EXTRACT_ALL            = YES
EXTRACT_PRIVATE        = NO
SHOW_INCLUDE_FILES     = YES
```

- **EXTRACT_ALL**: Si se establece en YES, todas las entidades se documentarán, incluso aquellas sin comentarios de documentación.
- **EXTRACT_PRIVATE**: Si se establece en NO, los miembros privados de las clases no se incluirán en la documentación.
- **SHOW_INCLUDE_FILES**: Si se establece en YES, la documentación mostrará qué archivos están incluidos en cada archivo fuente.

### Configuraciones Relacionadas con la Entrada

``` ini
INPUT                  = @CMAKE_SOURCE_DIR@/src
FILE_PATTERNS          = *.cpp *.h
RECURSIVE              = YES
```

- **INPUT**: Especifica los directorios o archivos a procesar. `@CMAKE_SOURCE_DIR@` es un marcador de posición que CMake reemplazará con la ruta del directorio fuente actual.
- **FILE_PATTERNS**: Especifica los patrones de archivos a incluir (archivos fuente y de encabezado de C++).
- **RECURSIVE**: Si se establece en YES, se incluirán los subdirectorios.

### Configuraciones Relacionadas con el Navegador de Código Fuente

``` ini
SOURCE_BROWSER         = YES
INLINE_SOURCES         = YES
```

- **SOURCE_BROWSER**: Si se establece en YES, permite la navegación del código fuente dentro de la documentación generada.
- **INLINE_SOURCES**: Si se establece en YES, incluye el código fuente en la documentación.

### Configuraciones Relacionadas con el Formato de Salida

``` ini
GENERATE_HTML          = YES
HTML_OUTPUT            = html
HTML_TIMESTAMP         = YES
SEARCHENGINE           = YES
```

- **GENERATE_HTML**: Si se establece en YES, genera documentación en formato HTML.
- **HTML_OUTPUT**: Especifica el directorio dentro del directorio de salida donde se colocarán los archivos HTML.
- **HTML_TIMESTAMP**: Si se establece en YES, incluye una marca de tiempo en los archivos HTML generados.
- **SEARCHENGINE**: Si se establece en YES, incluye una función de búsqueda en la documentación HTML.

### Gráficos y Diagramas

``` ini
CLASS_DIAGRAMS         = YES
CALL_GRAPH             = YES
CALLER_GRAPH           = YES
```

- **CLASS_DIAGRAMS**: Si se establece en YES, genera diagramas de clases.
- **CALL_GRAPH**: Si se establece en YES, genera gráficos de llamadas (quién llama a quién).
- **CALLER_GRAPH**: Si se establece en YES, genera gráficos de llamadores (quién es llamado por quién).

### Personalización para Uso con CMake

- El archivo de configuración utiliza marcadores de posición como `@CMAKE_BINARY_DIR@` y `@CMAKE_SOURCE_DIR@`. Estos marcadores son reemplazados por CMake con las rutas reales cuando se configura el proyecto.

### Resumen

Este `Doxyfile` está configurado para generar documentación completa para el proyecto Kaytana. Incluye configuraciones para detalles del proyecto, fuentes de entrada, opciones de construcción y formatos de salida. La configuración asegura que la documentación será exhaustiva, incluyendo navegación del código fuente, diagramas y un motor de búsqueda.

### Aprender a Hackear RingsCE con Kayte Lang

Los artículos sobre RingsCE están diseñados para ayudar a los usuarios a entender cómo personalizar y extender el motor RingsCE usando Kayte Lang. Siguiendo estas guías, los desarrolladores pueden aprender a:

- Modificar el motor RingsCE para adaptarlo a las necesidades específicas del proyecto.
- Integrar nuevas características y mejoras utilizando las capacidades de Kayte Lang.
- Utilizar las herramientas y bibliotecas proporcionadas para agilizar el desarrollo.

Estos artículos cubrirán temas como:

- Configuración del entorno de desarrollo para Kayte Lang.
- Escribir y compilar scripts personalizados.
- Integración de bibliotecas de terceros.
- Depuración y optimización del rendimiento.

Aprovechando estos recursos, los desarrolladores pueden hackear y mejorar efectivamente el motor RingsCE, creando soluciones a medida para sus proyectos de juegos.
