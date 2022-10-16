const ocultarContenido = Vue.createApp({
    data() {
    return {
        mostrar: true,
        mostrar2: false,
        mostrar3: false,
        mostrar4: false,
        }
    },

    methods: {
        mostrarCC(){
            if (this.mostrar==false)
            {
                this.mostrar=true
                this.mostrar2=false
                this.mostrar3=false
                this.mostrar4=false
            }
        },
        mostrarCAP(){
            if (this.mostrar2==false)
            {
                this.mostrar2=true
                this.mostrar=false
                this.mostrar3=false
                this.mostrar4=false
            } 
        },
        mostrarNH(){
            if (this.mostrar3==false)
            {
                this.mostrar3=true
                this.mostrar=false
                this.mostrar2=false
                this.mostrar4=false
            } 
        },
        mostrarCO(){
            if (this.mostrar4==false)
            {
                this.mostrar4=true
                this.mostrar=false
                this.mostrar2=false
                this.mostrar3=false
            } 
        }
    }
    }).mount("main")

/*
const ocultarContenido2 = Vue.createApp({
    data() {
    return {
        mostrar: true
        }
    },

    methods: {
        mostrarCAP(lugar){
            if (this.lugar==false)
            {
                this.lugar=true
            }
            else
            {
                this.lugar=false
            }
        }  
    }
    }).mount("main")
;
*/
