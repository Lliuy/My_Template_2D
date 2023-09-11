cc.game.on(cc.game.EVENT_GAME_INITED, () => {
    for (const key in UIConfig) {
        let constourt = cc.js.getClassByName(key);
        if (constourt) {
            constourt['UIConfig'] = UIConfig[key];
        }
    }
});

export default class UIConfig {
    public static LayerCover = {
        prefabUrl: 'Prefab/Layer/层_封面',
        type: 'UIScreen'
    };
    public static GameMain = {
        prefabUrl: 'Prefab/Layer/层_关卡',
        type: 'UIScreen'
    };
    public static LayerShop = {
        prefabUrl: 'Prefab/Layer/层_商店',
        type: 'UIScreen'
    };
    public static LayerLocalLevelSelect = {
        prefabUrl: 'Prefab/Layer/层_本地选关',
        type: 'UIScreen'
    };
    public static MainUI = {
        prefabUrl: 'Prefab/Layer/层_游戏',
        type: 'UIScreen'
    };
    public static LayerMysteryBox = {
        prefabUrl: 'Prefab/Layer/层_盲盒',
        type: 'UIScreen'
    };
    public static LayerSignIn = {
        prefabUrl: 'Prefab/Layer/层_签到',
        type: 'UIWindow'
    };
    public static LayerSkinSelect = {
        prefabUrl: 'Prefab/Layer/层_选择皮肤',
        type: 'UIScreen'
    };
    public static LayerCustomItems = {
        prefabUrl: 'Prefab/Layer/层_定制道具',
        type: 'UIScreen'
    };
    public static LayerCreatePlayer = {
        prefabUrl: 'Prefab/Layer/层_创建角色',
        type: 'UIScreen'
    };
    public static LayerTask = {
        prefabUrl: 'Prefab/Layer/层_每日任务',
        type: 'UIWindow'
    }
    public static PageBulletin = {
        prefabUrl: 'Prefab/Page/页_公告',
        type: 'UITips'
    };
    public static PageNotice = {
        prefabUrl: 'Prefab/Page/页_弹窗提示',
        type: 'UITips'
    };
    public static PageJoinRoom = {
        prefabUrl: 'Prefab/Page/页_加入房间',
        type: 'UIWindow'
    };
    public static PageFriendListView = {
        prefabUrl: 'Prefab/Page/页_好友列表',
        type: 'UIWindow'
    };
    public static PageFriendInviteListView = {
        prefabUrl: 'Prefab/Page/页_好友邀请列表',
        type: 'UIWindow'
    };
    public static PageRoom = {
        prefabUrl: 'Prefab/Page/页_房间',
        type: 'UIScreen'
    };
    public static PageShowPlayerInfo = {
        prefabUrl: 'Prefab/Page/页_玩家信息',
        type: 'UIWindow'
    };
    public static PageMysteryBoxRewardPreview = {
        prefabUrl: 'Prefab/Page/页_盲盒奖励一览',
        type: 'UIWindow'
    };
    public static PageEnd = {
        prefabUrl: 'Prefab/Page/页_关卡结束',
        type: 'UIWindow'
    };
    public static PageGetReward = {
        prefabUrl: 'Prefab/Page/页_获得奖励',
        type: 'UIWindow'
    };
    public static PageUnlockNewLevel = {
        prefabUrl: 'Prefab/Page/页_解锁新关卡',
        type: 'UIWindow'
    };
    public static PageKick = {
        prefabUrl: 'Prefab/Page/页_踢人弹窗',
        type: 'UIWindow'
    };
    public static PageInputRoomNo = {
        prefabUrl: 'Prefab/Page/页_输入房间号',
        type: 'UIWindow'
    };
    public static PageExitPenalty = {
        prefabUrl: 'Prefab/Page/页_退出惩罚',
        type: 'UIWindow'
    };
    public static PageExitRoom = {
        prefabUrl: 'Prefab/Page/页_退出房间',
        type: 'UIWindow'
    };
    public static PageSelectPeopleNumber = {
        prefabUrl: 'Prefab/Page/页_选择人数',
        type: 'UIWindow'
    };
    public static PageExtraSignIn = {
        prefabUrl: 'Prefab/Page/页_额外签到',
        type: 'UIWindow'
    };
    public static PageSelfInfo = {
        prefabUrl: 'Prefab/Page/页_个人信息',
        type: 'UIWindow'
    };
    public static PageLevelUp = {
        prefabUrl: 'Prefab/Page/页_等级提升',
        type: 'UITips'
    };
    public static PageTeammateDropped = {
        prefabUrl: 'Prefab/Page/页_队友掉线',
        type: 'UIWindow'
    };
    public static PageMysteryReward = {
        prefabUrl: 'Prefab/Page/页_神秘奖励',
        type: 'UIWindow'
    };
    public static NodeToast = {
        prefabUrl: 'Prefab/NodeUI/结点_通知',
        type: 'Toast',
    };
    public static PageServerBusy = {
        prefabUrl: 'Prefab/Page/页_服务器维护',
        type: 'UITips'
    };
    public static LayerLoading = {
        prefabUrl: 'Prefab/Layer/层_加载',
        type: 'UITips'
    };
    public static PagePrivacy = {
        prefabUrl: 'Prefab/Page/页_隐私协议',
        type: 'UITips'
    };

