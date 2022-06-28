#Always factory data reset once, mount /system, and then clear cache before running this script
#If you run .app removal you must reinstall a launcher, otherwise it will always try to start
#It's a good idea to enable "Always accept ADB commands from this machine" or similar

for item in $(pm list packages | grep .app | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done     

for item in $(pm list packages | grep bixby | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done     

for item in $(pm list packages | grep knox | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done   

for item in $(pm list packages | grep facebook | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done   

for item in $(pm list packages | grep vending | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep smart | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep game | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep test | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep carrier | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep gms | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep dialer | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep forest | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep chrome | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep nfc | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep mdm | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep microsoft | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep vzw | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep youtube | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep messaging | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep contacts | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep calendar | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep sync | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep .providers | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//' | sed -e 's/download//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep telemetry | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep search | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep gallery | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep scloud | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep vision | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep sync | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep samsungpass | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep talkback | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep aremoji | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep arzone | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep messaging | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep calendar | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep email | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep vvm | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep samsung | grep themes | sed -e 's/package://' | sed -e 's/internal//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep privateshare | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep projection.gearhead | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep authfw | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep mdecservice | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep daagent | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep android.fmm | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep mdecservice | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep ipsgeofence | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep mapsagent | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep kgclient | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep com.google.android.gm | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep android.mobileservice | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep mdx | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep unifiedwfc | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep honeyboard | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep nsflp2 | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep com.samsung.SMT | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep themecenter | sed -e 's/package://' | sed -e 's/internal//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep android.lool | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep bbc.bbcagent | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep verizon | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep livestickers | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep android.kgclient | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep google.android.tts | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep android.mateagent | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep samsung.ssu | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep kidsinstaller | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep svoiceime | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep kidsinstaller | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep easyMover.Agent | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep cellbroadcastreceiver | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep wifiguider | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

for item in $(pm list packages | grep dynamiclock | sed -e 's/package://' | sed -e 's/internal//'  | sed -e 's/theme//')
do
echo removing $item
pm uninstall -k --user 0 $item
done 

pm uninstall -k --user 0 com.samsung.android.spay
pm uninstall -k --user 0 com.sec.spp.push