let butt = document.querySelector('.right_h_button')
    butt.addEventListener('mouseover', function(){
            butt.style.cssText = 'background: none; border: 1px solid #FF8E1E;'
    })
    butt.addEventListener('mouseout', function(){
        butt.style.cssText = 'background: opacity;'
    })

let butt1 = document.getElementsByClassName('doble_butt')
butt1[0].addEventListener('mouseover', function(){
        butt1[0].style.cssText = 'background: none; border: 1px solid #FF8E1E;'
})
butt1[0].addEventListener('mouseout', function(){
    butt1[0].style.cssText = 'background: opacity;'
})
butt1[1].addEventListener('mouseover', function(){
        butt1[1].style.cssText = 'background: none; border: 1px solid #FF8E1E;'
})
butt1[1].addEventListener('mouseout', function(){
    butt1[1].style.cssText = 'background: opacity;'
})

let number = 1

let g_butt = document.querySelector('.butt_down')
let g_body  = document.querySelector('.galliry_body')
let g_part  = document.querySelector('.hidden_part')
let main_text = document.querySelectorAll('.main_text')

console.log(main_text)

g_butt.addEventListener('click', function(){
    number += 1

    if(number % 2 == 0){
        g_part.style.cssText = 'width: 100%; height: auto;'
    }
    else{
        g_part.style.cssText = 'width: 0%; height: 0;'
    }
})