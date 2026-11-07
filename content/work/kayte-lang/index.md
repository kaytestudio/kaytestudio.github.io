+++
title = 'Kayte Lang'
tagline = 'A modern, cross-platform programming language'
summary = 'An experimental language with BASIC-style and JavaScript-like syntaxes that compile to the same bytecode, or to native executables for macOS, Linux, Windows, iOS and WebAssembly.'
weight = 10
repo = 'https://github.com/kaytestudio/kayte-lang'
status = 'Experimental'
platforms = ['macOS', 'Linux', 'Windows', 'iOS / tvOS', 'WebAssembly', 'ESP32 / Arduino']
tech = ['Free Pascal', 'C', 'LLVM', 'Qt 6']
+++

Kayte Lang is an experimental programming language for building applications quickly and cross-platform. Programs are written in a **BASIC-style syntax** (`.kayte`) or a **JavaScript-like** one (`.kjs`), and both compile to the same bytecode.

## One program, many targets

A Kayte program can run in three ways:

- **On the Kayte Virtual Machine (KVM)** as portable bytecode
- **As a native executable through C**, using any system `cc`
- **As a native executable through LLVM**, including cross-compiling for other platforms

```basic
name = "World"
PRINT "Hello, " & name & "!"
```

```bash
kayte --compile hello.kayte -o hello.bytecode   # bytecode for the VM
kayte --run hello.bytecode
kayte --native hello.kayte -o hello             # native, via C
kayte --llvm hello.kayte --target x86_64-w64-mingw32 -o hello.exe
```

## Native GUIs

Kayte builds native **Qt 6** user interfaces from code, from QML, or from `.kfm` form files, a visual-form format in the spirit of classic RAD tools.

## Beyond the desktop

- **PicoKayte** brings Kayte to ESP32 and Arduino boards
- **webgen** generates websites from Markdown
- An experimental **JVM bridge** and the `kcc` / `kldb` C tools round out the toolchain
