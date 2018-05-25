/**
 * IKBIT PACKAGES
 */
//% weight=1000 color=#436EEE icon="\uf1cb"
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

    const BIT_LCD1602_ADD = 0X02;

    const REG_1602_CLEAR_SCREEN = 0X30;
    const REG_1602_LINE1_NORMAL = 0X31;
    const REG_1602_LINE2_NORMAL = 0X32;
    const REG_1602_LINE1_SCROLL = 0X33;
    const REG_1602_LINE2_SCROLL = 0X34;
    const REG_1602_BACK_LIGHT = 0X35;

    const BIT_WSG_ADD = 0X03;

    export enum ikbitKeyEnum {
        //% block="KEYA"
        KEYA = 1,
        //% block="KEYB"
        KEYB = 2,
        //% block="KEYC"
        KEYC = 3,
        //% block="KEYD"
        KEYD = 4
    }

    //%blockId=ikbit_keyClick block="BIT-KEY click|%key"
    //% weight=200 blockGap=3 color=#FF3030
    export function keyClick(key: ikbitKeyEnum): boolean {
        let reg = 0;
        if (key == 1) {
            reg = REG_KEYA_SHORT_CLICK;
        }
        else if (key == 2) {
            reg = REG_KEYB_SHORT_CLICK;
        }
        else if (key == 3) {
            reg = REG_KEYC_SHORT_CLICK;
        }
        else if (key == 4) {
            reg = REG_KEYD_SHORT_CLICK;
        }
        pins.i2cWriteNumber(BIT_KEY_ADD, reg, NumberFormat.Int8LE);
        if (pins.i2cReadNumber(BIT_KEY_ADD, NumberFormat.Int8LE)) {
            return true;
        }
        else return false;
    }
    //%blockId=keyLongClick block="BIT-KEY long click|%key"
    //% weight=195 blockGap=3 color=#FF3030
    export function keyLongClick(key: ikbitKeyEnum): boolean {
        let reg = 0;
        if (key == 1) {
            reg = REG_KEYA_LONG_CLICK;
        }
        else if (key == 2) {
            reg = REG_KEYB_LONG_CLICK;
        }
        else if (key == 3) {
            reg = REG_KEYC_LONG_CLICK;
        }
        else if (key == 4) {
            reg = REG_KEYD_LONG_CLICK;
        }
        pins.i2cWriteNumber(BIT_KEY_ADD, reg, NumberFormat.Int8LE);
        if (pins.i2cReadNumber(BIT_KEY_ADD, NumberFormat.Int8LE)) {
            return true;
        }
        else return false;
    }
    //%blockId=keyLongHold block="BIT-KEY long hold|%key"
    //% weight=190 blockGap=20 color=#FF3030
    export function keyLongHold(key: ikbitKeyEnum): boolean {
        let reg = 0;
        if (key == 1) {
            reg = REG_KEYA_LONG_HOLD;
        }
        else if (key == 2) {
            reg = REG_KEYB_LONG_HOLD;
        }
        else if (key == 3) {
            reg = REG_KEYC_LONG_HOLD;
        }
        else if (key == 4) {
            reg = REG_KEYD_LONG_HOLD;
        }
        pins.i2cWriteNumber(BIT_KEY_ADD, reg, NumberFormat.Int8LE);
        if (pins.i2cReadNumber(BIT_KEY_ADD, NumberFormat.Int8LE)) {
            return true;
        }
        else return false;
    }
    /**
     *  clear BIT-LCD1602 screen display
     */
    //% blockId=ikbit_lcd1602ClearScreen block="BIT-LCD1602 clear screen"
    //% weight=186 blockGap=3 color=#2E8B57
    export function lcd1602ClearScreen(): void {
        let buf = pins.createBuffer(1);
        buf[0] = 0x30;
        pins.i2cWriteBuffer(2, buf);

    }
    /**
     * Set BIT-LCD1602 backlight
     * @param value set Backlight level[0-5] , eg: "3"
     */
    //% blockId=ikbit_lcd1602SetBackLight block="BIT-LCD1602 set backlight|%value "
    //% value.min=0 value.max=5
    //% weight=185 blockGap=3 color=#2E8B57
    export function lcd1602SetBackLight(value: number): void {
        let buf = pins.createBuffer(2);
        if (value < 0 || value > 5) { return; }
        buf[0] = REG_1602_BACK_LIGHT;
        buf[1] = value;
        pins.i2cWriteBuffer(BIT_LCD1602_ADD, buf);

    }
    /**
     *  Display a string at a specified location in BIT-LCD1602
     * @param x The location in a line begins to display , eg: "1"
     * @param y The location in a row begins to display , eg: "1"
     */
    //% blockId=ikbit_lcd1602DisString  block="BIT-LCD1602 display string|X|%x |y|%y |%str"
    //% x.min=1  x.max=2
    //% y.min=1  y.max=16
    //% weight=180 blockGap=3 color=#2E8B57
    export function lcd1602DisString(x: number, y: number, str: string): void {
        let size: number;
        if (str.length > 16) size = 16;
        else size = str.length;
        let buf = pins.createBuffer(size + 2);
        if (x == 1) {
            buf[0] = REG_1602_LINE1_NORMAL;
        }
        else if (x == 2) {
            buf[0] = REG_1602_LINE2_NORMAL;
        }
        else { return; }
        if ((y == 0) || (y > 16)) return;
        buf[1] = y;
        for (let i = 0; i < size; i++) {
            buf[2 + i] = str.charCodeAt(i);
        }
        pins.i2cWriteBuffer(BIT_LCD1602_ADD, buf);
    }
    /**
      *  Display a number at a specified location in BIT-LCD1602
      * @param x The location in a line begins to display , eg: "1"
      * @param y The location in a row begins to display , eg: "1"
      */
    //% blockId=ikbit_lcd1602DisNumber  block="BIT-LCD1602 display number|X|%x |y|%y |value|%num"
    //% x.min=1  x.max=2
    //% y.min=1  y.max=16
    //% weight=175 blockGap=30 color=#2E8B57
    export function lcd1602DisNumber(x: number, y: number, n: number): void {
        let str=n.toString();
        lcd1602DisString(x,y,str);
    }
    /**
     *  Scroll display a string at a specified location in BIT-LCD1602
     * @param x The location in a line begins to display , eg: "1"
     * @param y The location in a row begins to display , eg: "1"
     */
    //% blockId=ikbit_lcd1602ScrollDisString block="BIT-LCD1602 scroll display string|X|%x |y|%y |%str"
    //% x.min=1  x.max=2
    //% y.min=1  y.max=16
    //% advanced=true
    //% weight=170 blockGap=3 color=#2E8B57
    export function lcd1602ScrollDisString(x: number, y: number, str: string): void {
        let size: number;
        if (str.length > 16) size = 16;
        else size = str.length;
        let buf = pins.createBuffer(size + 2);
        if (x == 1) {
            buf[0] = REG_1602_LINE1_SCROLL;
        }
        else if (x == 2) {
            buf[0] = REG_1602_LINE2_SCROLL;
        }
        else { return; }
        if ((y == 0) || (y > 16)) return;
        buf[1] = y;
        for (let i = 0; i < size; i++) {
            buf[2 + i] = str.charCodeAt(i);
        }
        pins.i2cWriteBuffer(BIT_LCD1602_ADD, buf);
    }
    /**
      *  Scroll display a number at a specified location in BIT-LCD1602
      * @param x The location in a line begins to display , eg: "1"
      * @param y The location in a row begins to display , eg: "1"
      */
    //% blockId=ikbit_lcd1602ScrollDisNumber  block="BIT-LCD1602 scroll display number|X|%x |y|%y |value|%num"
    //% x.min=1  x.max=2
    //% y.min=1  y.max=16
    //% advanced=true
    //% weight=165 blockGap=30 color=#2E8B57
    export function lcd1602ScrollDisNumber(x: number, y: number, n: number): void {
        let str=n.toString();
        lcd1602ScrollDisString(x,y,str);
    }
    /**
     *  from BIT-WSG get tmperature
     */
    //% blockId=ikbit_wsgGetTem block="BIT-WSG get temperature"
    //% weight=160 blockGap=3 color=#00BFFF
    export function wsgGetTem(): number {
        let tem: number;
        pins.i2cWriteNumber(3, 0x30, NumberFormat.Int8LE);
        tem = pins.i2cReadNumber(3, NumberFormat.Int8LE);
        return tem;
    }
    /**
     *  from BIT-WSG get dampness
     */
    //% blockId="ikbit_wsgGetDam" block="BIT-WSG get dampness"
    //% weight=155 blockGap=3 color=#00BFFF
    export function wsgGetDam(): number {
        let dam: number;
        pins.i2cWriteNumber(3, 0x31, NumberFormat.Int8LE);
        dam = pins.i2cReadNumber(3, NumberFormat.Int8LE);
        return dam;
    }
    /**
     *  from BIT-WSG get luminosity
     */
    //% blockId="ikbit_wsgGetLight" block="BIT-WSG get luminosity"
    //% weight=154 blockGap=30 color=#00BFFF
    export function wsgGetLight(): number {
        let light: number;
        pins.i2cWriteNumber(3, 0x32, NumberFormat.Int8LE);
        light = pins.i2cReadNumber(3, NumberFormat.Int8LE);
        return light;
    }

}
