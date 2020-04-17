<template>
    <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Correo Electrónico
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" type="email" placeholder="ejemplo@email.com" required
                        v-model="email">
            </div>            
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Contraseña
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                       id="password" type="password" placeholder="******************" required
                       v-model="password">
                <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :class="{'opacity-50': canSubmit, 'cursor-not-allowed': canSubmit}" type="submit" :disabled="status">
                    Iniciar Sesión
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    No tengo cuenta
                </a>
            </div>
        </form>    
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            canSubmit: true,
            email: '',
            password: '',
            error: ''            
        }
    },
    methods: {
        enableSubmitBtn(){
            this.canSubmit = true
        },
        disableSubmitBtn(){
            this.canSubmit = false
        }
    },
    updated(){
        if (this.email === '' || this.password === ''){
            this.enableSubmitBtn();
        }else {
            this.disableSubmitBtn();
        } 
    }
}
</script>

