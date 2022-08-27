//Novo
const abreFormNovo = () => document.getElementById('containerNovoProduto').classList.add('active');
const fechaFormNovo = () => document.getElementById('containerNovoProduto').classList.remove('active');

document.getElementById('btnNovo').addEventListener('click', abreFormNovo);
document.getElementById('btnFechar1').addEventListener('click', fechaFormNovo);


//Editar
const abreFormEditar = () => document.getElementById('containerEditarProduto').classList.add('active');
const fechaFormEditar = () => document.getElementById('containerEditarProduto').classList.remove('active');

document.getElementById('btnEditar').addEventListener('click', abreFormEditar);
document.getElementById('btnFechar2').addEventListener('click', fechaFormEditar);