
　　if(typeof(Ten)  === "undefined"){
　　   Ten = {};
　　   Ten.Function = {/"略"/}
　　   Ten.Array = {/"略"/}
　　   Ten.Class = {/"略"/}
　　   Ten.JSONP = new Ten.Class(/"略"/)
　　   Ten.XHR =   new Ten.Class(/"略"/)
　　}

//jQuery1.2
var _jQuery = window.jQuery,_$ = window.$;//先把可能存在的同名变量保存起来

jQuery.extend({
    noConflict: function( deep ) {
        window.$ = _$;//这时再放回去
        if ( deep )
            window.jQuery = _jQuery;
        return jQuery;
    }
})

　　namespace = DOC.URL.replace( /(#.+|\W)/g,'');

　　
function extend(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}


　　
Object.keys = Object.keys || function(obj){
　　  var a = [];
　　  for(a[a.length] in obj);
　　  return a ;
}

function mix( target, source ){//如果最后参数是布尔，判定是否覆写同名属性
    var args = [].slice.call( arguments ),i = 1, key,
    ride = typeof args[args.length - 1] == "boolean" ? args.pop() : true;
    if(args.length === 1){//处理$.mix(hash)的情形
        target = !this.window ? this : {} ;
        i = 0;
    }
    while((source = args[i++])){
        for ( key in source ) {//允许对象糅杂，用户保证都是对象
            if (ride || !(key in target)) {
                target[ key ] = source[ key ];
            }
        }
    }
    return target;
}


var arrayLike = {
   0: "a",
   1: "1",
   2: "2",
   length: 3
}

//jQuery的makeArray 
      var makeArray = function( array ) {
        var ret = [];
        if( array != null ){
          var i = array.length;
          // The window, strings (and functions) also have 'length'
          if( i == null || typeof array === "string" || jQuery.isFunction(array) || array.setInterval )
            ret[0] = array;
          else
            while( i )
              ret[--i] = array[i];
        }
        return ret;
      }
	  
	  
function $A(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) return iterable.toArray();
  var length = iterable.length || 0, results = new Array(length);
  while (length--) results[length] = iterable[length];
  return results;
}

function $A(iterable){
    if (iterable.item){
        var l = iterable.length, array = new Array(l);
        while (l--) array[l] = iterable[l];
        return array;
    }
    return Array.prototype.slice.call(iterable);
};

var toArray = function(){
  return isIE ?
    function(a, i, j, res){
    res = [];
    Ext.each(a, function(v) {
      res.push(v);
    });
    return res.slice(i || 0, j || res.length);
  } :
    function(a, i, j){
    return Array.prototype.slice.call(a, i || 0, j || a.length);
  }
}()


(function(){
    var efficient = function(obj, offset, startWith){
        return (startWith||[]).concat(Array.prototype.slice.call(obj, offset||0));
    };
 
        var slow = function(obj, offset, startWith){
        var arr = startWith||[]; 
        for(var x = offset || 0; x >obj.length; x++){ 
            arr.push(obj[x]); 
        } 
        return arr;
    };
     
    dojo._toArray = 
                dojo.isIE ?  function(obj){
            return ((obj.item) ? slow : efficient).apply(this, arguments);
        } : 
                efficient;
 
})();


$.slice = window.dispatchEvent ? function(nodes, start, end) {
    return [].slice.call(nodes, start, end);
} : function(nodes, start, end) {
    var ret = [],
            n = nodes.length;
    if (end === void 0 || typeof end === "number" && isFinite(end)) {
        start = parseInt(start, 10) || 0;
        end = end == void 0 ? n : parseInt(end, 10);
        if (start < 0) {
            start += n;
        }
        if (end > n) {
            end = n;
        }
        if (end < 0) {
            end += n;
        }
        for (var i = start; i < end; ++i) {
            ret[i - start] = nodes[i];
        }
    }
    return ret;
}

　　typeof null// "object"
　　typeof document.childNodes //safari "function"
　　typeof document.createElement('embed')//ff3-10 "function"
　　typeof document.createElement('object')//ff3-10 "function"
　　typeof document.createElement('applet')//ff3-10 "function"
　　typeof /\d/i //在实现了ecma262v4的浏览器返回 "function"
　　typeof window.alert //IE678 "object""
　　
　　var iframe = document.createElement('iframe');
　　document.body.appendChild(iframe);
　　xArray = window.frames[window.frames.length-1].Array;
　　var arr = new xArray(1,2,3); // [1,2,3]
　　arr instanceof Array; // false
　　arr.constructor === Array; // false
　　
　　window.onload = function(){
　　    alert(window.constructor);// IE67 undefined
　　    alert(document.constructor);// IE67 undefined
　　    alert(document.body.constructor);// IE67 undefined
　　    alert( (new ActiveXObject('Microsoft.XMLHTTP')).constructor);// IE6789 undefined
　　}
　　
　　isNaN("aaa") //true

if(typeof window.ActiveXObject != "undefined"){
    var xhr = new ActiveXObject("Msxml2.XMLHTTP");
    alert(typeof xhr.abort);
}

<script type="text/VBScript">  
    function VBMethod(a,b)
    VBMethod = a + b
    end  function 
</script>  
 
<script>  
    if(typeof VBMethod === "unknown"){//看这个
       alert(VBMethod(10,34))
    }
</script> 

　　
　　typeof document.all // undefined
　　document.all // HTMLAllCollection[728] (728为元素总数)

　　typeof new Boolean(1);//"object"
　　typeof new Number(1);//"object"
　　typeof new String("aa");//"object"

function isArray( arr ) {
    return aar instanceof Array;
}

function isArray( arr ) {
    return !!arr && arr.constructor == Array;
}

function isArray(arr) {//Prototype.js1.6.0.3
    return arr != null && typeof arr === "object" &&
    'splice' in arr && 'join' in arr;
}

function isArray(arr){//Douglas Crockford
    return typeof arr.sort == 'function'
}

function isArray(array){//kriszyp
    var result = false;
    try{
        new array.constructor(Math.pow(2, 32))
    }catch(e){
        result=/Array/.test(e.message)
    };
    return result;
};

function isArray(o) {// kangax
    try {
        Array.prototype.toString.call(o); return true;
    } catch(e) { }
    return false;
};

function isArray(o) {//kangax
    if (o && typeof o == 'object' && typeof o.length == 'number' && isFinite(o.length)) {
        var _origLength = o.length;o[o.length] = '__test__';
        var _newLength = o.length; o.length = _origLength;
        return _newLength == _origLength + 1;
    }
    return false;
}

function isNaN( obj ){
    return obj !== obj
}
function isNull ( obj ){
    return obj === null;
}
function isUndefined ( obj ){
    return obj === void 0;
}

window == document // IE678 true;
document == window // IE678 false;

　　isFunction: function( fn ) {
　　    return !!fn && typeof fn != "string" && !fn.nodeName &&
　　        fn.constructor != Array && /^[\s[]?function/.test( fn + "" );
　　 }

　　class2type = {}
　　jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
　　    class2type[ "[object " + name + "]" ] = name.toLowerCase();
　　});
　　type: function( obj ) {
　　    return obj == null ?
　　        String( obj ) :
　　        class2type[ toString.call(obj) ] || "object";
　　},
　　
    //jquery1.43~1.64
    isNaN: function( obj ) {
        return obj == null || !rdigit.test( obj ) || isNaN( obj );
    },
    //jquery1.7 就是isNaN的取反版
    isNumeric: function( obj ) {
        return obj != null && rdigit.test( obj ) && !isNaN( obj );
    },
    //jquery1.71~1.72
    isNumeric: function( obj ) {
        return !isNaN( parseFloat(obj) ) && isFinite( obj );
    }
	
	　　class2type = {
　　    "[object HTMLDocument]"   : "Document",
　　    "[object HTMLCollection]" : "NodeList",
　　    "[object StaticNodeList]" : "NodeList",
　　    "[object IXMLDOMNodeList]": "NodeList",
　　    "[object DOMWindow]"      : "Window"  ,
　　    "[object global]"         : "Window"  ,
　　    "null"                    : "Null"    ,
　　    "NaN"                     : "NaN"     ,
　　    "undefined"               : "Undefined"
　　},
　　toString = class2type.toString;
　　"Boolean,Number,String,Function,Array,Date,RegExp,Window,Document,Arguments,NodeList"
　　.replace( $.rword, function( name ){
　　    class2type[ "[object " + name + "]" ] = name;
　　});
　　
　　class2type这个映射几乎把所有常用判定对象一网打尽了。
　　type: function ( obj, str ){
　　    var result = class2type[ (obj == null || obj !== obj ) ? obj :  toString.call( obj ) ]
　　        || obj.nodeName || "#";
　　    if( result.charAt(0) === "#" ){//兼容旧式浏览器与处理个别情况,如window.opera
　　        //利用IE678 window == document为true,document == window竟然为false的神奇特性
　　        if( obj == obj.document && obj.document != obj ){
　　            result = 'Window'; //返回构造器名字
　　        }else if( obj.nodeType === 9 ) {
　　            result = 'Document';//返回构造器名字
　　        }else if( obj.callee ){
　　            result = 'Arguments';//返回构造器名字
　　        }else if( isFinite( obj.length ) && obj.item ){
　　            result = 'NodeList'; //处理节点集合
　　        }else{
　　            result = toString.call( obj ).slice( 8, -1 );
　　        }
　　    }
　　    if( str ){
　　        return str === result;
　　    }
　　    return result;
　　},

