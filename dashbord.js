const menuBtn=document.getElementById('menu-btn');
const sidemenu=document.querySelector('aside');
const closeBtn= document.getElementById('close-btn');
const themeToggler= document.querySelector('.theme-Toggler')

menuBtn.addEventListener('click', ()=>{
    sidemenu.style.display='block';
})
closeBtn.addEventListener('click',()=>{
    sidemenu.style.display='none'
})


themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
   
})
Orders.forEach(order => {
    const tr=document.createElement('tr');
    const trContent=`
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.shipping==='declined' ? 'danger' : order.shipping === 'pending' ? 'warning':'primary'}">${order.shipping}</td>
            <td class="primary">Details</td>
    `;
    tr.innerHTML= trContent;
    document.querySelector('table tbody').appendChild(tr)
})