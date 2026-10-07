$path = "D:\kemerya-tours\lib\brand-content\en.ts"
$lines = Get-Content $path
$changes = 0

# Fix indentation on all lines that have too much leading space (lines with eyebrow or blurb at wrong indent)
for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    # Fix lines starting with more than 6 spaces followed by eyebrow or blurb
    if ($line -match '^(\s+)(eyebrow:|blurb:)') {
        $trimmed = $line.TrimStart()
        $lines[$i] = "    " + $trimmed
        $changes++
        Write-Host "Fixed line $($i+1): $trimmed"
    }
}

Set-Content -Path $path -Value $lines
Write-Host "Indentation fixes applied: $changes"