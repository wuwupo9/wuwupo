/*
新版需要自己抓包找域名

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header blbl.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['Authorization'] = 'identify_v1 91ccc431cbc8815ae615339132406fb2CjDepA7J2pmnupagCQUc3i1uWHOLxGehYoshL_O6DE8bgX5KCFFgiTiNkdEoRWuJBD8SVjNxSDZuQW9VMzhqRllSNEF0NS1OMS1YRlFINjhKSFdGXzUzSjBTSWJ3aS1KdGxwVlJxYjYzT0xfYzdfbWxfci1yVzRFcXJGd1BvNG8wZDdYQjBOMF93IIEC';
modifiedHeaders['User-Agent'] = 'bili-universal/75500200 os/ios model/iPhone 12 mobi_app/iphone osVer/16.3.1 network/1;tf:ct;tf:ct';

modifiedHeaders['Cookie'] = '_uuid=49610101067-41810-8755-CE65-A27451045C7E112520infoc; b_nut=1700185512; buvid3=4392F402-47C1-FEF2-C708-EEE70F2C29A612584infoc; buvid4=B8D2C039-6309-5E17-88FB-B7634C57A4B112584-123111701-; buvid_fp=0a3a21f6b594bcf2d876441954208029; fingerprint3=dc596aa44a95a4ba5c1806ded6615ad4; Buvid=Y544A75688A74F0A49FFA6762C455BE66048; DedeUserID=442935892; DedeUserID__ckMd5=8b8099f596db052a; SESSDATA=044f42b3%2C1715705815%2C381206b2CjDepA7J2pmnupagCQUc3i1uWHOLxGehYoshL_O6DE8bgX5KCFFgiTiNkdEoRWuJBD8SVjNxSDZuQW9VMzhqRllSNEF0NS1OMS1YRlFINjhKSFdGXzUzSjBTSWJ3aS1KdGxwVlJxYjYzT0xfYzdfbWxfci1yVzRFcXJGd1BvNG8wZDdYQjBOMF93IIEC; bili_jct=8361a02300d566170ffa1403682d0dd0; sid=o1trb27z';

$done({ headers: modifiedHeaders });
