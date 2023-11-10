const {createApp} = Vue;

const App = createApp({

    data(){
        return{
            timeOut:null,
            showRegisterForm:false,
            showCart:false

        }
    },
    created(){

       
    },
    methods:{
        

        showProducts(){
            const item = document.querySelector(".menu_productos")
            item.classList.add("show--productos")
            clearTimeout(timeOut)
        },
        closeProducts(){
            timeOut=setTimeout(() => {
                const item = document.querySelector(".menu_productos");
                item.classList.remove("show--productos");
            },300)
        },
        showLogin(){
            const item = document.querySelector(".user_modal")
            item.classList.add("show--login")
            document.body.style.overflow = "hidden";
        },
        closeLogin(){
            const item = document.querySelector(".user_modal")
            item.classList.remove("show--login")  
            document.body.style.overflow = "";
            this.showRegisterForm = false
        },
        showRegister(){
            this.showRegisterForm = true
        },
        backToLogin(){
            this.showRegisterForm = false
        },
        showWappModal(){
            const item = document.querySelector(".wapp_modal")
            item.classList.add("show--wappmodal")
        },
        closeWappModal(){
            setTimeout(()=>{
                const item = document.querySelector(".wapp_modal")
                item.classList.remove("show--wappmodal")  
            },3000)
        },
        handleScroll(){
            if(window.scrollY >=275){
                const item = document.querySelector(".navbar")
                item.classList.add("sticky")
            }else{
                const item = document.querySelector(".navbar")
                item.classList.remove("sticky")
            }
        },
        showCarrito(){
            this.showCart = !this.showCart
            const item = document.querySelector(".carrito_container")
            item.classList.add("show--carrito")
        }
    },
    mounted(){
        window.addEventListener("scroll",this.handleScroll)
    }
});
App.mount("#app")