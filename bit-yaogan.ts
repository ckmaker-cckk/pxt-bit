/**
 * IKBIT PACKAGES
 */
//% weight=1000 color=#436EEE icon="\uf1cb" block="Ckmaker-BIT"
namespace ikbit { 
    const BIT_YAOGAN_ADD = 0X06;
    const REG_YG_X = 0X30;
    const REG_YG_Y = 0X31;   

    export enum yaoganEnum {
        //% block="YAOGAN_X"
        YAOGAN_X = REG_YG_X,
        //% block="YAOGAN_Y"
        YAOGAN_Y = REG_YG_Y
    }
    //%blockId=yaoganGetValue block="BIT-YAOGAN GetValue|%xy"
    //% weight=140 blockGap=30 color=#FFA500
    export function yaoganGetValue(xy: yaoganEnum): number {
        return readReg8(BIT_YAOGAN_ADD, xy);
    }
}
