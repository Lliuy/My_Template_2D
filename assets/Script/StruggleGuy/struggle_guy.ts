// import XFireAppAndroid from './xfire_android';
import StruggleGuyApp from './struggle_guy_base';
import StruggleGuy from './struggle_guy_base';
// import XFireAppByteDance from './xfire_bytedance';
// import XFireConfigs from './xfire_config';
// import XFireAppKuaiShou from './xfire_kuaishou';
// import XFireAppOppo from './xfire_oppo';
// import XFireAppQQ from './xfire_qq';	
// import XFireAppVivo from './xfire_vivo';
// import XFireAppWechat from './xfire_wechat';
// import XFireAppHuawei from './xfire_huawei';
// import XFireAppDB from './xfire_db';
//import XFireAppBaidu from './xfire_baidu';
//import XFireAppJKW from './xfire_jkw';
//import XFireAppKaiXin from './xfire_kaixin';
// import XFireAppMB from './xfire_mb';
// import XFireAppMBDQ from './xfire_mbdq';
// import XFireAppMeiZu from './xfire_meizu';
// import XFireAppQihu from './xfire_qihu';
// import XFireAppQuTouTiao from './xfire_qutoutiao';
// import XFireAppSnowFish from './xfire_snowfish';
// import XFireAppUC from './xfire_uc';
// import XFireAppXiaomi from './xfire_xiaomi';

console.log('xfire version: ' + StruggleGuyConfig.版本);

let ccapi = cc as any;

let inst: StruggleGuyApp;
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
	const qqapi: any = (window as any).qq;
	const qhapi: any = (window as any).qh;
	const ksapi: any = (window as any).ks;
	// if (ksapi != null) {
	// 	inst = new XFireAppKuaiShou();
	// }
	// else if (qqapi != null) {
	// 	inst = new XFireAppQQ();
	// }
	// else if (qhapi != null) {
	//     inst = new XFireAppQihu();
	// }
	// else {
	// 	inst = new XFireAppWechat();
	// }
}
// else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
// 	inst = new XFireAppByteDance();
// }
// else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === cc.sys.ANDROID) {
// 	inst = new XFireAppAndroid();
// }
// else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === cc.sys.DESKTOP_BROWSER) {
// 	inst = new XFireAppDB();
// }
// else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === cc.sys.DESKTOP_BROWSER) {
//     const kaixinapi: any = (window as any).kaixin;
//     const qttapi: any = (window as any).qttGame;
//     const sfapi: any = (window as any).$SF;
//     if (kaixinapi != null) {
//         inst = new XFireAppKaiXin();
//     }
//     else if (qttapi != null) {
//         inst = new XFireAppQuTouTiao();
//     }
//     else if (sfapi != null) {
//         inst = new XFireAppSnowFish();
//     }
//     else {
//         inst = new XFireAppDB();
//     }
// }
// else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === cc.sys.BAIDU_GAME) {
//     inst = new XFireAppBaidu();
// }
// else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === cc.sys.OPPO_GAME) {
// 	inst = new XFireAppOppo();
// }
// else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === cc.sys.VIVO_GAME) {
// 	inst = new XFireAppVivo();
// }
// else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === cc.sys.HUAWEI_GAME) {
// 	inst = new XFireAppHuawei();
// }
// else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === ccapi.sys.XIAOMI_GAME) {
//     inst = new XFireAppXiaomi();
// }
// else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === cc.sys.JKW_GAME) {
//     inst = new XFireAppJKW();
// }
else if (!(cc.sys.platform === cc.sys.WECHAT_GAME) && cc.sys.platform === cc.sys.MOBILE_BROWSER) {
	//     const kaixinapi: any = (window as any).kaixin;
	//     const meizuapi: any = (window as any).mz;
	//     const qttapi: any = (window as any).qttGame;
	//     const ucapi: any = (window as any).uc;
	//     const sfapi: any = (window as any).$SF;
	//     const dqapi: any = (window as any).HXADH5;
	//     if (kaixinapi != null) {
	//         inst = new XFireAppKaiXin();
	//     }
	//     else if (meizuapi != null) {
	//         inst = new XFireAppMeiZu();
	//     }
	//     else if (qttapi != null) {
	//         inst = new XFireAppQuTouTiao();
	//     }
	//     else if (ucapi != null) {
	//         inst = new XFireAppUC();
	//     }
	//     else if (sfapi != null) {
	//         inst = new XFireAppSnowFish();
	//     }
	//     else if (dqapi != null) {
	//         inst = new XFireAppMBDQ();
	//     }
	//     else {
	// inst = new XFireAppMB();
	//     }
}
if (inst == null) {
	inst = new StruggleGuyApp();
}

console.log('xfire plat: ' + inst.plat + ' AD:' + inst.getAdSdkName());

export default inst;
