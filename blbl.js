/*

新版需要自己抓包找域名

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header blbl.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = ' Buvid=Y544A75688A74F0A49FFA6762C455BE66048; DedeUserID=442935892; DedeUserID__ckMd5=8b8099f596db052a; SESSDATA=df0f2331%2C1715992576%2Cc98e1cb2CjCI1YURgaCoBYlDs3tOuIEq_vQfS9SytcS_bjuLiKQ50r_2IJ9CU-Ajg0vUiAiOTMMSVmZaWm1ydlEtYlQ1THhXMU0tenJNQkdCSENFdTJNZlhmWGJUZDNXbjB5OERYdFp6ZUhDeVIxWThlV2ExYU5MTnNKWUlaY1NiQWdKZWJ2dDg0MUpxZVh3IIEC; bili_jct=517f93c55af1b1eb4e22fe59924b81fd; sid=nojccr0k';

modifiedHeaders['Authorization'] = ' identify_v1 dd1876de629ec6154eb5cf30377390b2CjCI1YURgaCoBYlDs3tOuIEq_vQfS9SytcS_bjuLiKQ50r_2IJ9CU-Ajg0vUiAiOTMMSVmZaWm1ydlEtYlQ1THhXMU0tenJNQkdCSENFdTJNZlhmWGJUZDNXbjB5OERYdFp6ZUhDeVIxWThlV2ExYU5MTnNKWUlaY1NiQWdKZWJ2dDg0MUpxZVh3IIEC';

modifiedHeaders['User-Agent'] = ' bili-universal/75500200 os/ios model/iPhone 12 mobi_app/iphone osVer/16.3.1 network/2';

$done({headers : modifiedHeaders});
