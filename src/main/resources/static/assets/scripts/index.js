const {createApp} = Vue;

const App = createApp({

    data(){
        return{
            timeOut:null

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
        }



    }
});
App.mount("#app")