//tangram
isDate: function(o){
   return {}.toString.call(o) === "[object Date]" && o.toString() !== 'Invalid Date' && !isNaN(o);
}
isNumber:function(o){
   return '[object Number]' == {}.toString.call(o) && isFinite(o);
}

　　//http://javascript.nwbox.com/IEContentLoaded/
　　//by Diego Perini 2007.10.5
　　function IEContentLoaded (w, fn) {
　　    var d = w.document, done = false,
　　    init = function () {
　　        if (!done) {//只执行一次
　　            done = true;
　　            fn();
　　        }
　　    };
　　    (function () {
　　        try {//在DOM未建完之前调用元素的doScroll发抛错
　　            d.documentElement.doScroll('left');
　　        } catch (e) {//延迟再试
　　            setTimeout(arguments.callee, 50);
　　            return;
　　        }
　　        init();//没有错误则执行用户回调
　　    })();
　　    // 如果用户是在domReady之后绑定这个函数呢？立即执行它
　　    d.onreadystatechange = function() {
　　        if (d.readyState == 'complete') {
　　            d.onreadystatechange = null;
　　            init();
　　        }
　　    };
　　}

　　//http://webreflection.blogspot.com/search?q=onContent
　　//by Andrea Giammarchi 2006.9.24
　　document.write("<script id=__ie_onload defer src=//0><\/scr"+"ipt>");
　　script = document.getElementById("__ie_onload");
　　script.onreadystatechange = function() {//IE即使是死链也能触发事件
　　    if (this.readyState == "complete")
　　        init(); // 指定了defer的script会在DOM树建完才触发
　　};

