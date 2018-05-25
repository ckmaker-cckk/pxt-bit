/**
 * IKBIT PACKAGES
 */
//% weight=1000 color=#436EEE icon="\uf1cb"
namespace ikbit { 
    const BIT_KEYBOARD_ADD = 0X05;
    const REG_KB_SHORT_RELEASE_BASE = 0X30;
    const REG_KB_LONG_RELEASE_BASE = 0X40;
    const REG_KB_LONG_HOLD_BASE = 0X50;
    

    export enum keyBoardEnum {
        //% block="KEY0"
        KEY_0 = 0,
        //% block="KEY1"
        KEY_1,
        //% block="KEY2"
        KEY_2,
        //% block="KEY3"
        KEY_3,
        //% block="KEY4"
        KEY_4,
        //% block="KEY5"
        KEY_5,
        //% block="KEY6"
        KEY_6,
        //% block="KEY7"
        KEY_7,
        //% block="KEY8"
        KEY_8,
        //% block="KEY9"
        KEY_9,
        //% block="KEYA"
        KEY_A,
        //% block="KEYB"
        KEY_B,
        //% block="KEYC"
        KEY_C,
        //% block="KEYD"
        KEY_D,
        //% block="KEYE"
        KEY_E,
        //% block="KEYF"
        KEY_F
    }
    //%blockId=keyBoardClickState block="BIT-KEYBOARD ClickState|%k"
    //% weight=130 blockGap=3 color=#BA55D3
    export function keyBoardClickState(k: keyBoardEnum) :boolean{ 
        let value = readReg8(BIT_KEYBOARD_ADD, REG_KB_SHORT_RELEASE_BASE + k);
        if (value) return true;
        else return false;
    }
    //%blockId=keyBoardLongClickState block="BIT-KEYBOARD LongClickState|%k"
    //% weight=129 blockGap=3 color=#BA55D3
    export function keyBoardLongClickState(k: keyBoardEnum) :boolean{ 
        let value = readReg8(BIT_KEYBOARD_ADD, REG_KB_LONG_RELEASE_BASE + k);
        if (value) return true;
        else return false;
    }
    //%blockId=keyBoardLongHoldState block="BIT-KEYBOARD LongHoldState|%k"
    //% weight=128 blockGap=30 color=#BA55D3
    export function keyBoardLongHoldState(k: keyBoardEnum) :boolean{ 
        let value = readReg8(BIT_KEYBOARD_ADD, REG_KB_LONG_HOLD_BASE + k);
        if (value) return true;
        else return false;
    }
}
