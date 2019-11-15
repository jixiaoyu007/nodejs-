const util = require('util')
const EventEmitter = require('events')
const { StringDecoder  } = require('string_decoder')
const path = require('path')
const os = require('os')
function myStream (){
  EventEmitter.call(this)
}

var stream = new myStream()
util.inherits(myStream,EventEmitter)
// console.log(stream instanceof EventEmitter,'是否是mystream的实例')

const myURL = new URL('http:Example.com/?a=90', 'http://example.org/');
// myURL.hostname = 'ee.com'
console.log(myURL)
myURL.searchParams.set('c',111)
myURL.searchParams.set('d',222)
myURL.searchParams.append('f',333)

// var timer = setTimeout(()=>{console.log('ser')},1000)
// console.log(timer.hasRef())
// console.log(timer.unref())
var decoder = new StringDecoder('utf8')

const cent = Buffer.from([0xc2,0xA2])
// console.log(decoder.write(cent))
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
// console.log(os.networkInterfaces())

// function heapSort(array) {
//     creatHeap(array);
//     console.log(array);
//     // 交换第一个和最后一个元素，然后重新调整大顶堆
//     for (let i = array.length - 1; i > 0; i--) {
//       [array[i], array[0]] = [array[0], array[i]];
//       adjust(array, 0, i);
//     }
//     return array;
//   }
//   // 构建大顶堆，从第一个非叶子节点开始，进行下沉操作
//   function creatHeap(array) {
//     const len = array.length;
//     const start = parseInt(len / 2) - 1;
//     for (let i = start; i >= 0; i--) {
//       adjust(array, i, len);
//     }
//   }
//   // 将第target个元素进行下沉，孩子节点有比他大的就下沉
//   function adjust(array, target, len) {
//     for (let i = 2 * target + 1; i < len; i = 2 * i + 1) {
//       // 找到孩子节点中最大的
//       if (i + 1 < len && array[i + 1] > array[i]) {
//         i = i + 1;
//       }
//       // 下沉
//       if (array[i] > array[target]) {
//         [array[i], array[target]] = [array[target], array[i]]
//         target = i;
//       } else {
//         break;
//       }
//     }
//   }
    

function heapSort(arr){
  creatHeap(arr)
  for(let i=arr.length-1;i>0;i--){
    [arr[0],arr[i]] = [arr[i],arr[0]]
    adjust(arr,0,i)
  }
  return arr
}
function creatHeap(arr){
  let len = arr.length
  let start = parseInt(len/2)-1
  for(let i=start;i>=0;i--){
    adjust(arr,i,len)
  }
}

function adjust(arr,target,len){
  for(let i=target*2+1;i<len;i=i*2+1){
    if(arr[i+1]>arr[i] && i+1<len){
      i=i+1
    }
    if(arr[i]>arr[target]){
      [arr[i],arr[target]] = [arr[target],arr[i]]
      target = i
    }else{
      break;
    }
  }
}

var arr =  [1,2,4,3,67,23,1]
var newArr = heapSort(arr)
// console.log(newArr)
/*

  进程，能分配给处理器，处理器执行的实体；正在计算机执行的实例；
  是具有以下特征的执行单元：一组指令序列的执行，一个当前状态，和一些系统资源集
  一个进程拥有对资源的控制和所有权，这些资源包括内存，i/o资源和设备，文件。操作系统执行保护功能，保护各个进程
  发生不必要的资源冲突

  一个进程具有一个执行状态（运行和就绪），和一个分配的优先级，并且是由操作系统分配和调度的实体

  每个线程有线程执行状态，有未运行时的线程上下文；执行栈；每个线程的局部变量的静态储存空间；
  与进程内其他线程共享的对进程内存和资源的访问。
*/




var d = {
  value:4,
  next:null
}
var c = {
  value:3,
  next:d
}
var b = {
  value:2,
  next:c
}
var a = {
  value:1,
  next:b
}
var reverseList = function (head) {
  let currentNode = null;
  let headNode = head;
  while (head && head.next) {
    currentNode = head.next;
    head.next = currentNode.next;
    currentNode.next = headNode;
    headNode = currentNode;
  }
  return headNode;
};
// console.log(reverseList(a))
//a->b->c->d
//
function reverseList(head){
  let currentNode = null
  let headNode = head
  while(head && head.next){
    currentNode=head.next
    head.next = currentNode.next
    currentNode.next = headNode
    headNode = currentNode
  }
}

var s = new Array(100)
for(let i=0;i<100;i++){
  s.push(i)
}

// console.log(s)
s.sort((a,b)=>{
  let seq = Math.random()
  if(seq>0.5){
    return a-b
  }else{
    return b-a
  }
})
// console.log(s,'排序后')

var s = '中文89sdhd'
for(let i of s){
  // console.log(i)
}
// var new_str = s.repeat(2)
var ss = s.padEnd(12,'ab')
console.log(ss)