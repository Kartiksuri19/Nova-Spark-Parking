$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

# 1. Scattered map with 3D parking box markers on laptop (1366x768)
Start-Process $edge -ArgumentList '--headless=new', '--disable-gpu', '--virtual-time-budget=4000', '--screenshot=C:\Users\Bro\screenshot_scattered_map.png', '--window-size=1366,768', 'file:///D:/Nova%20Spark%20Parking/app/index.html' -Wait

# 2. 3D Driveway Box Visualizer in detail inspector (1366x768)
Start-Process $edge -ArgumentList '--headless=new', '--disable-gpu', '--virtual-time-budget=4000', '--screenshot=C:\Users\Bro\screenshot_3d_box_detail.png', '--window-size=1366,768', 'file:///D:/Nova%20Spark%20Parking/app/index.html#spot-1' -Wait

# 3. CarPlay HUD on automotive display (1024x600)
Start-Process $edge -ArgumentList '--headless=new', '--disable-gpu', '--virtual-time-budget=4000', '--screenshot=C:\Users\Bro\screenshot_carplay_route.png', '--window-size=1024,600', 'file:///D:/Nova%20Spark%20Parking/app/index.html#carplay' -Wait

Write-Output 'SCREENSHOTS_FINISHED'
