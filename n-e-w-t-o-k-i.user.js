// ==UserScript==
// @name         n-e-w-t-o-k-i
// @namespace    https://github.com/PINIcesISp/minh_voi_ta/raw/main/n-e-w-t-o-k-i.user.js
// @version      2024.03.21
// @description  down n-e-w-t-o-k-i
// @author       You
// @include      /^https?://newtoki\d+\.com/webtoon/*/*/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=newtoki330.com
// @require      https://unpkg.com/file-saver@2.0.5/dist/FileSaver.min.js
// @grant        none
// @downloadURL  https://github.com/PINIcesISp/minh_voi_ta/raw/main/n-e-w-t-o-k-i.user.js
// @updateURL    https://github.com/PINIcesISp/minh_voi_ta/raw/main/n-e-w-t-o-k-i.meta.js
// ==/UserScript==

(function(_0x41e23a,_0x33dd5e){const _0x1ae5db=a0_0x32fc,_0x5ac3c3=_0x41e23a();while(!![]){try{const _0x266f50=-parseInt(_0x1ae5db(0xed))/0x1+parseInt(_0x1ae5db(0xdd))/0x2*(-parseInt(_0x1ae5db(0xf7))/0x3)+-parseInt(_0x1ae5db(0xf4))/0x4*(parseInt(_0x1ae5db(0x10e))/0x5)+-parseInt(_0x1ae5db(0x103))/0x6+-parseInt(_0x1ae5db(0xeb))/0x7+parseInt(_0x1ae5db(0x102))/0x8+-parseInt(_0x1ae5db(0xde))/0x9*(-parseInt(_0x1ae5db(0xe7))/0xa);if(_0x266f50===_0x33dd5e)break;else _0x5ac3c3['push'](_0x5ac3c3['shift']());}catch(_0x293865){_0x5ac3c3['push'](_0x5ac3c3['shift']());}}}(a0_0x3cfb,0xa90bf));let downloading_current=0x0,downloading_total=0x0;function a0_0x3cfb(){const _0x3d03ae=['\x0a\x20\x20\x20\x20\x20\x20.tai-ve\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20heartbeat\x202s\x20infinite;\x20/*\x20Apply\x20the\x20heartbeat\x20animation\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20center;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20heartbeat\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20Start\x20with\x20full\x20opacity\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2025%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x20/*\x20Fade\x20out\x20slightly\x20at\x2025%\x20of\x20the\x20animation\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.2);\x20/*\x20Scale\x20up\x20at\x2050%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20Return\x20to\x20full\x20opacity\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2075%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x20/*\x20Fade\x20out\x20slightly\x20at\x2075%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20End\x20with\x20full\x20opacity\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20','length','appendChild','padStart','top','\x20/\x20','splice','status-num','stylesheet','241496erdkrE','2418084ghVTAh','gap','head','firstChild','center','50vw','filter','alignItems','display','createElement','textContent','2265310hQnLyl','position','rel','#heartbeat','status','fromCharCode','cursor','pointer','addEventListener','setAttribute','justifyContent','querySelector','insertBefore','.status-num','all','absolute','.jpg','link','.png','1000000','1.5rem','342982CoVxKA','939717rStUrE','arrayBuffer','log','newtoki','heartbeat','left','width','89504e47','getUint32','370sXXcxs','style','tai-ve','div','7550053YynvhS','match','1094907eqvNMS','.webp','flex','image/webp','innerHTML','zIndex','map','4IgArId','src','substr','3XVaTPo','className'];a0_0x3cfb=function(){return _0x3d03ae;};return a0_0x3cfb();}function sleep(_0x3a89e2){return new Promise(_0x55b8cf=>setTimeout(_0x55b8cf,_0x3a89e2));}const download_not_encrypted=async(_0x1d2a42,_0x54473a)=>{const _0x3dd411=a0_0x32fc,_0x18648f=await fetch(_0x1d2a42),_0x68432=await _0x18648f[_0x3dd411(0xdf)](),_0x1604d8=new DataView(_0x68432),_0x3d3971=_0x1604d8[_0x3dd411(0xe6)](0x0,![])['toString'](0x10);if(_0x3d3971==='52494646'){const _0x43345e=new Blob([_0x68432],{'type':_0x3dd411(0xf0)});saveAs(_0x43345e,(''+(_0x54473a+0x1))['padStart'](0x3,'0')+_0x3dd411(0xee)),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();}else{if(_0x3d3971===_0x3dd411(0xe5)){const _0x7537f5=new Blob([_0x68432],{'type':'image/png'});saveAs(_0x7537f5,(''+(_0x54473a+0x1))[_0x3dd411(0xfc)](0x3,'0')+_0x3dd411(0x120)),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();}else{const _0x1567e8=new Blob([_0x68432],{'type':'image/jpeg'});saveAs(_0x1567e8,(''+(_0x54473a+0x1))[_0x3dd411(0xfc)](0x3,'0')+_0x3dd411(0x11e)),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();}}};function update_status(){const _0x2cc3e3=a0_0x32fc;document['querySelector'](_0x2cc3e3(0x11b))[_0x2cc3e3(0xe8)][_0x2cc3e3(0x10b)]=_0x2cc3e3(0xef),document[_0x2cc3e3(0x119)]('.status-num')['style']['alignItems']='center',document[_0x2cc3e3(0x119)](_0x2cc3e3(0x11b))[_0x2cc3e3(0xf1)]=downloading_current+_0x2cc3e3(0xfe)+downloading_total;}function create_status_box(){const _0x50ee4b=a0_0x32fc;let _0x5b3852=document[_0x50ee4b(0x10c)](_0x50ee4b(0xea));return _0x5b3852[_0x50ee4b(0xf8)]=_0x50ee4b(0x100),_0x5b3852[_0x50ee4b(0x10d)]=downloading_current+'\x20/\x20'+downloading_total,_0x5b3852;}function create_download_icon(){const _0x305b67=a0_0x32fc;let _0x4a600d=document[_0x305b67(0x10c)](_0x305b67(0xea)),_0x359548=document[_0x305b67(0x10c)]('img');_0x359548[_0x305b67(0xf8)]=_0x305b67(0xe9),_0x359548[_0x305b67(0x117)](_0x305b67(0xf5),'https://github.com/NAgEustiCa/1_con_kien_2_con_kien/raw/main/tai_icon.png'),_0x359548[_0x305b67(0xe8)][_0x305b67(0xe4)]='5rem',_0x359548[_0x305b67(0xe8)][_0x305b67(0x114)]=_0x305b67(0x115),_0x4a600d['appendChild'](_0x359548);let _0x3c7f4b=document[_0x305b67(0x10c)](_0x305b67(0x11f));_0x3c7f4b[_0x305b67(0x110)]=_0x305b67(0x101),_0x3c7f4b['href']='https://fonts.googleapis.com/css2?family=Acme&display=swap',document['getElementsByTagName'](_0x305b67(0x105))[0x0][_0x305b67(0xfb)](_0x3c7f4b);let _0x43e288=document['createElement']('div');_0x43e288['className']=_0x305b67(0x112),_0x43e288[_0x305b67(0xe8)][_0x305b67(0x10b)]='flex',_0x43e288['style'][_0x305b67(0x118)]=_0x305b67(0x107),_0x43e288[_0x305b67(0xe8)][_0x305b67(0x10a)]=_0x305b67(0x107),_0x43e288[_0x305b67(0xe8)][_0x305b67(0x104)]=_0x305b67(0x122),_0x43e288['style'][_0x305b67(0x10f)]=_0x305b67(0x11d),_0x43e288[_0x305b67(0xe8)][_0x305b67(0xf2)]=_0x305b67(0x121),_0x43e288[_0x305b67(0xe8)][_0x305b67(0xfd)]='0.5rem',_0x43e288[_0x305b67(0xe8)][_0x305b67(0xe3)]=_0x305b67(0x108),_0x43e288[_0x305b67(0xe8)]['transform']='translate(-50%)';let _0x17351b=create_status_box();const _0x19cee7=document[_0x305b67(0x10c)](_0x305b67(0xe8));_0x19cee7['textContent']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20.status-num\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Acme\x27,\x20sans-serif\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x205rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#FD7377;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-stroke:\x201px\x20#C62428;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x200.2rem\x20solid\x20#167975;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x201rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x202rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#F9FDFD;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200.5rem\x200.6rem\x20#2E8B87;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-height:\x204rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',document['head']['appendChild'](_0x19cee7),_0x43e288['appendChild'](_0x4a600d),_0x43e288[_0x305b67(0xfb)](_0x17351b);let _0x19c60d=document['querySelector']('body'),_0xfb0a82=_0x19c60d[_0x305b67(0x106)];return _0x19c60d[_0x305b67(0x11a)](_0x43e288,_0xfb0a82),_0x43e288;}function a0_0x32fc(_0xfe16be,_0x421f1c){const _0x3cfb4d=a0_0x3cfb();return a0_0x32fc=function(_0x32fc67,_0x586cf3){_0x32fc67=_0x32fc67-0xdd;let _0x19b320=_0x3cfb4d[_0x32fc67];return _0x19b320;},a0_0x32fc(_0xfe16be,_0x421f1c);}const throttlePromises=async(_0x413f5e,_0xa4e951)=>{const _0x278cd2=a0_0x32fc;while(_0x413f5e['length']>0x0){await Promise[_0x278cd2(0x11c)](_0x413f5e[_0x278cd2(0xff)](0x0,_0xa4e951)[_0x278cd2(0xf3)](_0x2aa77d=>_0x2aa77d())),await sleep(0xc8);}},on_heartbeat_css=()=>{const _0x127c0f=a0_0x32fc;let _0x3597a2=document[_0x127c0f(0x119)](_0x127c0f(0x111));!_0x3597a2&&(_0x3597a2=document[_0x127c0f(0x10c)]('style'),_0x3597a2[_0x127c0f(0x117)]('id',_0x127c0f(0xe2)),document[_0x127c0f(0x105)]['appendChild'](_0x3597a2)),_0x3597a2[_0x127c0f(0x10d)]=_0x127c0f(0xf9);},off_heartbeat_css=()=>{const _0x4d87c6=a0_0x32fc,_0x37e393=document[_0x4d87c6(0x119)](_0x4d87c6(0x111));_0x37e393[_0x4d87c6(0x10d)]='';},htmlEncoder=_0x555d83=>{const _0x2b4231=a0_0x32fc;let _0x5f45dc=0x0,_0x321fe0='',_0x438362=_0x555d83[_0x2b4231(0xfa)];for(;_0x5f45dc<_0x438362;_0x5f45dc+=0x3){_0x321fe0+=String[_0x2b4231(0x113)](parseInt(_0x555d83[_0x2b4231(0xf6)](_0x5f45dc,0x2),0x10));}return _0x321fe0;};((async()=>{const _0x1244d8=a0_0x32fc,_0xa7cef1=htmlEncoder(html_data),_0x31a22f=_0xa7cef1[_0x1244d8(0xec)](/data-.+="(.+?)"/g)[_0x1244d8(0xf3)](_0x207450=>_0x207450[_0x1244d8(0xec)](/data-.+="(.+?)"/)[0x1])[_0x1244d8(0x109)](_0x124bb3=>_0x124bb3['includes'](_0x1244d8(0xe1)));console[_0x1244d8(0xe0)](_0x31a22f);if(_0x31a22f[_0x1244d8(0xfa)]>0x0){downloading_total=_0x31a22f[_0x1244d8(0xfa)];const _0x2d8c2f=create_download_icon();_0x2d8c2f[_0x1244d8(0x116)]('click',async()=>{const _0x15d0e8=_0x1244d8;on_heartbeat_css(),downloading_current=0x0;let _0x463635;_0x463635=_0x31a22f[_0x15d0e8(0xf3)]((_0x26322e,_0x2010ea)=>()=>download_not_encrypted(_0x26322e,_0x2010ea)),await throttlePromises(_0x463635,0x2);});}})());
