const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const monthYear = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const year = date.getFullYear();
const funcionario = prompt("Digite o nome do Funcionário:");
const cpf_number = cpf();
const modeloin = coletarmodelo();
const imeivalidado = coletarImei();
const objeto = {
  funcionario: funcionario,
  cpf: cpf_number,
  modelo: modeloin,
  imei: imeivalidado,
  modelodis: modeloin,
};
const main = `<img
src="https://www.alvoarlacteos.com.br/wp-content/uploads/2022/04/Landing-Page-Desktop.png"
alt="logo.alvoarLácteos"
style="width: 10rem;"
/>
<div class="main">
  <div class="Titulo">
    TERMO DE RESPONSABILIZAÇÃO PELA GUARDA E USO DE EQUIPAMENTO DE
    TRABALHO
  </div>

  <p style="text-align: justify;"> A <strong>ALVOAR LACTEOS NORDESTE S/A</strong>, nova denominação de BETÂNIA LÁCTEOS S/A, pessoa jurídica de direito privado, com
  matriz sediada na Rua Carlos Câmara, 1454, Jardim América, CEP: 60.425-810, Fortaleza – CE, inscrito no
  CNPJ nº 10.483.444/0001-89 e com filial sediada na RUA CARLOS CAMARA, nº 1454, bairro: JARDIM
  AMÉRICA, CEP: 60.425-810, cidade: FORTALEZA, inscrito no CNPJ nº 10.483.444/0001-89, entrega neste ato, o equipamento:
  <p style="border: 1px solid black; padding: 2px; text-align: center; margin-top: 10px; margin-bottom: 20px; margin-left: 50px; margin-right: 50px;">
      <b>Marca:</b> ${objeto.modelodis} </br>
      <b>IMEI:</b> ${objeto.imei} </br> 
  </p>
  <p style="text-align: justify;"> A Pessoa de nome <b>${objeto.funcionario}</b> portador do CPF/CNPJ <b>${objeto.cpf}</b>,
  doravante denominado simplesmente "<b>Usuário</b>" sob as seguintes condições:</p>
  <ol style="text-align: justify;">
  <li>
    O equipamento deverá ser utilizado ÚNICA e EXCLUSIVAMENTE a serviço da
    empresa tendo em vista a atividade a ser exercida pelo <b>Usuário</b>.
  </li>
  <li>
    O <b>Usuário</b> tem ciência que o equipamento contém dispositivo rastreador
    que poderá ser utilizado pela empresa a fim de localizar o
    equipamento.
  </li>
  <li>
    Ficará o <b>Usuário</b> responsável pelo uso e conservação do equipamento;
  </li>
  <li>
    O <b>Usuário</b> tem somente a POSSE do equipamento, tendo em vista o uso
    exclusivo desse para prestação de serviços profissionais, não sendo
    transferida a PROPRIEDADE do equipamento, restando terminantemente
    proibidos o empréstimo, aluguel ou cessão deste equipamento à
    terceiros
  </li>
  <li>
    Se o equipamento for danificado ou inutilizado por emprego inadequado,
    mau uso, negligência ou extravio do <b>Usuário</b> a empresa fornecerá outro
    equipamento e descontará o valor de um equipamento da mesma
    marca/modelo ou equivalente ao do fornecedor, procedimento com o qual
    o <b>Usuário</b> concorda expressamente.
  </li>
  <li>
    Em caso de dano ou extravio do equipamento o <b>Usuário</b> deverá comunicar
    imediatamente ao setor lotado e a área de T.I. da empresa.
  </li>
  <li>
    Ao término da prestação de serviço ou do contrato individual de
    trabalho, o <b>Usuário</b> compromete-se a devolver o equipamento em perfeito
    estado no mesmo dia em que for comunicado ou comunique seu
    desligamento, considerando o desgaste natural pelo uso normal do
    equipamento.
  </li>
  </ol>
  </br>
  <div class="devolucao" style="text-align: justify;" >
    <p style="text-align: justify;"> Fortaleza-Ce, ${day} de ${monthYear[month]} de ${year} </p></br>
    <div class="signature">
      <p>Nome do Responsável pelo equipamento </p>
    </div>
    <h4> Devolução:</h4> 

    <p style="margin-left: 0px; margin-right: 0px;">Atestamos que o bem foi devolvido em __________ de _______________ de __________, nas seguintes condições: </p>

    <p style="text-align: justify; text-align: center;">(  &nbsp;  ) Em perfeito estado	(  &nbsp;  ) Apresentando defeito	( &nbsp; ) Faltando peças/ acessórios. </p><br>
    <div class="signature">
      <p>Nome do Responsável pelo RECEBIMENTO do  equipamento </p>
    </div>
  </div>
</div>`;
document.getElementById("contexto").innerHTML = main;

function coletarImei() {
  let imei = prompt("Digite o IMEI do Dispositivo:");
  if (imei.length != 15 || imei === null || isNaN(imei)) {
    while (imei != 15) {
      alert(
        `ERRO - imei INVÁLIDO!! Ceritifique-se de digitar:\n
            1- Quinze digitos
  
        \n\n Tente novamente!`
      );
      imei = prompt("Digite o imei do Dispositivo:");
      if (imei.length === 15 && imei !== null && isNaN(imei) === false) {
        return imei;
      }
    }
  } else {
    return imei;
  }
}

function cpf() {
  let cpf = prompt("Digite o cpf do funcionario: (apenas números)");
  let newcpf = undefined;
  if (cpf.length != 11 || cpf === null || isNaN(cpf)) {
    while (true) {
      alert(
        `ERRO - CPF INVÁLIDO!! Ceritifique-se de digitar:\n
      1- Onze digitos
      2- Apenas números

      \n\n Tente novamente!`
      );
      cpf = prompt("Digite o cpf do funcionario:");
      if (cpf.length === 11 && cpf !== null && isNaN(cpf) === false) {
        newcpf = `${cpf.substring(0, 3)} . ${cpf.substring(
          3,
          6
        )} . ${cpf.substring(6, 9)} - ${cpf.substring(9, 11)} `;
        return newcpf;
      }
    }
  } else {
    newcpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
      6,
      9
    )}-${cpf.substring(9, 11)} `;
    return newcpf;
  }
}

function coletarmodelo() {
  let modeloin = prompt("Digite o modelo do dispositivo :");
  if (modeloin != null && modeloin != undefined) {
    return modeloin;
  } else {
    modeloin = prompt("Digite o modelo do dispositivo :");
  }
}
