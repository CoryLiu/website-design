import '../styles/index.scss'

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset
  let className='small-nav'
  let list=document.body.classList
  if(scroll==0){
    list.remove(className)
  }else{
    list.add(className)
  }
})
