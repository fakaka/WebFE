const username = figma.currentUser.name || '小壳';
const message = [
    '666，真棒！🎉',
    '这么高级的设计哪用得着改？',
    '这种兼具艺术性和商业性的设计，可以直接拿出去展览了吧！',
    `${username}的画。。。啊啊啊，看了你的画，20分钟还不够我心率恢复正常的...💖`,
    '救命！这套 UI 让 APP 整个上了不止一个档次！',
    '这是你做的图？该不会是直接从美术馆里搬出来骗我的吧？',
    '说星星🤩好看的人一定没有看过您的图(*^▽^*)',
    `值得庆幸此刻还活着只因为我的生命中能看到${username}的画`,
    '啊啊啊啊啊啊啊啊啊啊，太好看了吧！！！',
    '给别人条活路吧，美到窒息了。',
    `乖乖是好看啊，厉害了我的${username}！`,
    `${username}的画充满了美感，生动的和天体运行相媲美`,
    `天不生${username}，设计万古如长夜`
];
let index = 0;
// In plugin code
figma.on('selectionchange', () => {
    let node = figma.currentPage.selection[0];
    console.log(node);
    if (node) {
        return;
    }
    let color = node.fills && node.fills.length > 0 && node.fills[0].type === 'SOLID' ? node.fills[0].color : null;
    // console.log(color)
    if (color) {
        if (color.r == 0 && color.g == 0 && color.b == 0) {
            figma.notify('这五彩斑斓的黑是多么美妙！此图只应天上有，人间能得几回见！');
            return;
        }
    }
    if (node.name.startsWith('Rectangle')) {
        if (node.width == node.height) {
            figma.notify('我好方');
            return;
        }
    }
    if (node.name.startsWith('Line')) {
        if (node.width == node.height) {
            figma.notify('乖噻，这优美的线条');
            return;
        }
    }
});
setInterval(() => {
    figma.notify(username + '你已经连续工作一分钟了休息下吧！', {
        timeout: 1000
    });
}, 60 * 1000);
setInterval(() => {
    index = index % message.length;
    figma.notify(message[index++]);
}, 10000);
// figma.closePlugin();
