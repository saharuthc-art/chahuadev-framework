#  @chahuadev/framework

The official core executable framework for Chahuadev. 

<p align="center">
  <img src="https://github.com/saharuthc-art/chahuadev-framework/blob/39932ffc5482af35968c1d217d0c07613e13e6fc/chahuadev.png" width="600" alt="Chahuadev Framework">
</p>

This package provides a seamless way to integrate and run the Chahuadev Framework directly from your Node.js environment or Command Line Interface (CLI).

> **Note:** Currently, this framework is optimized exclusively for **Windows (x64)** architecture.

---

##  Installation

You only need to install this main package. Our system uses `optionalDependencies` to automatically detect your operating system and securely download the required Windows binary (`.exe`) behind the scenes.

### Global Install (Recommended for CLI)
If you want to use the framework directly from your terminal anywhere on your system:

```bash
npm install -g @chahuadev/framework
```
### Local Install (For Node.js projects)
If you want to integrate the framework into your specific project:

Bash
```bash
npm install @chahuadev/framework
```

### 💻 Usage
You can use the Chahuadev Framework either via Command Line or programmatically in your Node.js code.

### 1. Command Line Interface (CLI)
If installed globally, you can launch the application by simply typing:

Bash
chahuadev-framework
(You can also pass arguments directly, e.g., chahuadev-framework --start)

### 2. Node.js API
If installed locally in your project, you can require and run it via code:

```JavaScript
const chf = require('@chahuadev/framework');

// Launch the application
chf.run(); 

// Or if you just need the absolute path to the .exe file
const exePath = chf.getPath();
console.log('Executable is located at:', exePath);
```

###  Platform Support
OS: Windows (win32)

Architecture: 64-bit (x64) only

If you attempt to install or run this on Mac or Linux, it will safely exit and notify you of the platform requirement.

###  License
Proprietary - Chahua Development Thailand
#