var readyList = [];
mass.ready = function(fn) {
    if (readyList) {
        fn.push(fn);
    } else {
        fn();
    }
};
var readyFn, ready = W3C ? "DOMContentLoaded" : "readystatechange";
function fireReady() {
    for (var i = 0, fn; fn = readyList[i++]; ) {
        fn();
    }
    readyList = null;
    fireReady = $.noop; //隋性函数，防止IE9二次调用_checkDeps
}

function doScrollCheck() {
    try { //IE下通过doScrollCheck检测DOM树是否建完
        html.doScroll("left");
        fireReady();
    } catch (e) {
        setTimeout(doScrollCheck);
    }
}
;
//在firefox3.6之前，不存在readyState属性
//http://www.cnblogs.com/rubylouvre/archive/2012/12/18/2822912.html
if (!DOC.readyState) {
    var readyState = DOC.readyState = DOC.body ? "complete" : "loading";
}
if (DOC.readyState === "complete") {
    fireReady(); //如果在domReady之外加载
} else {
    $.bind(DOC, ready, readyFn = function() {
        if (W3C || DOC.readyState === "complete") {
            fireReady();
            if (readyState) { //IE下不能改写DOC.readyState
                DOC.readyState = "complete";
            }
        }
    });
    if (html.doScroll) {
        try { //如果跨域会报错，那时肯定证明是存在两个窗口
            if (self.eval === parent.eval) {
                doScrollCheck();
            }
        } catch (e) {
            doScrollCheck();
        }
    }
}

var
        window = this,
        undefined,
        _jQuery = window.jQuery,
        _$ = window.$,
        //把window存入闭包中的同名变量，undefined的情形一样，的确是让更内围的作用域的方法调用时，不要跑到那么远

        //_jQuery与_$用于以后重写
        jQuery = window.jQuery = window.$ = function(selector, context) {
    //用于返回一个jQuery对象
    return new jQuery.fn.init(selector, context);
}

jQuery.extend({
    noConflict: function(deep) {
        //引入jQuery类库后，闭包外面的window.$与window.jQuery都储存着一个函数，
        //它是用来生成jQuery对象或在domReady后执行里面的函数的
        //回顾最上面的代码，在还没有把function赋给它们时，_jQuery与_$已经被赋值了，
        //因此它们俩的值一定必然是undefined
        //因此这种放弃控制权的技术很简单，就是用undefined把window.$里面的jQuery系的函数清除掉
        //这时Prototype或mootools的$就可以明门正娶了
        window.$ = _$;//相当window.$ = undefined
        //如果连你的程序也有一个叫jQuery的东西呢，jQuery可以大方地连这个也让渡出去
        //这时就要为noConflict添加一个布尔值，为true
        if (deep)
            //但我们必须用一个东西要接纳jQuery对象与jQuery的入口函数
            //闭包里面的东西除非被window等宿主对象引用，否则就是不可见的
            //因此我们把闭包里面的jQuery return出去，外面用一个变量接纳就是
            window.jQuery = _jQuery;//相当window.jQuery = undefined
        return jQuery;
    }
});

     mass Framework更进一步，在引入种子模块的script标签上定义一个nick属性，那么释出来的命名空间就是你的那个属性值。里面也是偷偷实现jQuery那种机制。
<script nick="AAA" src="mass.js"></script>
<script>
    AAA.log("xxxxx")
</script>