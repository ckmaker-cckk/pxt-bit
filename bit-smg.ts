/**
 * IKBIT PACKAGES
 */
//% weight=1000 color=#436EEE icon="\uf1cb"
namespace ikbit { 

    const BIT_SMG_ADD = 0X07;
    const REG_SMG_DIS_MODE = 0X30;
    const REG_SMG_NORMAL_DIS_DATA = 0X31;
    const REG_SMG_ROLL_DIS_DATA = 0X32;
    const REG_SMG_LIGHTENESS = 0X33;
    const REG_SMG_ONEBIT_NUMBER = 0X34;
    const REG_SMG_ONEBIT_CODE = 0X35;
    const REG_SMG_ONEBIT_BLINK = 0X36;
    const REG_SMG_CLEAR_BLINK = 0X37;
    const REG_SMG_CLEAR_DISPLAY = 0X38;  

    //%block
    export function smgDisNumber(num: number) {
        let tnum=num.toString();
        let size = tnum.length;
        if (size > 4) size = 4;
        let tbuf=pins.createBuffer(size);
        copyStrToBuf(tnum,tbuf, 0, 4);        
        writeRegBuf(BIT_SMG_ADD,REG_SMG_NORMAL_DIS_DATA,tbuf);
    }
}