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

    //%blockId=smgDisNumber block="BIT-SMG DisNumber|%num"
    //% weight=140 blockGap=3 color=#0000FF
    export function smgDisNumber(num: number) {
        let tnum=num.toString();
        let size = tnum.length;
        if (size > 4) size = 4;
        let tbuf=pins.createBuffer(size);
        copyStrToBuf(tnum,tbuf, 0,size);        
        writeRegBuf(BIT_SMG_ADD,REG_SMG_NORMAL_DIS_DATA,tbuf);
    }
    //%blockId=smgRollDisNumber block="BIT-SMG RollDisNumber|%num"
    //% weight=140 blockGap=3 color=#0000FF
    export function smgRollDisNumber(num: number) { 
        let tnum=num.toString();
        let size = tnum.length;
        if (size > 10) size = 10;
        let tbuf=pins.createBuffer(size);
        copyStrToBuf(tnum,tbuf, 0, size);        
        writeRegBuf(BIT_SMG_ADD,REG_SMG_ROLL_DIS_DATA,tbuf);        
    }
    //%blockId=smgSetLighteness block="BIT-SMG Lighteness|%level"
    //% weight=140 blockGap=3 color=#0000FF
    //%level.min=0 level.max=3
    export function smgSetLighteness(level: number) { 
        let tbuf = pins.createBuffer(1);
        tbuf[0] = level;
        writeRegBufNoLength(BIT_SMG_ADD,REG_SMG_LIGHTENESS,tbuf);
    }
    //%blockId=smgSetOneBitNumber block="BIT-SMG SetOneBitNumber|s %s|d %d"
    //% weight=140 blockGap=3 color=#0000FF
    //% s.min=0 s.max=3
    export function smgSetOneBitNumber(s: number, d: number): void{
        if (s > 10) return ;
        let tbuf = pins.createBuffer(2);
        tbuf[0] = s;
        tbuf[1] = d;
        writeRegBufNoLength(BIT_SMG_ADD,REG_SMG_ONEBIT_NUMBER,tbuf);        
    }
    //%blockId=smgSetOneBitCode block="BIT-SMG SetOneBitCode|s %s|d %d"
    //% weight=140 blockGap=3 color=#0000FF
    //% s.min=0 s.max=3
    export function smgSetOneBitCode(s: number, d: number): void{
        if (s > 10) return ;
        let tbuf = pins.createBuffer(2);
        tbuf[0] = s;
        tbuf[1] = d;
        writeRegBufNoLength(BIT_SMG_ADD,REG_SMG_ONEBIT_CODE,tbuf);        
    }
    //%blockId=smgSetBlinkOneBit block="BIT-SMG SetBlinkOneBit|%s"
    //% weight=140 blockGap=3 color=#0000FF
    //% s.min=0 s.max=3
    export function smgSetBlinkOneBit(s: number) { 
        if (s > 4) return;
        let tbuf = pins.createBuffer(1);
        tbuf[0] = s;
        writeRegBufNoLength(BIT_SMG_ADD,REG_SMG_ONEBIT_BLINK,tbuf); 
    }
    //%blockId=smgClearBlink block="BIT-SMG ClearBlink"
    //% weight=140 blockGap=3 color=#0000FF
    export function smgClearBlink(): void { 
        writeReg(BIT_SMG_ADD,REG_SMG_CLEAR_BLINK);
    }
    //%blockId=smgClearDisplay block="BIT-SMG ClearDisplay"
    //% weight=140 blockGap=30 color=#0000FF
    export function smgClearDisplay(): void { 
        writeReg(BIT_SMG_ADD,REG_SMG_CLEAR_DISPLAY);    
    }
    
}