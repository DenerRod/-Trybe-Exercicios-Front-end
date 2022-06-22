const Redux = require('redux');

const fazerLogin = (email) => ({ // passa como parametro a chave que iremos alterar ou atualizar (action)
    type: 'LOGIN',
    email
});

const ESTADO_INICIAL = {
    login: false,
    email: "",
    };

const reducer = (state = ESTADO_INICIAL, fazerLogin) => {
   switch (fazerLogin.type) {
       case 'LOGIN':
           return { 
               ...state,
                login: !state.login,
                email: fazerLogin.email,
            };
        default:
            return state;    
   }
};

const store = Redux.createStore(reducer);

console.log(store.getState()); //{ login: false, email: '' } (estado antes do envio da action)

store.dispatch(fazerLogin('dener@dener.com')); //Envia a ação(action) de alteração ou mudança do estado pela função 'fazerLogin'

console.log((store.getState())); //{ login: true, email: 'DENINPIKA' } (estado depois do envio da action)