const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const WEB_DIR = path.join(__dirname, 'web');
const HAS_WEB_BUILD = fs.existsSync(path.join(WEB_DIR, '.next'));

console.log('\x1b[35m[Nyra Launcher]\x1b[0m Starting systems...');

const processes = [];

// Start Bot
const botProcess = spawn('npm', ['run', 'start:bot'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, FORCE_COLOR: '1' }
});
processes.push(botProcess);

// Start Web if built
if (HAS_WEB_BUILD) {
    console.log('\x1b[35m[Nyra Launcher]\x1b[0m Web build detected. Starting Dashboard...');
    const webProcess = spawn('npm', ['start'], {
        cwd: WEB_DIR,
        stdio: 'inherit',
        shell: true,
        env: { ...process.env, FORCE_COLOR: '1' }
    });
    processes.push(webProcess);
} else {
    console.log('\x1b[33m[Nyra Launcher]\x1b[0m No web build found. Running in Bot-Only mode.');
}

// Handle Exit
process.on('SIGINT', () => {
    console.log('\n\x1b[35m[Nyra Launcher]\x1b[0m Shutting down...');
    processes.forEach(p => p.kill());
    process.exit();
});
