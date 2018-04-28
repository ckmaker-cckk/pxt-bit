// tests go here; this will not be compiled when this package is used as a library
ikbit.lcd1602ClearScreen()
ikbit.lcd1602SetBackLight(3)
basic.forever(() => {
    if (ikbit.keyClick(ikbit.ikbitKeyEnum.KEYA)) {
        ikbit.lcd1602DisString(1, 1, "1")
    }
    if (ikbit.keyClick(ikbit.ikbitKeyEnum.KEYB)) {
        ikbit.lcd1602DisString(1, 1, "2")
    }
    if (ikbit.keyClick(ikbit.ikbitKeyEnum.KEYC)) {
        ikbit.lcd1602DisString(1, 1, "3")
    }
    if (ikbit.keyClick(ikbit.ikbitKeyEnum.KEYD)) {
        ikbit.lcd1602DisString(1, 1, "4")
    }
})
