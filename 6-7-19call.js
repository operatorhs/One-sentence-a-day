// var foo = {
//     value: 'a'
// }

// function bar(name,age){
//     console.log(this.value,name,age)
// }

// bar.call(foo,'zs',24)


Function.prototype.call2 = function(context){
    var args = []
    context = context || window
    context.fn = this
    for(var i = 1; i < arguments.length; i++){
        args.push(arguments[i])
    }
    console.log('parsms',args)
//    let result =  eval('context.fn(...args)')
    let result = (function(){
        return context.fn(...args)
    }(...args))
    delete context.fn
    return result
}

var foo = {
    value: '这里是foo'
}

function bar(name,age){
    console.log(name,age,this.value)
    return {
        name,
        age,
        value: this.value
    }
}

console.log(bar.call2(foo,'zs',23))
