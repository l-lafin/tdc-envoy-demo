function Add-HostEntry {
  # By Tom Chantler - https://tomssl.com/2019/04/30/a-better-way-to-add-and-remove-windows-hosts-file-entries/
  param([string]$DesiredIP = "127.0.0.1"
    , [string]$Hostname = "tomssl.local"
    , [bool]$CheckHostnameOnly = $false)
  # Adds entry to the hosts file.
  #Requires -RunAsAdministrator
  $hostsFilePath = "$($Env:WinDir)\system32\Drivers\etc\hosts"
  $hostsFile = Get-Content $hostsFilePath

  Write-Host "About to add $desiredIP for $Hostname to hosts file" -ForegroundColor Gray
  $escapedHostname = [Regex]::Escape($Hostname)
  $patternToMatch = If ($CheckHostnameOnly) { ".*\s+$escapedHostname.*" } Else { ".*$DesiredIP\s+$escapedHostname.*" }

  If (($hostsFile) -match $patternToMatch) {
    Write-Host $desiredIP.PadRight(20, " ") "$Hostname - not adding; already in hosts file" -ForegroundColor DarkYellow
  }
  Else {
    Write-Host $desiredIP.PadRight(20, " ") "$Hostname - adding to hosts file... " -ForegroundColor Yellow -NoNewline
    Add-Content -Encoding UTF8  $hostsFilePath ("$DesiredIP".PadRight(20, " ") + "$Hostname")
    Write-Host " done"
  }
}

function Set-EnvSecretFile {
  $file_content = -join (
    "OAUTH2_PROXY_CLIENT_ID=b3b88048-eee2-4658-bff1-5a50361655b3 `n",
    "OAUTH2_PROXY_CLIENT_SECRET=dDK-Dztp5DdswHp14IkT0zpSS_xxijLtR-wQIBv5"
  )
  New-Item -Path ".\apps\digihero\env" -Name ".env.secrets" -Value $file_content -ItemType "file" -Force
}

function Add-TrustedCertificate {
  Write-Host "Adding tdc.demo.local certificate as trusted root" -ForegroundColor Gray
  Import-Certificate -FilePath .\platform\router\ssl\cert.crt -CertStoreLocation cert:\CurrentUser\Root
} 

Add-HostEntry -DesiredIP 127.0.0.1 -Hostname tdc.demo.local
Add-HostEntry -DesiredIP 127.0.0.1 -Hostname dex.tdc.demo.local
Add-TrustedCertificate
Set-EnvSecretFile