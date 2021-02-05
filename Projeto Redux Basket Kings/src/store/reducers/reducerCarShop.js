const ESTADO_INICIAL = { 
    Jersey: {},
    feed: [
        {
            id: 1,
            color: "Loas Angeles Lakers",
            tamanho: "G",
            preco: "200,00"
        },
        {
            id: 2,
            color: "Golden State Warriors",
            tamanho: "G",
            preco: "200,00"
        },
        {
            id: 3,
            color: "Miami Heat",
            tamanho: "G",
            preco: "200,00"
        },
    ],
};

export default function sapatos(state= ESTADO_INICIAL, action){
if(action.type === "ADICIONAR_CARRINHO"){
    console.log(action)
    return {
        ...state,
        sapato: action.sapatos,
    };
}
    return state;
}
