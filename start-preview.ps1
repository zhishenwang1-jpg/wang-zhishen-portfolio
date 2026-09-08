Set-Location -LiteralPath $PSScriptRoot
$nodePath = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $nodePath) { throw 'Please install Node.js 24 LTS and reopen PowerShell.' }
if (-not (Test-Path 'node_modules/vite/bin/vite.js')) { throw 'Run pnpm install --frozen-lockfile first.' }
& $nodePath node_modules/vite/bin/vite.js build
if ($LASTEXITCODE -ne 0) { throw 'Build failed.' }
if (Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue) { Write-Host 'Preview: http://127.0.0.1:4173'; exit }
& $nodePath node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173 --strictPort
