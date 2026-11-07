+++
title = 'OS/2 Emulation'
tagline = 'An OS/2 Warp–style operating system for ARM64 and RISC-V'
summary = 'A bare-metal, OS/2-style operating system in C11 and AArch64 assembly. It runs on QEMU, Raspberry Pi 3+ and BeagleBoard hardware, with an LX .EXE loader, a DOS-style shell, ext4/btrfs and a GUI compositor.'
weight = 30
repo = 'https://github.com/kaytestudio/os24arm'
status = 'Experimental'
platforms = ['QEMU virt (AArch64)', 'Raspberry Pi 3 / 3+', 'BeagleBone Black (ARMv7)', 'BeagleV-Ahead (RISC-V)', 'QEMU riscv64']
tech = ['C11', 'AArch64 assembly', 'LLVM / Clang', 'QEMU']
+++

**os24arm** brings the OS/2 Warp 4.52 experience to modern ARM hardware. It is a **bare-metal**, freestanding operating system written in C11 and AArch64 assembly, with no libc. The kernel, `CMD.EXE` and filesystem drivers all run in a single flat address space.

## What's inside

- **OS/2 LX `.EXE` loader** that can run a standalone `CMD.EXE`, plus an OS/2 `Dos*` API layer (`DosOpen`, `DosRead`, …)
- **DOS-style command shell** with DOSKEY-style history and macros: `DIR`, `TYPE`, `COPY`, `ATTRIB`, `DEBUG` and more
- **QuickBASIC-compatible interpreter**
- **Filesystems**: ext4 and btrfs (both read/write) behind a VFS/IFS layer, plus a standalone f2fs driver
- **Wayland-style GUI compositor** with four switchable "workplaces" (virtio-gpu / ramfb / virtio-input)
- **DEBUG.COM-style memory monitor** and a small on-box heuristic assistant

## Hardware

The primary targets are the **QEMU virt** machine (Cortex-A72) and the **Raspberry Pi 3/3+**. Early serial-console ports also boot on the **BeagleBone Black** (TI AM335x, ARMv7) and the **BeagleV-Ahead** (T-Head TH1520, RV64), and in QEMU's riscv64 `virt` machine.

```bash
brew install llvm qemu cmake
export PATH="/opt/homebrew/opt/llvm/bin:$PATH"
```
