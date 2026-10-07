$path = "D:\kemerya-tours\lib\brand-content\en.ts"
$bytes = [System.IO.File]::ReadAllBytes($path)
Write-Host "First 3 bytes (BOM check): $($bytes[0]) $($bytes[1]) $($bytes[2])"
Write-Host "File size: $($bytes.Length) bytes"
Write-Host "Line count: $((Get-Content $path -Encoding UTF8).Count)"

# Verify key lines
$lines = Get-Content $path -Encoding UTF8
Write-Host "=== Line 19 ==="
Write-Host $lines[18]
Write-Host "=== Line 84 ==="
Write-Host $lines[83]
Write-Host "=== Line 132 ==="
Write-Host $lines[131]
Write-Host "=== Line 157 ==="
Write-Host $lines[156]
Write-Host "=== Line 109 ==="
Write-Host $lines[108]