    public static PageSelectActivityLevel = {
        prefabUrl: 'Prefab/Page/页_活动关卡',
        type: 'UIScreen'
    };
    public static PageDailyLevel = {
        prefabUrl: 'Prefab/Page/页_每日关卡',
        type: 'UIWindow'
    };
    //关卡相关
    public static PageChallenge = {
        prefabUrl: 'Prefab/Page/页_关卡挑战',
        type: 'UIWindow'
    };
    public static PageGiftBag = {
        prefabUrl: 'Prefab/Page/页_礼包',
        type: 'UIWindow'
    };
    public static PageSelectMode = {
        prefabUrl: 'Prefab/Page/页_选择模式',
        type: 'UIWindow'
    };
    public static PageTest = {
        prefabUrl: 'Prefab/Page/页_测试',
        type: 'UIWindow'
    };
    public static PageLevelTarget = {
        prefabUrl: 'Prefab/Page/页_关卡目标',
        type: 'UIWindow'
    };
    public static PageSet = {
        prefabUrl: 'Prefab/Page/页_设置',
        type: 'UIWindow'
    };
    public static PagePointsCard = {
        prefabUrl: 'Prefab/Page/页_计分牌',
        type: 'UIWindow'
    };
    public static PageSelectLevel = {
        prefabUrl: 'Prefab/Page/页_选关测试',
        type: 'UIWindow'
    };
    public static PageActLevelFailed = {
        prefabUrl: 'Prefab/Page/页_活动关卡结算',
        type: 'UIWindow'
    };
    public static PageEndReward = {
        prefabUrl: 'Prefab/Page/页_结算奖励',
        type: 'UIWindow'
    };
    public static PageVip = {
        prefabUrl: 'Prefab/Page/页_VIP',
        type: 'UIWindow'
    };
    public static PageFirstRechargeReward = {
        prefabUrl: 'Prefab/Page/页_首充奖励',
        type: 'UIWindow'
    };
    public static PageGiftColorful = {
        prefabUrl: 'Prefab/Page/页_礼包_炫彩',
        type: 'UIWindow'
    };
    public static PageGiftNewPlayer = {
        prefabUrl: 'Prefab/Page/页_礼包_新人',
        type: 'UIWindow'
    };
    public static PageSevenDayChallenge = {
        prefabUrl: 'Prefab/Page/页_礼包_7日挑战',
        type: 'UIWindow'
    };
    public static PageGameStartReward = {
        prefabUrl: 'Prefab/Page/页_开局奖励',
        type: 'UIWindow'
    };
    public static PageSwitchModel = {
        prefabUrl: 'Prefab/Page/页_切换模式',
        type: 'UIWindow'
    }
    public static PageRacingEnd = {
        prefabUrl: 'Prefab/Page/页_吃鸡结束',
        type: 'UIWindow'
    }
    public static PageRacingSelectLevel = {
        prefabUrl: 'Prefab/Page/页_吃鸡模式选关',
        type: 'UIWindow'
    }
    public static PageToplist = {
        prefabUrl: 'Prefab/Page/页_关卡表现',
        type: 'UIWindow'
    };
    public static PageMysteryBoxBroadcast = {
        prefabUrl: 'Prefab/Page/页_盲盒宣传',
        type: 'UIWindow'
    }
    public static PageEveryDayFirstPassReward = {
        prefabUrl: 'Prefab/Page/页_每日首通奖励',
        type: 'UIWindow'
    }
    public static PageWatchAdReward = {
        prefabUrl: 'Prefab/Page/页_观看视频奖励',
        type: 'UIWindow'
    }
}
