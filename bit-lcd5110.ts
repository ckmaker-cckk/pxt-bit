/**
 * IKBIT PACKAGES
 */
//% weight=990 color=#436EEE icon="\uf1cb"
namespace bitLcd5110 { 
    const BIT_LCD5110_ADD = 0X04;
    //模块特殊指令
    const REG_5110_SOFT_VER = 0X30;        
    const REG_5110_DRAW=0X31;
    const REG_5110_MENU = 0X32;
    const REG_5110_GAME1 = 0X33;
    const REG_5110_SAVER = 0X34;
    const REG_5110_POPUP = 0X35;
    const REG_5110_GAME2 = 0X36;
    const REG_5110_GAME3 = 0X37;
 
    const REG_5110_UP = 0X50;
    const REG_5110_DOWN = 0X51;
    const REG_5110_LEFT = 0X52;
    const REG_5110_RIGHT = 0X53;
    const REG_5110_NUMBER = 0X54;
    const REG_5110_START = 0X55;
    const REG_5110_RETURN = 0X56;
    const REG_5110_MENU_ADD_ITEM = 0X40;
    const REG_5110_MENU_NOW_ITEM = 0X41;
    const REG_5110_MENU_CLEAR_ITEM = 0X42;
    
    const REG_5110_LINE = 0X60;
    const REG_5110_VLINE = 0X61;
    const REG_5110_HLINE = 0X62;
    const REG_5110_RECT = 0X63;
    const REG_5110_FILL_RECT = 0x64;
    const REG_5110_FILL_SCREEN = 0X65;
    const REG_5110_CIRCLE = 0X66;
    const REG_5110_PART_CIRCLE = 0X67;
    const REG_5110_FILL_CIRCLE = 0X68;
    const REG_5110_FILL_PART_CIRCLE = 0X69;
    const REG_5110_TRIANGLE = 0X6A;
    const REG_5110_FILL_TRIANGLE = 0X6B;
    const REG_5110_ROUND_RECT = 0X6C;
    const REG_5110_FILL_ROUND_RECT = 0X6D;
    const REG_5110_BITMAP = 0X6E;
    const REG_5110_PRINT = 0X6F;
    const REG_5110_PRINTLN = 0X70;
    const REG_5110_DRAW_CHAR = 0X71;
    const REG_5110_SET_CURSOR = 0X72;
    const REG_5110_DRAW_PIXEL = 0X73;
    const REG_5110_CLEAR_SCREEN = 0X74;
    const REG_5110_BACKLIGHT = 0X80;
    

