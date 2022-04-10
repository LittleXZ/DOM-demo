window.jQuery = function (selector) {
    let elements  //提升
    if(typeof selector === "string"){
        elements = document.querySelectorAll(selector)  // *伪数组
    }else if(Array.isArray(selector)){
        elements = selector
    }

    return {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
        },
        find(selector){
            let arr = []
            for(let i=0;i <elements.length;i++){
                arr = arr.concat(Array.from(elements[i].querySelectorAll(selector)))
            }
            return jQuery(arr)  // *回调函数 创建一个新的选择器为当前元素
        }
    }
}

window.$ = window.jQuery

$('.test').find('.child').addClass('red') // 请确保这句话成功执行
