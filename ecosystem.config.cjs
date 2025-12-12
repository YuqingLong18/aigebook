module.exports = {
    apps: [
      {
        name: "aigebook",
        cwd: "/www/wwwroot/aigebook",
        script: "node",
        args: "node_modules/vite/bin/vite.js preview --host --port 3012",
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  };