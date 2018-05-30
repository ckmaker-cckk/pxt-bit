/**
 * IKBIT PACKAGES
 */
//% weight=1000 color=#436EEE icon="\uf1cb" block="Ckmaker-BIT"
namespace ikbit {
    const BIT_KEY_ADD = 0X01;

    const REG_KEYA_SHORT_CLICK = 0X30;
    const REG_KEYB_SHORT_CLICK = 0X31;
    const REG_KEYC_SHORT_CLICK = 0X32;
    const REG_KEYD_SHORT_CLICK = 0X33;
    const REG_KEYA_LONG_CLICK = 0X34;
    const REG_KEYB_LONG_CLICK = 0X35;
    const REG_KEYC_LONG_CLICK = 0X36
    const REG_KEYD_LONG_CLICK = 0X37;
    const REG_KEYA_LONG_HOLD = 0X38;
    const REG_KEYB_LONG_HOLD = 0X39;
    const REG_KEYC_LONG_HOLD = 0X3A;
    const REG_KEYD_LONG_HOLD = 0X3B;



    const BIT_WSG_ADD = 0X03;

    export enum ikbitKeyEnum {
        //% block="KEYA"
        KEYA = 0,
        //% block="KEYB"
        KEYB = 1,
        //% block="KEYC"
        KEYC = 2,
        //% block="KEYD"
        KEYD = 3
    }

    //%blockId=keyClick block="BIT-KEY Click|%key"
    //% weight=180 blockGap=3 color=#FF3030
    export function keyClick(key: ikbitKeyEnum): boolean {

        if (readReg8(BIT_KEY_ADD, key + REG_KEYA_SHORT_CLICK))
            return true;
        else return false;
    }
    //%blockId=keyLongClick block="BIT-KEY LongClick|%key"
    //% weight=179 blockGap=3 color=#FF3030
    export function keyLongClick(key: ikbitKeyEnum): boolean {
        if (readReg8(BIT_KEY_ADD, key + REG_KEYA_LONG_CLICK))
            return true;
        else return false;
    }
    //%blockId=keyLongHold block="BIT-KEY LongHold|%key"
    //% weight=178 blockGap=30 color=#FF3030
    export function keyLongHold(key: ikbitKeyEnum): boolean {
        if (readReg8(BIT_KEY_ADD, key + REG_KEYA_LONG_HOLD))
            return true;
        else return false;
    }

}