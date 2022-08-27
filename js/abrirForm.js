//Novo
const abreFormAterarSenha = () => document.getElementById('containerForm').classList.add('active');
const fechaFormAterarSenha = () => document.getElementById('containerForm').classList.remove('active');

document.getElementById('btnAlterar').addEventListener('click', abreFormAterarSenha);
document.getElementById('btnFechar').addEventListener('click', fechaFormAterarSenha);