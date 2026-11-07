+++
title = 'Kayte Studio'
tagline = 'A cross-platform IDE for Kayte and beyond'
summary = 'KayteIDE, our Qt 6 / C++17 development environment for Kayte, C++, Pascal/Delphi and Visual Basic, with a visual RAD form designer, built-in Git and Subversion, and a unit-test runner.'
weight = 20
repo = 'https://github.com/kaytestudio/kayteide'
status = 'Active development'
platforms = ['macOS (Intel & Apple Silicon)', 'Linux (x86_64 & arm64)']
tech = ['C++17', 'Qt 6', 'CMake', 'libgit2']
+++

Kayte Studio is home to **KayteIDE**, a cross-platform integrated development environment built with **Qt 6 and C++17**. It edits and runs projects in Kayte, C++, Pascal/Delphi and Visual Basic, with an optional **RAD mode** for designing UI forms visually.

## Features

- **Multi-language editing**: syntax highlighting for Kayte, C++, Pascal, Delphi and Visual Basic, with a tabbed editor, line numbers and a built-in terminal
- **RAD mode**: a drag-and-drop widget palette, design canvas, and component/property editors. Forms are saved as XML.
- **Version control**: dockable Git and Subversion panels that follow the active project
- **Unit testing**: an embedded, multi-language test runner
- **Project management**: a New Project dialog, project tree, and `.xproj` scaffolding
- **Auto-updater**: check for and build updates from **Tools → Updater…**

## Packaging

- **macOS**: a signed `.app` bundle and a `.dmg` installer
- **Linux**: `.deb` and `.rpm` packages via CPack

## Build it yourself

```bash
git clone https://github.com/kaytestudio/kayteide.git
cd kayteide && mkdir build && cd build
cmake .. && cmake --build . --parallel
```
