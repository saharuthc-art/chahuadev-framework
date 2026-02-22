#!/usr/bin/env node
const path = require('path');
const { spawnSync } = require('child_process');
const os = require('os');

// เช็คว่าใช่ Windows x64 หรือไม่
if (os.platform() !== 'win32' || os.arch() !== 'x64') {
  console.error('Error: Chahuadev Framework currently only supports Windows x64.');
  process.exit(1);
}

try {
  // หา Path ของไฟล์ .exe จากแพ็กเกจย่อยที่เราตั้งไว้ใน optionalDependencies
  const exePath = path.join(
    require.resolve('@chahuadev/framework-win32-x64/package.json'),
    '../bin/chahuadev-framework.exe'
  );

  // รันไฟล์ .exe และส่งต่อคำสั่งต่างๆ (arguments) ไปให้แอปของคุณ
  const args = process.argv.slice(2);
  spawnSync(exePath, args, { stdio: 'inherit' });

} catch (error) {
  console.error('Failed to start Chahuadev Framework:', error.message);
  process.exit(1);
}