namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const zssssa = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    fly = sprites.create(img`
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
    fly.setPosition(26, 48)
    moster = sprites.create(img`
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
    moster.setPosition(30, 59)
    moster22 = sprites.create(img`
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
    moster22.setPosition(26, 40)
    dghj = sprites.create(img`
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
    dghj.setPosition(26, 40)
    animation.runImageAnimation(
    moster,
    [img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .................fff..............................
        ...............ff777ff............................
        ..............f777777f............................
        .............f76fffe7ff...........................
        ............f7ff...fe6f.....ffff..................
        ...........f7f.....fe77f..ff7777f.................
        ...........ff.......f777ff7777777f................
        .....................677777777777f.ffff...........
        ......................f7777777777ffee44f..........
        .......................f7777ff77fbeb4444f.........
        ..............fff.......ffff..f7f4444444f.........
        .............ff77f............f7f444444e..........
        ............f77777f...........f7f44444f...........
        ...........ff66ff7ff.........f77f4444b............
        ...........f76f..f7fffff....f777fffff.............
        ...........f7f...f77fe44f..f7777776f..............
        ...........f7f...f77e44e4ff77777776f....fff.......
        ...........ff....f77f44b44f77777766...ff777f......
        ..................f77f4444f7777776f..f777777f.....
        ...................f7ff44ff77777ff..f777ff77f.....
        ...................f777ff777777f...f777f..f7e.....
        ...................f777f7777777f.ff777f...ffe.....
        ...................f777f77777777f7777fff..........
        ....................f77f7777777777776444f.........
        ....................f777f77777777777f44eef........
        .....................f77f7777777777fbebff.........
        .....................f77f7777777776ffff...........
        ......................fff77777776ff...............
        ........................ffff7766ff................
        ............................fffff.................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `,img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .................fff..............................
        ...............ff777ff............................
        ..............f777777f............................
        .............f76fffe7ff...........................
        ............f7ff...fe6f.....ffff..................
        ...........f7f.....fe77f..ff7777f.................
        ...........ff.......f777ff7777777f................
        .....................677777777777f.ffff...........
        ......................f7777777777ffee44f..........
        .......................f7777ff77fbeb4444f.........
        ....f...................ffff..f7f4444444f.........
        ....ff........................f7f444444e..........
        ....fff...........ff..........f7f44444f...........
        ....f7ff........ff77fff......f77f4444b............
        ....ff76ef...fff7777777f....f777fffff.............
        .....ff776fff77767766777f..f7777776f..............
        ......ff76777777777e77777ff77777776f....fff.......
        .......fff7777777777777777f77777766...ff777f......
        .........fff7777fff77777e6f7777776f..f777777f.....
        ............ffff...ff7776ff77777ff..f777ff77f.....
        ....................ff76f777777f...f777f..f7e.....
        ......................ff7777777f.ff777f...ffe.....
        .......................f77777777f7777fff..........
        .......................f7777777777776444f.........
        ........................f77777777777f44eef........
        ........................f7777777777fbebff.........
        ........................f7777777776ffff...........
        ........................f77777776ff...............
        ........................ffff7766ff................
        ............................fffff.................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `,img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .................fff..............................
        ...............ff777ff............................
        ..............f777777f............................
        .............f76fffe7ff...........................
        ............f7ff...fe6f.....ffff..................
        ...........f7f.....fe77f..ff7777f.................
        ...........ff.......f777ff7777777f................
        .....................677777777777f.ffff...........
        ......................f7777777777ffee44f..........
        .......................f7777ff77fbeb4444f.........
        ........................ffff..f7f4444444f.........
        ...ffff......fffffff..........f7f444444e..........
        ....f77ffffff7777777ff........f7f44444f...........
        ....ff7766777777777777f......f77f4444b............
        .....ffffe7777767e67777f....f777fffff.............
        .........fffff7776777777ffff7777776f..............
        ..............fff67777777ff77777776f....fff.......
        ..................fff77776f77777766...ff777f......
        .....................ff766f7777776f..f777777f.....
        ......................fffff77777ff..f777ff77f.....
        .......................ff777777f...f777f..f7e.....
        .......................f7777777f.ff777f...ffe.....
        .......................f77777777f7777fff..........
        .......................f7777777777776444f.........
        ........................f77777777777f44eef........
        ........................f7777777777fbebff.........
        ........................f7777777776ffff...........
        ........................f77777776ff...............
        ........................ffff7766ff................
        ............................fffff.................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `],
    100,
    true
    )
    animation.runImageAnimation(
    fly,
    [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b 1 b b b 1 c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b b 2 2 2 2 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 c f f 
        . c c b c b f c b b b b b b c f 
        . c b b c b b c b 1 b b b 1 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . c c . . . 
        . . . . . . c c c 3 c c 3 f . . 
        . . . . . c c c b 3 c b 3 c f . 
        . . . . f f b b b b b b b b c f 
        . . . . f f b b b 1 b b b 1 c c 
        . . . f f f c b b b b b b b b c 
        . . . f f f f b b c 1 f f 1 b c 
        . . . b b b c c b f 1 f f 1 f f 
        . . . c c c c f b f f f f f f f 
        . . c c c b b f b f 2 2 2 2 f f 
        . . . c b b c c b 2 2 2 2 2 f . 
        . . c b b c c f f b 2 2 2 f . . 
        . c c c c c f f f f f f f . . . 
        c c c c . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b 1 1 b b b 1 1 c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `],
    100,
    true
    )
    animation.runImageAnimation(
    moster22,
    [img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c b 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 3 3 c . . 
        f b c c c d d d b b 3 3 3 3 c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d c d d d d d d b c 3 3 c 
        . c d d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d b f f c c c b f 
        . . c d d d d b d d b f b b f f 
        . . . c d d d b b d d f f f f . 
        . . . f f b b f b b b b . . . . 
        . . . f b b b f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b b 3 3 1 1 c . . 
        f b c c b d d d d b b 3 3 c c . 
        f b c d d d d d d d b b 3 3 b c 
        . c d d c d d d d d d b b 3 3 c 
        . c d d c d d d c d d b c 3 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b b f f d d c c c b f 
        . . c d d b d d b f c c b b f f 
        . . . c d b b d d f c c f f f . 
        . . . . c f b b b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    100,
    true
    )
    animation.runImageAnimation(
    dghj,
    [img`
        .................ccfff..............
        ................cddbbf..............
        ...............cddbbf...............
        ..............fccbbcf............ccc
        ........ffffffccccccff.........ccbbc
        ......ffbbbbbbbbbbbbbcfff.....cdbbc.
        ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
        ....fbbb1111ff1bcbcbbbcccccccbbbcf..
        .....fb11111111bbbbbbcccccccccbccf..
        ......fccc33cc11bbbbccccccccfffbbcf.
        .......fc131c111bbbcccccbdbc...fbbf.
        ........f33c111cbbbfdddddcc.....fbbf
        .........ff1111fbdbbfddcc........fff
        ...........cccccfbdbbfc.............
        .................fffff..............
        `,img`
        .................ccfff..............
        ................cddbbf..............
        ...............cddbbf...............
        .........ffffffccbbcf...............
        ......fffbbbbbbbbcccff..............
        .....fbbbbbbbbbbbbbbbcfff......ccccc
        .....bcbbbbbffbcbcbbbbcccff...cdbbbc
        .....bbb1111ffbbcbcbbbcccccffcddbbc.
        .....fb11111111bcbcbbbcccccccbdbbf..
        ......fccc33c11bbbbbbcccccccccbbcf..
        .......fc131cc11bbbbccccccccffbccf..
        ........f33c1111bbbcccccbdbc..fbbcf.
        .........ff1111cbbbfdddddcc....fbbf.
        ...........ccc1fbdbbfddcc.......fbbf
        ..............ccfbdbbfc..........fff
        .................fffff..............
        `,img`
        ..................ccfff.............
        .................cddbbf.............
        ........fffffffffddbbf..............
        .......fbbbbbbbbbfcbcf..............
        .......fbbc111bffbbccffff...........
        .......fb111111ffbbbbbcccff....ccccc
        ........f1cc3311bbcbcbbccccf..cdbbbc
        ........fcc131c1bbbcbcbcccccfcddbbc.
        .........f111111bbbcbcbccccccbdbbf..
        .........f1111111bbbbbccccccccbbcf..
        ..........f111111bbbbcccccccffbccf..
        ...........c1111cbbbcccccbdbc.fbbcf.
        ............cc11cbbbfddddddc...fbbf.
        ..............cffbdbbfdddcc.....fbbf
        .................fbdbbfcc........fff
        ..................fffff.............
        `,img`
        ....................ccfff...........
        ..........fffffffffcbbbbf...........
        .........fbbbbbbbbbfffbf............
        .........fbb111bffbbbbff............
        .........fb11111ffbbbbbcff..........
        .........f1cccc11bbcbcbcccf.........
        ..........fc1c1c1bbbcbcbcccf...ccccc
        ............c3331bbbcbcbccccfccddbbc
        ...........c333c1bbbbbbbcccccbddbcc.
        ...........c331c11bbbbbcccccccbbcc..
        ..........cc13c111bbbbccccccffbccf..
        ..........c111111cbbbcccccbbc.fccf..
        ...........cc1111cbbbfdddddc..fbbcf.
        .............cccffbdbbfdddc....fbbf.
        ..................fbdbbfcc......fbbf
        ...................fffff.........fff
        `,img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `,img`
        ....................................
        ....................................
        ....................................
        ...............ccffff...............
        ..............cddbbbf...............
        .......ffffffcddbbbf................
        .....ffbbbbbbbbbbbbbcfff.......ccccc
        ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
        ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
        .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
        .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
        .ffbb1111fffbbcbbbbcccccccbcffbccf..
        ..ff111111111bbbbccccccbbbcc..fbbcf.
        ....ccccccc111bdbbbfddbccc.....ffbbf
        ........ccccccfbdbbbfcc..........fff
        ...............ffffff...............
        `],
    100,
    true
    )
})
sprites.onCreated(SpriteKind.Player, function (sprite2) {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffff5f5ffffffff5555ffffff555555555fff5fffff5fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffffffff5fff5ffffff5ffff5fffffffff5fffffff5fffff5fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff55fffffffffff5fff5ffffff5ffff5fffffffff5fffffff5fffff5fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffff5fffff5fffff555555fffffffff5ffffffff5fff5ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffff5fffff5fffff55fffffffffffff5ffffffff5fff5ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffff5555555fffff5f5ffffffffffff5fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fffff5fffff5fffff5ff5fffffffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff5fffff5fffff5fff5ffffffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffff5fffff5fffff5ffff5ffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    mySprite = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 3 f f . . 
        . . f d f f 3 5 5 3 f d f . . . 
        . . . f f 3 3 3 3 3 f d f . . . 
        . . . f 3 3 5 3 3 5 3 f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f f . . . . . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
})
sprites.onCreated(SpriteKind.npc, function (sprite) {
    tiles.setCurrentTilemap(tilemap`層級4`)
    npc1 = sprites.create(img`
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
        `, SpriteKind.npc)
    npc1.setPosition(89, 67)
    animation.runImageAnimation(
    npc1,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........ccccc...................
        ......ccbbbbbc..................
        ....ccddbbbbbbf.................
        ...cbbbddbbffbf.................
        ....ffffdbbffbff................
        .......fbbbbbbbf................
        .......fbbbbbbbff...............
        ......ffbbbbbbbbfff.............
        ......f6bbbbbb663ddcc...........
        .....cc66bbbb666dddddc..........
        .....cd36666663dddddddc.........
        .....cddd3333dbddddddbcc........
        .....cddddddddbdddddbbddc.......
        .....cddddddddbbdddbbdddbc......
        ......cddddddddbbdbbddddbbccc...
        ......ccddddddddbbbbcccccbbbcc..
        .......ccddddddddddddddbccffff..
        ........cccbddccbddddbbfff......
        ........c333bb333cbbfff.........
        ........c33cc33cc3fff...........
        `],
    100,
    true
    )
    npc1.sayText("ssssss")
})
let biu: Sprite = null
let npc1: Sprite = null
let mySprite: Sprite = null
let dghj: Sprite = null
let moster22: Sprite = null
let moster: Sprite = null
let fly: Sprite = null
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
let tittle222 = sprites.create(img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 f . . . 
    f f f f f f f f 3 3 3 3 3 f . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 f . . 
    f f f f f f f f 3 3 3 3 f . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.zssssa)
tittle222.setPosition(54, 46)
animation.runImageAnimation(
tittle222,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f . . . . . . . . . . . . . . 
    f 3 . . . . . . . . . . . . . . 
    f 3 . . . . . . . . . . . . . . 
    f 3 . . . . . . . . . . . . . . 
    f 3 . . . . . . . . . . . . . . 
    f f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f . . . . . . . . . . . . . 
    f 3 3 . . . . . . . . . . . . . 
    f 3 3 . . . . . . . . . . . . . 
    f 3 3 . . . . . . . . . . . . . 
    f 3 3 . . . . . . . . . . . . . 
    f f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f . . . . . . . . . . . . 
    f 3 3 3 . . . . . . . . . . . . 
    f 3 3 3 . . . . . . . . . . . . 
    f 3 3 3 . . . . . . . . . . . . 
    f 3 3 3 . . . . . . . . . . . . 
    f f f f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f . . . . . . . . . . . 
    f 3 3 3 3 . . . . . . . . . . . 
    f 3 3 3 3 . . . . . . . . . . . 
    f 3 3 3 3 . . . . . . . . . . . 
    f 3 3 3 3 . . . . . . . . . . . 
    f f f f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f . . . . . . . . . . 
    f 3 3 3 3 3 . . . . . . . . . . 
    f 3 3 3 3 3 . . . . . . . . . . 
    f 3 3 3 3 3 . . . . . . . . . . 
    f 3 3 3 3 3 . . . . . . . . . . 
    f f f f f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f . . . . . . . . . 
    f 3 3 3 3 3 3 . . . . . . . . . 
    f 3 3 3 3 3 3 . . . . . . . . . 
    f 3 3 3 3 3 3 . . . . . . . . . 
    f 3 3 3 3 3 3 . . . . . . . . . 
    f f f f f f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    f f f f f f f f . . . . . . . . 
    f 3 3 3 3 3 3 3 . . . . . . . . 
    f 3 3 3 3 3 3 3 . . . . . . . . 
    f 3 3 3 3 3 3 3 . . . . . . . . 
    f 3 3 3 3 3 3 3 . . . . . . . . 
    f f f f f f f f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    f f f f f f f f 3 . . . . . . . 
    f 3 3 3 3 3 3 3 3 . . . . . . . 
    f 3 3 3 3 3 3 3 3 . . . . . . . 
    f 3 3 3 3 3 3 3 3 . . . . . . . 
    f 3 3 3 3 3 3 3 3 . . . . . . . 
    f f f f f f f f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    f f f f f f f f 3 3 . . . . . . 
    f 3 3 3 3 3 3 3 3 3 . . . . . . 
    f 3 3 3 3 3 3 3 3 3 . . . . . . 
    f 3 3 3 3 3 3 3 3 3 . . . . . . 
    f 3 3 3 3 3 3 3 3 3 . . . . . . 
    f f f f f f f f 3 3 . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 . . . . . 
    . . . . . . . f 3 3 3 . . . . . 
    f f f f f f f f 3 3 3 . . . . . 
    f 3 3 3 3 3 3 3 3 3 3 . . . . . 
    f 3 3 3 3 3 3 3 3 3 3 . . . . . 
    f 3 3 3 3 3 3 3 3 3 3 . . . . . 
    f 3 3 3 3 3 3 3 3 3 3 . . . . . 
    f f f f f f f f 3 3 3 . . . . . 
    . . . . . . . f 3 3 3 . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 . . . . 
    f f f f f f f f 3 3 3 3 . . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    f f f f f f f f 3 3 3 3 . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 f . . . 
    f f f f f f f f 3 3 3 3 3 . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    f f f f f f f f 3 3 3 3 f . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 f . . . 
    f f f f f f f f 3 3 3 3 3 f . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 f . . 
    f f f f f f f f 3 3 3 3 f . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 f . . . 
    f f f f f f f f 3 3 3 3 3 f . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 f . . 
    f f f f f f f f 3 3 3 3 f . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 f . . . 
    f f f f f f f f 3 3 3 3 3 f . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 f . . 
    f f f f f f f f 3 3 3 3 f . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
animation.runImageAnimation(
tittle222,
[img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 f . . . 
    f f f f f f f f 3 3 3 3 3 f . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 f . . 
    f f f f f f f f 3 3 3 3 f . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 f . . . 
    f f f f f f f f 3 3 3 3 3 f . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 f . . 
    f f f f f f f f 3 3 3 3 f . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 f . . . 
    f f f f f f f f 3 3 3 3 3 f . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 f . . 
    f f f f f f f f 3 3 3 3 f . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 f . . . 
    f f f f f f f f 3 3 3 3 3 . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    f f f f f f f f 3 3 3 3 f . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 3 3 . . . . 
    f f f f f f f f 3 3 3 3 . . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    f 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    f f f f f f f f 3 3 3 3 . . . . 
    . . . . . . . f 3 3 3 f . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 3 3 . . . . . 
    . . . . . . . f 3 3 3 . . . . . 
    f f f f f f f f 3 3 3 . . . . . 
    f 3 3 3 3 3 3 3 3 3 3 . . . . . 
    f 3 3 3 3 3 3 3 3 3 3 . . . . . 
    f 3 3 3 3 3 3 3 3 3 3 . . . . . 
    f 3 3 3 3 3 3 3 3 3 3 . . . . . 
    f f f f f f f f 3 3 3 . . . . . 
    . . . . . . . f 3 3 3 . . . . . 
    . . . . . . . f 3 3 f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    f f f f f f f f 3 3 . . . . . . 
    f 3 3 3 3 3 3 3 3 3 . . . . . . 
    f 3 3 3 3 3 3 3 3 3 . . . . . . 
    f 3 3 3 3 3 3 3 3 3 . . . . . . 
    f 3 3 3 3 3 3 3 3 3 . . . . . . 
    f f f f f f f f 3 3 . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    . . . . . . . f 3 3 . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    f f f f f f f f 3 . . . . . . . 
    f 3 3 3 3 3 3 3 3 . . . . . . . 
    f 3 3 3 3 3 3 3 3 . . . . . . . 
    f 3 3 3 3 3 3 3 3 . . . . . . . 
    f 3 3 3 3 3 3 3 3 . . . . . . . 
    f f f f f f f f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . f 3 . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    f f f f f f f f . . . . . . . . 
    f 3 3 3 3 3 3 3 . . . . . . . . 
    f 3 3 3 3 3 3 3 . . . . . . . . 
    f 3 3 3 3 3 3 3 . . . . . . . . 
    f 3 3 3 3 3 3 3 . . . . . . . . 
    f f f f f f f f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f . . . . . . . . . 
    f 3 3 3 3 3 3 . . . . . . . . . 
    f 3 3 3 3 3 3 . . . . . . . . . 
    f 3 3 3 3 3 3 . . . . . . . . . 
    f 3 3 3 3 3 3 . . . . . . . . . 
    f f f f f f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f . . . . . . . . . . 
    f 3 3 3 3 3 . . . . . . . . . . 
    f 3 3 3 3 3 . . . . . . . . . . 
    f 3 3 3 3 3 . . . . . . . . . . 
    f 3 3 3 3 3 . . . . . . . . . . 
    f f f f f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f . . . . . . . . . . . 
    f 3 3 3 3 . . . . . . . . . . . 
    f 3 3 3 3 . . . . . . . . . . . 
    f 3 3 3 3 . . . . . . . . . . . 
    f 3 3 3 3 . . . . . . . . . . . 
    f f f f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f . . . . . . . . . . . . 
    f 3 3 3 . . . . . . . . . . . . 
    f 3 3 3 . . . . . . . . . . . . 
    f 3 3 3 . . . . . . . . . . . . 
    f 3 3 3 . . . . . . . . . . . . 
    f f f f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f . . . . . . . . . . . . . 
    f 3 3 . . . . . . . . . . . . . 
    f 3 3 . . . . . . . . . . . . . 
    f 3 3 . . . . . . . . . . . . . 
    f 3 3 . . . . . . . . . . . . . 
    f f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f . . . . . . . . . . . . . . 
    f 3 . . . . . . . . . . . . . . 
    f 3 . . . . . . . . . . . . . . 
    f 3 . . . . . . . . . . . . . . 
    f 3 . . . . . . . . . . . . . . 
    f f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
let tittle = 自訂文字.顯示文字("Tittle", 1, 10)
tittle.setPosition(77, 16)
let EASY = 自訂文字.顯示文字("EASY", 1, 10)
EASY.setPosition(77, 46)
let medium = 自訂文字.顯示文字("medium", 1, 10)
medium.setPosition(78, 60)
let Difficulty = 自訂文字.顯示文字("Difficulty", 1, 10)
Difficulty.setPosition(80, 76)
game.onUpdate(function () {
    if (Math.percentChance(0)) {
        biu = sprites.createProjectileFromSprite(img`
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
            `, mySprite, 50, 50)
        animation.runImageAnimation(
        biu,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......212..............
            .......212..............
            .......212..............
            .......313..............
            ......23132.............
            ......21112.............
            ......21113.............
            ......31113.............
            ......31113.............
            ......31113.............
            ......23132.............
            .......222..............
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
            `,img`
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
            .....2333332............
            ....311111113...........
            ....111111111...........
            ...21111111112..........
            ...23111111332..........
            ......22222.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            .....44444..............
            ...444555d4444..........
            ..4d5d555ddd44..........
            ..455111dd5554..........
            .45551115115544.........
            .4dd115551155d4.........
            .4551151155ddd4.........
            .2555d111511552.........
            .2d55d111511552.........
            ..24dd5555dd54..........
            ...224d55dd44...........
            ..22222444222...........
            ...2244444422...........
            .....222222.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....22222222............
            ...244455444222.........
            .2255d455544442.........
            .245555d55545422........
            .24dd555555d4442........
            2455d555ddd55544........
            2455444d55d55544........
            4444..2455..4444........
            ..bbbb2442bbbb..........
            .bdddd2442ddddb.........
            bddbbb2442bbbddb........
            bddbbbbbbbbbbddb........
            bbd11311d1d11dbb........
            ..bbdd113dd1bb..........
            ..224444444422..........
            ...2244444222...........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........bb..............
            ........bb..............
            ...bbb..................
            ..bddb.......bb.........
            .bdddb......bddb........
            .bddb....bb.bddb........
            .bbb.....bb..bb.........
            ........................
            ........................
            ..bbbddddddbbb..........
            .bdcccbbbbccddb.........
            bddcb.....bccddb........
            cddbb......bcddc........
            cbdddbb....bddcc........
            .ccbddddb.cccccc........
            ...cccccc...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
        biu.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        biu.setFlag(SpriteFlag.Ghost, true)
    }
})
