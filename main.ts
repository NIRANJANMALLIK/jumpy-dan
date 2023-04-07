namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const flower2 = SpriteKind.create()
    export const ball = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    current_level += 1
    startlevel()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpy.vy == 0) {
        jumpy.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpy.vy == 0) {
        jumpy.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (jumpy.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
    if (info.life() == 0) {
        music.stopAllSounds()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    coin2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    coin2,
    [img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .....fffc1111111f.......
        ...fc111cd1111111f......
        ...f1b1b1b1111dddf......
        ...fbfbffcf11fcddf......
        ......fcf111111bbf......
        .......ccbdb1b1fcf......
        .......fffbfbfdff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc111cf....
        .........fffff1b1b1f....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd111111111f......
        ......fd11111111df......
        ......fd11111111df......
        ......fcdd1111ddcff.....
        .......fbcf11fcbfbbf....
        .......ffbdb1bdffff.....
        ........fcbfbfdf........
        ........ffffffff........
        ......ffffffffff........
        .....fcb1bcffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fdd111111ddf......
        ......fbdd1111dddf......
        ......fcdbfddfbdbf......
        .......fbcf11fcbfff.....
        .......ffb1111bcfbcf....
        ........fcdb1bdfbbbf....
        .......ffffffffffcf.....
        .....fcb1bcfffff........
        .....f1b1b1ffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    true
    )
    coin2.setPosition(jumpy.x + 80, jumpy.y - 80)
    coin2.follow(jumpy)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    coin2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    coin2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 1 1 1 f 1 1 1 f . . . 
        . . . . f 1 1 1 1 1 1 1 f . . . 
        . . . . . . 1 1 f 1 1 . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f f 5 5 5 f 5 5 5 f f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . f f 5 5 5 f 5 5 5 f f . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    coin2.setPosition(jumpy.x + 80, jumpy.y - 80)
    coin2.follow(jumpy)
})
function startlevel () {
    if (current_level == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (current_level == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (current_level == 2) {
        music.stopAllSounds()
        music.play(music.createSong(hex`0078000408020303001c0001dc00690000045e010004000000000000000000000564000104000336000000040002222508000c00011e10001400021e2018001c00021e202000240002202428002c00011e3000340002202738003c0002202404001c00100500640000041e000004000000000000000000000000000a040004200008000c00012410001400012718001c0002222720002400011d28002c0002252905001c000f0a006400f4010a0000040000000000000000000000000000000002250000000400011e08000c00012010001400012428002c00012230003400021d2438003c00011d`), music.PlaybackMode.LoopingInBackground)
        tiles.setCurrentTilemap(tilemap`level5`)
        scene.setBackgroundImage(img`
            fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
            fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
            fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
            ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
            fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
            fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
            fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
            fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
            fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
            fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
            ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
            fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
            fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
            ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
            fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
            ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
            ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
            fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
            fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
            cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
            ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
            ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
            fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
            fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
            ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
            fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
            ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
            ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
            ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
            ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
            fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
            fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
            ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
            ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
            dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
            dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
            dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
            dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
            dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
            dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
            ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
            ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
            ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
            dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
            dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
            dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
            ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
            ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
            ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
            ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
            ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
            dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
            dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
            bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
            bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
            bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
            bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
            bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
            bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
            ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
            dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
            ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
            ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
            dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
            ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
            bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
            dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
            dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
            ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
            dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
            bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
            ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
            dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
            dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
            bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
            dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
            dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
            bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
            cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
            ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
            ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
            ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
            cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
            cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
            cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
            ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
            cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
            ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
            cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
            cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
            ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
            cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
            fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
            fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
            fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
            ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
            fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
            `)
    } else {
        music.stopAllSounds()
        game.gameOver(true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.placeOnRandomTile(jumpy, assets.tile`myTile4`)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    scene.cameraFollowSprite(jumpy)
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        sprites.destroy(value)
    }
    for (let value of sprites.allOfKind(SpriteKind.flower)) {
        sprites.destroy(value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        coin2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 4 4 4 4 5 5 f . . . 
            . f 5 4 4 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 4 4 4 4 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        animation.runImageAnimation(
        coin2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 4 4 4 4 5 5 f . . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 5 4 4 4 5 5 f . . . . 
            . . f 5 5 4 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 5 4 4 5 f . . . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 5 4 4 5 f . . . . . 
            . . . f 5 5 4 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 5 4 4 4 5 5 f . . . . 
            . . f 5 5 4 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 4 4 4 4 5 5 f . . . 
            . f 5 5 4 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 4 4 4 4 4 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(coin2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        coin2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 . . . . . . . . . . . 3 . . 
            . . 3 . . 3 . . . . . . 3 . . . 
            . 8 3 3 8 8 3 3 2 3 . . 2 8 . . 
            . 8 3 3 8 8 3 2 2 2 3 . 2 8 . . 
            . 8 3 3 3 3 3 2 2 2 2 2 2 8 . . 
            . 9 2 3 3 3 2 2 9 2 2 2 2 9 . . 
            . 9 2 2 2 2 2 7 9 7 7 7 9 . . . 
            . . 9 9 7 7 7 7 9 7 9 9 . . . . 
            . . . 9 7 7 7 7 7 7 9 . . . . . 
            . . . . 9 7 7 7 7 9 . . . . . . 
            . . . . . 9 7 7 9 . . . . . . . 
            `, SpriteKind.flower)
        tiles.placeOnTile(coin2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        coin2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . a a b . . . . . . . . . 
            . . . a c c a b . . . . . . . . 
            . . a c c a a a a . . . . . . . 
            . a c c a a a a a a . . . . . . 
            a a c a a a a a a a b . . . . . 
            a a a a a a a a a a a . . . . . 
            a a a a a a b a a a a . . . . . 
            . a a c a a b b a a . . . . . . 
            . . a c c a a a a . . . . . . . 
            . . . a c c c a . . . . . . . . 
            . . . . a a a . . . . . . . . . 
            . . . . . a . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        animation.runImageAnimation(
        coin2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . a c c a b . . . . . 
            . . . . . a c c a a a a . . . . 
            . . . . a c c a a a a a b . . . 
            . . . a a c a a a a a a a a . . 
            . . . a a a a a a a a a a a . . 
            . . . a a a a a a b a b a a . . 
            . . . . a a c a a b b a a . . . 
            . . . . . a c a a a a a . . . . 
            . . . . . . a c c c a . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . . a c b . . . . . . 
            . . . . . . a c a a a . . . . . 
            . . . . . a c c a a a b . . . . 
            . . . . a a c a a a a a a . . . 
            . . . . a a a a a a a a a . . . 
            . . . . a a a a a a b a a . . . 
            . . . . . a a c a b a a . . . . 
            . . . . . . a c a a a . . . . . 
            . . . . . . . a c a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . . a c b . . . . . . 
            . . . . . . a c a a a . . . . . 
            . . . . . . a c a a b . . . . . 
            . . . . . a a a a a a a . . . . 
            . . . . . a a a a a a a . . . . 
            . . . . . a a a a a a a . . . . 
            . . . . . . a c a b a . . . . . 
            . . . . . . a c a a a . . . . . 
            . . . . . . . a c a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . . a c b . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . a a a a a . . . . . 
            . . . . . . a a a a a . . . . . 
            . . . . . . a a a a a . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a c a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . . a c b . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . a a a a a . . . . . 
            . . . . . . a a a a a . . . . . 
            . . . . . . a a a a a . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . a c a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . . a c b . . . . . . 
            . . . . . . a c a a a . . . . . 
            . . . . . . a c a a b . . . . . 
            . . . . . a a a a a a a . . . . 
            . . . . . a a a a a a a . . . . 
            . . . . . a a a a a a a . . . . 
            . . . . . . a c a b a . . . . . 
            . . . . . . a c a a a . . . . . 
            . . . . . . . a c a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . . a c b . . . . . . 
            . . . . . . a c a a a . . . . . 
            . . . . . a c c a a a b . . . . 
            . . . . a a c a a a a a a . . . 
            . . . . a a a a a a a a a . . . 
            . . . . a a a a a a b a a . . . 
            . . . . . a a c a b a a . . . . 
            . . . . . . a c a a a . . . . . 
            . . . . . . . a c a . . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a b . . . . . . 
            . . . . . . a c c a b . . . . . 
            . . . . . a c c a a a a . . . . 
            . . . . a c c a a a a a b . . . 
            . . . a a c a a a a a a a a . . 
            . . . a a a a a a a a a a a . . 
            . . . a a a a a a b a b a a . . 
            . . . . a a c a a b b a a . . . 
            . . . . . a c a a a a a . . . . 
            . . . . . . a c c c a . . . . . 
            . . . . . . . a a a . . . . . . 
            . . . . . . . . a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(coin2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        hellball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f . . f f f . . . . . 
            a f 6 f f f f f f f f f . . . . 
            a a a a a f f f f f a f . . . . 
            a a c a a 6 f a a a a a . . . . 
            a a c c a a a a c c a a . . . . 
            a a a c c a a c c a a . . . . . 
            . a a a c a c c a a . . . . . . 
            a . a . c c c . . . . . . . . . 
            a . . . . c c . a . . . . . . . 
            `, SpriteKind.flower2)
        tiles.placeOnTile(hellball, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        hellball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ball)
        tiles.placeOnTile(hellball, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        hellball,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        hellball.startEffect(effects.fire)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (jumpy.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
    if (info.life() == 0) {
        music.stopAllSounds()
    }
})
let hellball: Sprite = null
let coin2: Sprite = null
let current_level = 0
let jumpy: Sprite = null
music.play(music.createSong(hex`0087000408020200001c00010a006400f401640000040000000000000000000000000005000004340000000400011d08000c0001201000140002242a18001c00021d2720002400012028002c0002242a30003400021d2738003c00012006001c00010a006400f4016400000400000000000000000000000000000000020c0010001400011d28002c00011d`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111199999999999999999991111111999999999999999999999999
    9999999999999999999999999999999999991111111199999999999999999999999999999999999999999999999999991119999111111199999999999999999911111111199999999999999999999999
    9999999999999999999999999991111199111111111199999999999999999999999999999999999999999999999999111111911111111199999999999999111111111111111119999999999999999999
    9999999999999999999999999911111111111111111191111999999999999999999999999999999999999999999991111111111111111199999999999991111111111111111111119999999999999999
    9999999999999999999999999911111111111111111111111999999999999999999999999999999999999999999991111111111111111111199999999911111111111111111111119999999999999999
    9999999999999999999999999911111111111111111111111199999999999999995559999995559999999999999991111111111111111111111999999111111111111111111111111199999999999999
    9999999999999999999999999111111111111111111111111199999999999999995559999995559999999999999991111111111111111111111199999111111111111111111111111111999999999999
    9999999999999999999999911111111111111111111111111119999999999999995555999995559999999999999911111111111111111111111199999111111111111111111111111111119999999999
    9999999999999999999991111111111111111111111111111119999999999999995555999995559999999999999111111111111111111111111199999111111111111111111111111111119999999999
    9999999999999999999911111111111111111111111111111119999999999999999555599995559999955599999911111111111111111111111199999911111111111111111111111111111999999999
    9999999999999999999911111111111111111111111111111119999999995559999555599955559999955599999911111111111111111111111999999999111111111111111111111111111999999999
    9999999999999999999999991111111111111111111111111119999999995555599955559955559999555599999999111111111111111111111999999999111111111111111111111111119999999999
    9999999999999999999999999911111111111111111111111119999999995555599955559955599995555599999999991111119999999111119999999999999111111199991111111111999999999999
    9999999999999999999999999991111111111111111111111999999999999555599995559955599955555999999999999999999999999999999999999999999111111999999991111111999999999999
    9999999999999999999999999999911199999999911111999999999999999955559999999999999955559999999999999999999999999999999999999999999999999999999999999919999999999999
    9999999999999999999999999999999999999999999999999999999999999955559999999999999955599995555999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999955559955555555555559999555555999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999995555555555555559999555555999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999dddd999999999999999999999999999999999999dddd999955555555555555555599555599999999dddd999999999999999999999999999999999999dddd9999999999999999999
    99999999999ddddddddddd99999999999999999999999999999ddddddddddd55555555555555555555599555999ddddddddddd99999999999999999999999999999ddddddddddd999999999999999999
    99999999dddddddddddddd99999999999999999999999999dddddddddddddd55555555555555555555559999dddddddddddddd99999999999999999999999999dddddddddddddd999999999999999999
    999999dddddddddddddddd999999999999999999999999dddddddddddddddd555555555555555555555599dddddddddddddddd999999999999999999999999dddddddddddddddd999999999999999999
    99999ddddddddddddddddd99999999999999999999999ddddddddddddddddd55555555555555555555559ddddddddddddddddd99999999999999999999999ddddddddddddddddd999999999999999999
    99999ddddddddddddddddd99999999999999999999999ddddddddddddddddd55555555555555555555559ddddddddddddddddd99999999999999999999999ddddddddddddddddd999999999999999999
    9999ddddddddddddddddddd999999999999999999999ddddddddddddddddddd555555555555555555555ddddddddddddddddddd999999999999999999999ddddddddddddddddddd99999999999999999
    9999ddddddddddddddddddd999999999999999999999ddddddddddddddddddd555555555555555555555ddddddddddddddddddd999999999999999999999ddddddddddddddddddd99999999999999999
    999dddddddddddddddddddd999999ddd99999999999dddddddddddddddddddd555555ddd555555555555ddddddddddddddddddd999999ddd99999999999dddddddddddddddddddd999999ddd99999999
    999dddddddddddddddddddd99999ddddd9999999999dddddddddddddddddddd55555ddddd5555555555dddddddddddddddddddd99999ddddd9999999999dddddddddddddddddddd99999ddddd9999999
    99ddddddddddddddddddddd99999ddddd999999999ddddddddddddddddddddd55555ddddd555555555ddddddddddddddddddddd99999ddddd999999999ddddddddddddddddddddd99999ddddd9999999
    99ddddddddddddddddddddd99999ddddd999999999ddddddddddddddddddddd55555ddddd555555555ddddddddddddddddddddd99999ddddd999999999ddddddddddddddddddddd99999ddddd9999999
    99ddddddddddddddddddddd99999dddddd99999999ddddddddddddddddddddd55555dddddd55555555ddddddddddddddddddddd99999dddddd99999999ddddddddddddddddddddd99999dddddd999999
    9dddddddddddddddddddddd99999dddddd9999999dddddddddddddddddddddd55555dddddd5555555dddddddddddddddddddddd99999dddddd9999999dddddddddddddddddddddd99999dddddd999999
    9dddddddddddddddddddddd99999dddddd9999999dddddddddddddddddddddd55555dddddd5555555dddddddddddddddddddddd99999dddddd9999999dddddddddddddddddddddd99999dddddd999999
    9dddddddddddddddddddddd9999ddddddd9999999dddddddddddddddddddddd5555ddddddd5555555dddddddddddddddddddddd9999ddddddd9999999dddddddddddddddddddddd9999ddddddd999999
    ddddddddddddddd6ddddddd9999ddddddd9999ddddddddddddddddd6ddddddd5555ddddddd5555ddddddddddddddddd6ddddddd9999ddddddd9999ddddddddddddddddd6ddddddd9999ddddddd9999dd
    dddddddddddddd66ddddddd9999ddddddd99dddddddddddddddddd66ddddddd5555ddddddd55dddddddddddddddddd66ddddddd9999ddddddd99dddddddddddddddddd66ddddddd9999ddddddd99dddd
    dddddddddddddd66ddddddd9999dddddddd9dddddddddddddddddd66ddddddd5555dddddddd5dddddddddddddddddd66ddddddd9999dddddddd9dddddddddddddddddd66ddddddd9999dddddddd9dddd
    ddddddddddddd6666dddddd9999dddddddddddddddddddddddddd6666dddddd5555dddddddddddddddddddddddddd6666dddddd9999dddddddddddddddddddddddddd6666dddddd9999ddddddddddddd
    ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
    ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
    dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
    9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
    999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
    9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
    99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
    999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
    999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
    9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
    9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
    9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
    9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
    9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
    9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
    9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
    9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
    9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
    9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
    9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
    9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
    9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
    9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
    9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
    9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
    9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
    9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
    9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
    6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
jumpy = sprites.create(img`
    . . . . e e e f e f . . . . . . 
    . . . . f e f f e e . . . . . . 
    . . . . e 4 4 4 4 e . . . . . . 
    . . . . 4 2 4 4 2 4 . . . . . . 
    . . . . f 4 5 5 4 f . . . . . . 
    . . . . 4 f f f f 4 . . . . . . 
    . . 8 8 8 c 8 8 c 8 8 8 . . . . 
    . . c 8 8 8 c c c 8 8 8 . . . . 
    . . 8 c 8 c f c f 8 8 8 . . . . 
    . . 8 8 c 2 3 2 c 8 8 8 . . . . 
    . . 4 4 c f c b b 8 4 4 . . . . 
    . . 4 4 b 8 b 8 8 8 4 4 . . . . 
    . . 4 4 b 8 b 8 8 8 4 4 . . . . 
    . . . . 8 8 . . 8 8 . . . . . . 
    . . . . 8 8 . . 8 8 . . . . . . 
    . . . . 9 9 . . 9 9 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(jumpy, 100, 0)
current_level = 2
jumpy.setBounceOnWall(false)
startlevel()
game.onUpdate(function () {
    jumpy.setImage(img`
        . . . . f f f f f f . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f 4 4 4 4 f . . . . . . 
        . . . . 4 f 4 4 f 4 . . . . . . 
        . . . . 7 4 e e 4 7 . . . . . . 
        . . . . 4 7 7 7 7 4 . . . . . . 
        . . 2 e 2 2 2 2 2 2 e 2 . . . . 
        . . 2 2 2 5 5 5 5 2 2 2 . . . . 
        . . 8 8 2 5 2 2 2 2 8 8 . . . . 
        . . 8 8 2 5 5 5 5 2 8 8 . . . . 
        . . 4 4 2 2 2 2 5 2 4 4 . . . . 
        . . 4 4 2 5 5 5 5 2 4 4 . . . . 
        . . 4 4 2 2 2 2 2 2 4 4 . . . . 
        . . . . 8 8 . . 8 8 . . . . . . 
        . . . . 8 8 . . 8 8 . . . . . . 
        . . . . 9 9 . . 9 9 . . . . . . 
        `)
    if (jumpy.vy < 0) {
        jumpy.setImage(img`
            . . . 5 5 f f f f f f 5 5 . . . 
            . . . 4 4 f f f f f f 4 4 . . . 
            . . . 4 4 f 4 4 4 4 f 4 4 . . . 
            . . . 8 8 4 f 4 4 f 4 8 8 . . . 
            . . . 8 8 4 4 e e 4 4 8 8 . . . 
            . . . 8 8 4 7 7 7 7 4 8 8 . . . 
            . . 5 5 5 5 2 2 2 5 8 5 5 5 . . 
            . 5 . . 5 8 2 5 5 5 5 5 . . 5 . 
            5 . . 5 5 5 5 2 2 5 8 5 5 . . 5 
            . 5 5 5 5 5 8 5 5 2 5 5 5 5 5 . 
            . 5 5 5 5 8 5 2 2 2 8 5 5 5 5 . 
            . 5 5 5 . 8 8 . . 8 8 . 5 5 5 . 
            . 5 5 . . 8 8 . . 8 8 . . 5 5 . 
            . 5 5 . . 9 9 . . 9 9 . . 5 5 . 
            . 5 5 . 5 5 5 5 5 5 5 5 . 5 5 . 
            . . . . 5 . . 5 5 . . 5 . . . . 
            `)
    } else if (jumpy.vy > 0) {
        jumpy.setImage(img`
            . . . . 5 . . 5 5 . . 5 . . . . 
            . 5 5 . 5 5 5 5 5 5 5 5 . 5 5 . 
            . 5 5 . . 9 9 . . 9 9 . . 5 5 . 
            . 5 5 . . 8 8 . . 8 8 . . 5 5 . 
            . 5 5 5 . 8 8 . . 8 8 . . 5 5 . 
            . 5 5 5 5 8 2 2 2 5 5 . 5 5 5 . 
            . 5 5 5 5 5 2 5 5 8 5 5 5 5 5 . 
            5 . . 5 5 8 5 2 2 5 5 5 . . 5 . 
            . 5 . . 5 5 5 5 5 2 8 . . 5 . . 
            . 5 5 5 5 8 5 2 2 2 5 5 5 5 5 . 
            . 5 . 8 8 4 7 7 7 7 4 8 8 . 5 . 
            5 . . 8 8 4 4 e e 4 4 8 8 . . 5 
            . . . 8 8 4 f 4 4 f 4 8 8 . . . 
            . . . 4 4 f 4 4 4 4 f 4 4 . . . 
            . . . 4 4 f f f f f f 4 4 . . . 
            . . . 5 5 f f f f f f 5 5 . . . 
            `)
    } else {
    	
    }
    if ((jumpy.isHittingTile(CollisionDirection.Left) || jumpy.isHittingTile(CollisionDirection.Right)) && jumpy.vy >= 0) {
        jumpy.vy = 0
        jumpy.ay = 0
        jumpy.setImage(img`
            . . . . . . . . 5 5 . . 5 5 . . 
            . . . . . . 5 5 5 . . 5 . . . . 
            . . . . . . 2 2 8 8 4 4 4 . . . 
            . . . . . . e 2 8 8 4 4 4 . . 5 
            f f f 4 7 4 2 2 2 2 2 2 2 8 8 9 
            f f 4 f 4 7 2 5 5 5 2 5 2 8 8 9 
            f f 4 4 e 7 2 5 2 5 2 5 2 . . 5 
            f f 4 4 e 7 2 5 2 5 2 5 2 . . 5 
            f f 4 f 4 7 2 5 2 5 5 5 2 8 8 9 
            f f f 4 7 4 2 2 2 2 2 2 2 8 8 9 
            . . . . . . e 2 8 8 4 4 4 . . 5 
            . . . . . 5 2 2 8 8 4 4 4 . . . 
            . . . . . 5 . . 5 . . . . . . . 
            . . . . . 5 . . 5 5 . . . . . . 
            . . . . . 5 5 . . 5 . . . . . . 
            . . . . . . 5 5 . 5 5 . . . . . 
            `)
    } else {
        jumpy.ay = 350
    }
    if (jumpy.vx < 0 || jumpy.isHittingTile(CollisionDirection.Left)) {
        jumpy.image.flipX()
    }
})