    export enum CirclePart_4Enum {
        //% block="PART1"
        PART1 = 0X01,
        //% block="PART2"
        PART2 = 0X02,
        //% block="PART3"
        PART3 = 0X04,
        //% block="PART4"
        PART4 = 0X08
    }
    export enum CirclePart_2Enum {
        //% block="PART1"
        PART1 = 0X01,
        //% block="PART2"
        PART2 = 0X02
    }
    export enum cmdEnum {
        //% block="UP"
        UP = REG_5110_UP,
        //% block="DOWN"
        DOWN = REG_5110_DOWN,
        //% block="LEFT"
        LEFT = REG_5110_LEFT,
        //% block="RIGHT"
        RIGHT = REG_5110_RIGHT,
        //% block="SURE"
        SURE = REG_5110_START,
        //% block="RETURN"
        RETURN = REG_5110_RETURN        
    }
    export enum backLightEnum {
        //% block="NONE"
        BACKLIGHT_NONE = 0X00,
        //% block="YELLOW"
        BACKLIGHT_YELLO = 0X01,
        //% block="BULE"
        BACKLIGHT_BLUE = 0X02,
    }
    /**
      *  
      * @param ballsize set ball size, eg: "5"
      */
    //%blockId=lcd5110DisGame1Mode block="BIT-LCD5110 Game1Mode|ballsize|%ballsize"
    //% weight=195 blockGap=3 color=#FF4500
    //%ballsize.min=1 ballsize.max=40
    export function lcd5110DisGame1Mode(ballsize: number): void { 
        let tbuf = pins.createBuffer(1);
        if (ballsize > 40) ballsize = 40;
        else if (ballsize < 1) ballsize = 1;
        tbuf[0] = ballsize;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_GAME1,tbuf);
    }
    /**
      *  
      * @param level set game level, eg: "1"
      */
    //%blockId=lcd5110DisGame2Mode block="BIT-LCD5110 Game2Mode|level %level"
    //% weight=194 blockGap=3 color=#FF4500
    //% level.min=1 level.max=5
    export function lcd5110DisGame2Mode(level: number): void { 
        let tbuf = pins.createBuffer(1);
        if (level > 5) level = 5;
        else if (level < 1) level = 1;
        tbuf[0] = level;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_GAME2,tbuf);
    }
    /**
      *  
      * @param level set game level, eg: "1"
      */
    //%blockId=lcd5110DisGame3Mode block="BIT-LCD5110 Game3Mode|level %level"
    //% weight=193 blockGap=30 color=#FF4500
    //% level.min=1 level.max=3
    export function lcd5110DisGame3Mode(level: number): void { 
        let tbuf = pins.createBuffer(1);
        if (level > 3) level = 3;
        else if (level < 1) level = 1;
        tbuf[0] = level;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_GAME3,tbuf);
    }


    //%blockId=lcd5110Cmd block="BIT-LCD5110 Cmd|%cmd"
    //% weight=180 blockGap=3 color=#008B8B
    export function lcd5110Cmd(cmd:cmdEnum): void { 
        ikbit.writeReg(BIT_LCD5110_ADD,cmd);
    }
    //%blockId=lcd5110CmdNumber block="BIT-LCD5110 CmdNumber|%num"
    //% weight=179 blockGap=30 color=#008B8B
    export function lcd5110CmdNumber(num:number): void { 
        let tbuf = pins.createBuffer(1);
        tbuf[0] = num;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_NUMBER,tbuf);
    }



    //%blockId=lcd5110DisMenuMode block="BIT-LCD5110 MenuMode"
    //% weight=170 blockGap=3 color=#9B30FF
    export function lcd5110DisMenuMode(): void { 
        ikbit.writeReg(BIT_LCD5110_ADD,REG_5110_MENU);
    }
    //%blockId=lcd5110MenuAddItem block="BIT-LCD5110 MenuAddItem|%str"
    //% weight=169 blockGap=3 color=#9B30FF
    export function lcd5110MenuAddItem(str: string): void { 
        let tsize = str.length;
        let tbuf = pins.createBuffer(tsize);
        ikbit.copyStrToBuf(str, tbuf, 0, tsize);
        ikbit.writeRegBuf(BIT_LCD5110_ADD,REG_5110_MENU_ADD_ITEM,tbuf);
    }
    //%blockId=lcd5110MenuCheckNowItem block="BIT-LCD5110 MenuCheckNowItem"
    //% weight=168 blockGap=3 color=#9B30FF
    export function lcd5110MenuCheckNowItem(): number { 
        return ikbit.readReg8(BIT_LCD5110_ADD,REG_5110_MENU_NOW_ITEM);
    }
    //%blockId=lcd5110MenuClearItem block="BIT-LCD5110 MenuClearItem"
    //% weight=167 blockGap=30 color=#9B30FF
    export function lcd5110MenuClearItem(): void { 
        ikbit.writeReg(BIT_LCD5110_ADD,REG_5110_MENU_CLEAR_ITEM);
    }



    //%blockId=lcd5110Popup block="BIT-LCD5110 Popup|%str|time|%time"
    //% weight=160 blockGap=3 color=#00CED1
    export function lcd5110Popup(str:string,time:number) { 
        let tsize = str.length;
        if (tsize > 13) tsize = 13;
        let tbuf = pins.createBuffer(tsize + 2);
        tbuf[0] = tsize;
        tbuf[1] = time*20;   //sec
        ikbit.copyStrToBuf(str,tbuf,2,tsize);
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_POPUP,tbuf);
    }
    //%blockId=lcd5110DisVersionMode block="BIT-LCD5110 VersionMode"
    //% weight=159 blockGap=3 color=#00CED1
    export function lcd5110DisVersionMode(): void { 
        ikbit.writeReg(BIT_LCD5110_ADD,REG_5110_SOFT_VER);
    }
    //%blockId=lcd5110ScreenSaverMode block="BIT-LCD5110 ScreenSaverMode"
    //% weight=158 blockGap=3 color=#00CED1
    export function lcd5110ScreenSaverMode(): void { 
        ikbit.writeReg(BIT_LCD5110_ADD,REG_5110_SAVER);
    }
    //%blockId=lcd5110BackLight block="BIT-LCD5110 BackLight|%light"
    //% weight=158 blockGap=30 color=#00CED1
    export function lcd5110BackLight(light:backLightEnum): void { 
        let tbuf=pins.createBuffer(1);
        tbuf[0] = light;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_BACKLIGHT,tbuf);
    }



    //%blockId=lcd5110DisDrawMode block="BIT-LCD5110 DrawMode"
    //% weight=150 blockGap=3 color=#0000CD
    export function lcd5110DisDrawMode(): void { 
        ikbit.writeReg(BIT_LCD5110_ADD,REG_5110_DRAW);
    }
    //%blockId=lcd5110DrawPixel block="BIT-LCD5110 DrawPixel|x %x|y %y"
    //% weight=149 blockGap=3 color=#0000CD
    export function lcd5110DrawPixel(x: number, y: number): void { 
        let tbuf = pins.createBuffer(2);
        tbuf[0]=x;
        tbuf[1]=y;  
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_DRAW_PIXEL,tbuf);
    }
    //%blockId=lcd5110DrawLine block="BIT-LCD5110 DrawLine|x0 %x0|y0 %y0|x1 %x1|y1 %y1"
    //% weight=148 blockGap=3 color=#0000CD
    export function lcd5110DrawLine(x0:number,y0:number,x1:number,y1:number) { 
        let tbuf = pins.createBuffer(4);
        tbuf[0] = x0;
        tbuf[1] = y0;
        tbuf[2] = x1;
        tbuf[3] = y1;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_LINE,tbuf);
    }
    //%blockId=lcd5110DrawVLine block="BIT-LCD5110 DrawVLine|x %x|y %y|h %h"
    //% weight=147 blockGap=3 color=#0000CD
    export function lcd5110DrawVLine(x:number,y:number,h:number) { 
        let tbuf = pins.createBuffer(3);
        tbuf[0] = x;
        tbuf[1] = y;
        tbuf[2] = h;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_VLINE,tbuf);
    }
    //%blockId=lcd5110DrawHLine block="BIT-LCD5110 DrawHLine|x %x|y %y|w %w"
    //% weight=146 blockGap=3 color=#0000CD
    export function lcd5110DrawHLine(x:number,y:number,w:number) { 
        let tbuf = pins.createBuffer(3);
        tbuf[0] = x;
        tbuf[1] = y;
        tbuf[2] = w;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_HLINE,tbuf);
    }
    //%blockId=lcd5110DrawRect block="BIT-LCD5110 DrawRect|x %x|y %y|w %w|h %h"
    //% weight=145 blockGap=3 color=#0000CD
    export function lcd5110DrawRect(x:number,y:number,w:number,h:number) { 
        let tbuf = pins.createBuffer(4);
        tbuf[0] = x;
        tbuf[1] = y;
        tbuf[2] = w;
        tbuf[3] = h;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_RECT,tbuf);
    }
    //%blockId=lcd5110FillRect block="BIT-LCD5110 FillRect|x %x|y %y|w %w|h %h"
    //% weight=144 blockGap=3 color=#0000CD
    export function lcd5110FillRect(x:number,y:number,w:number,h:number) { 
        let tbuf = pins.createBuffer(4);
        tbuf[0] = x;
        tbuf[1] = y;
        tbuf[2] = w;
        tbuf[3] = h;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_FILL_RECT,tbuf);
    }
    //%blockId=lcd5110FillScreen block="BIT-LCD5110 FillScreen"
    //% weight=143 blockGap=3 color=#0000CD
    export function lcd5110FillScreen() { 
        ikbit.writeReg(BIT_LCD5110_ADD,REG_5110_FILL_SCREEN);    
    }
    //%blockId=lcd5110ClearScreen block="BIT-LCD5110 ClearScreen"
    //% weight=143 blockGap=3 color=#0000CD
    export function lcd5110ClearScreen() { 
        ikbit.writeReg(BIT_LCD5110_ADD,REG_5110_CLEAR_SCREEN);    
    }
    //%blockId=lcd5110DrawCircle block="BIT-LCD5110 DrawCircle|x %x|y %y|r %r"
    //% weight=142 blockGap=3 color=#0000CD
    export function lcd5110DrawCircle(x:number,y:number,r:number) { 
        let tbuf = pins.createBuffer(3);
        tbuf[0] = x;
        tbuf[1] = y;
        tbuf[2] = r;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_CIRCLE,tbuf);
    }
    //%blockId=lcd5110FillCircle block="BIT-LCD5110 FillCircle|x %x|y %y|r %r"
    //% weight=141 blockGap=3 color=#0000CD
    export function lcd5110FillCircle(x:number,y:number,r:number) { 
        let tbuf = pins.createBuffer(3);
        tbuf[0] = x;
        tbuf[1] = y;
        tbuf[2] = r;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_FILL_CIRCLE,tbuf);
    }
    //%blockId=lcd5110DrawPartCircle block="BIT-LCD5110 DrawPartCircle|x %x|y %y|r %r|p %p"
    //% weight=140 blockGap=3 color=#0000CD
    export function lcd5110DrawPartCircle(x:number,y:number,r:number,p:CirclePart_4Enum) { 
        let tbuf = pins.createBuffer(4);
        tbuf[0] = x;
        tbuf[1] = y;
        tbuf[2] = r;
        tbuf[3] = p;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_PART_CIRCLE,tbuf);
    }
    //%blockId=lcd5110DrawTriangle block="BIT-LCD5110 DrawTriangle|x0 %x0|y0 %y0|x1 %x1|y1 %y1|x2 %x2|y2 %y2"
    //% weight=139 blockGap=3 color=#0000CD
    export function lcd5110DrawTriangle(x0:number,y0:number,x1:number,y1:number,x2:number,y2:number): void { 
        let tbuf = pins.createBuffer(6);
        tbuf[0]=x0;
        tbuf[1]=y0;
        tbuf[2]=x1;
        tbuf[3]=y1;
        tbuf[4]=x2;
        tbuf[5] = y2;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_TRIANGLE,tbuf);
    }
    //%blockId=lcd5110FillTriangle block="BIT-LCD5110 FillTriangle|x0 %x0|y0 %y0|x1 %x1|y1 %y1|x2 %x2|y2 %y2"
    //% weight=138 blockGap=3 color=#0000CD
    export function lcd5110FillTriangle(x0:number,y0:number,x1:number,y1:number,x2:number,y2:number): void { 
        let tbuf = pins.createBuffer(6);
        tbuf[0]=x0;
        tbuf[1]=y0;
        tbuf[2]=x1;
        tbuf[3]=y1;
        tbuf[4]=x2;
        tbuf[5] = y2;
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_FILL_TRIANGLE,tbuf);
    }
    //%blockId=lcd5110RoundRect block="BIT-LCD5110 RoundRect|x %x|y %y|w %w|h %h|r %r"
    //% weight=137 blockGap=3 color=#0000CD
    export function lcd5110RoundRect(x: number, y: number, w: number, h: number, r: number): void { 
        let tbuf = pins.createBuffer(5);
        tbuf[0]=x;
        tbuf[1]=y;
        tbuf[2]=w;
        tbuf[3]=h;
        tbuf[4] = r;    
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_ROUND_RECT,tbuf);
    }
    //%blockId=lcd5110SetCursor block="BIT-LCD5110 SetCursor|x %x|y %y"
    //% weight=136 blockGap=3 color=#0000CD
    export function lcd5110SetCursor(x: number, y: number): void { 
        let tbuf = pins.createBuffer(2);
        tbuf[0]=x;
        tbuf[1]=y;  
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_SET_CURSOR,tbuf);
    }    
    //%blockId=lcd5110Print block="BIT-LCD5110 Print|str %str"
    //% weight=135 blockGap=3 color=#0000CD
    export function lcd5110Print(str: string): void { 
        let size = str.length;
        let tbuf = pins.createBuffer(size);
        ikbit.copyStrToBuf(str, tbuf, 0, size);
        ikbit.writeRegBuf(BIT_LCD5110_ADD,REG_5110_PRINT,tbuf);
    }

    //%blockId=lcd5110Println block="BIT-LCD5110 Println|str %str"
    //% weight=134 blockGap=3 color=#0000CD
    export function lcd5110Println(str: string): void { 
        let size = str.length;
        let tbuf = pins.createBuffer(size);
        ikbit.copyStrToBuf(str, tbuf, 0, size);
        ikbit.writeRegBuf(BIT_LCD5110_ADD,REG_5110_PRINTLN,tbuf);
    }
    //%blockId=lcd5110DrawChar block="BIT-LCD5110 DrawChar|x %x|y %y|c %c|size %size"
    //% weight=132 blockGap=30 color=#0000CD
    export function lcd5110DrawChar(x: number, y: number, c: number, size: number): void { 
        let tbuf = pins.createBuffer(4);
        tbuf[0]=x;
        tbuf[1]=y;
        tbuf[2]=c;
        tbuf[3]=size;  
        ikbit.writeRegBufNoLength(BIT_LCD5110_ADD,REG_5110_DRAW_CHAR,tbuf);
    } 
    

}