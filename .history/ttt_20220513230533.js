let str='12312 123'
let n = str.lastIndexOf(list[i]);
if (n >= 0 && n + list[i].length >= str.length) {
    str = str.substring(0, n) + "finish";
}

