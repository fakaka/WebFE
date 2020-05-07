const AudioContext = window.AudioContext || window.webkitAudioContext

const ctx = new AudioContext()

const analyser = ctx.createAnalyser()
analyser.fftSize = 512

// 获取<audio>节点
const audio = document.getElementById('audio')

// 通过<audio>节点创建音频源
const source = ctx.createMediaElementSource(audio)

// 将音频源关联到分析器
source.connect(analyser)

// 将分析器关联到输出设备（耳机、扬声器）
analyser.connect(ctx.destination)

audio.play()

const bufferLength = analyser.frequencyBinCount
const dataArray = new Uint8Array(bufferLength)

// analyser.getByteFrequencyData(dataArray)
barWidth = 10
var canvas = document.getElementById('myCanvas')
var WIDTH = canvas.width
var HEIGHT = canvas.height
console.log(bufferLength)

var cctx = canvas.getContext('2d')

function renderFrame() {
    requestAnimationFrame(renderFrame)

    cctx.clearRect(0, 0, WIDTH, HEIGHT)

    // 更新频率数据
    analyser.getByteFrequencyData(dataArray)

    // bufferLength表示柱形图中矩形的个数
    for (var i = 0, x = 0; i < bufferLength; i++) {
        if (x > WIDTH) {
            break;
        }
        // 根据频率映射一个矩形高度
        barHeight = dataArray[i]

        // 根据每个矩形高度映射一个背景色
        var r = barHeight + 25 * (i / bufferLength)
        var g = 250 * (i / bufferLength)
        var b = 50

        // 绘制一个矩形，并填充背景色
        cctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
        cctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)

        x += barWidth + 1
    }
}

renderFrame()
