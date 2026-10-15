param(
    [string]$Url = "file:///D:/Nova%20Spark%20Parking/one/app/index.html",
    [string]$OutFile = "D:\shot.png",
    [string]$WindowSize = "1152,720"
)

$args = @(
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--screenshot=$OutFile",
    "--window-size=$WindowSize",
    $Url
)
Start-Process -FilePath "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" -ArgumentList $args -Wait -NoNewWindow
if (Test-Path $OutFile) {
    Write-Host "Success: $OutFile"
} else {
    Write-Host "Failed: $OutFile"
}
