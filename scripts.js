// Seleciona os elementos do formulário.
const amount = document.getElementById("amount");

amount.oninput = () => {
    // 1. Loga o valor original do input antes de qualquer modificação.
    // console.log("Valor original (com letras/símbolos):", amount.value);

    let value = amount.value.replace(/\D/g, "");

    // 2. Loga o valor depois de remover tudo que não é número (a string limpa).
    // console.log("Valor após regex (somente números):", value);

    amount.value = value;
    
    // 3. Loga o valor final que foi atribuído de volta ao input.
    // console.log("Valor final no input:", amount.value);
    // console.log("---"); // Para separar as entradas no console.
};