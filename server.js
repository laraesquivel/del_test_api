import express from "express";

const app = express();
const PORT = 3001;

app.get("/produtos", (req, res) => {
  res.json([
    {
        "codigoproduto": 93474,
        "descricaoproduto": "CACAU PO 100% 500G GENUINE",
        "embalagem": "UNIDADE",
        "ultimopreco": "40.29",
        "quantidadefaturada": 22
    },
    {
        "codigoproduto": 105247,
        "descricaoproduto": "BATATA 9MM 2KG CG TUCHE",
        "embalagem": "PACOTE",
        "ultimopreco": "9.19",
        "quantidadefaturada": 70
    },
    {
        "codigoproduto": 83556,
        "descricaoproduto": "ARROZ ARBORIO P/RISOTO 1KG DI MATTEO",
        "embalagem": "PC",
        "ultimopreco": "15.4",
        "quantidadefaturada": 146
    },
    {
        "codigoproduto": 124016,
        "descricaoproduto": "ARROZ ARBORIO ITALIANO 1KG OPERA I",
        "embalagem": "UNIDADE",
        "ultimopreco": "18.88",
        "quantidadefaturada": 340
    },
    {
        "codigoproduto": 93259,
        "descricaoproduto": "ARROZ ARBORIO CULINARIA ITALIANA 1KG CAM",
        "embalagem": "UNIDADE",
        "ultimopreco": "22.92",
        "quantidadefaturada": 46
    },
    {
        "codigoproduto": 87374,
        "descricaoproduto": "QUEIJO PARM RALADO FINO 1KG SANTA MARTA",
        "embalagem": "UNIDADE",
        "ultimopreco": "29.9",
        "quantidadefaturada": 1
    },
    {
        "codigoproduto": 86837,
        "descricaoproduto": "MOLHO SHOYU 900ML PIRATA",
        "embalagem": "UNIDADE",
        "ultimopreco": "10.7",
        "quantidadefaturada": 10
    },
    {
        "codigoproduto": 93268,
        "descricaoproduto": "ARROZ ARBORIO 1KG MEU BIJU",
        "embalagem": "CX C/10 UN",
        "ultimopreco": "24.13",
        "quantidadefaturada": 75
    },
    {
        "codigoproduto": 85454,
        "descricaoproduto": "FERMENTO BIOLOGICO INST MD 500G FLEISC",
        "embalagem": "UNIDADE",
        "ultimopreco": "17.25",
        "quantidadefaturada": 4
    },
    {
        "codigoproduto": 134909,
        "descricaoproduto": "AMIDO DE MILHO 1KG FRITZ E FRIDA",
        "embalagem": "UNIDADE",
        "ultimopreco": "6.66",
        "quantidadefaturada": 5
    },
    {
        "codigoproduto": 159020,
        "descricaoproduto": "VG BROCOLIS PCT 2KG CG CONF NAC",
        "embalagem": "QUILO",
        "ultimopreco": "12.99",
        "quantidadefaturada": 170
    },
    {
        "codigoproduto": 98457,
        "descricaoproduto": "LINGUICA CALABRESA RETA 2,5KG RF REZENDE",
        "embalagem": "PACOTE",
        "ultimopreco": "20.99",
        "quantidadefaturada": 62
    },
    {
        "codigoproduto": 116391,
        "descricaoproduto": "LEITE UHT INTEG 1L ITALAC",
        "embalagem": "UNIDADE",
        "ultimopreco": "4.79",
        "quantidadefaturada": 36
    },
    {
        "codigoproduto": 87325,
        "descricaoproduto": "CACAU PO 100% ALCALINO 500G SICAO",
        "embalagem": "UN",
        "ultimopreco": "31",
        "quantidadefaturada": 8
    },
    {
        "codigoproduto": 91407,
        "descricaoproduto": "MAIONESE BAG 2,8KG HELLMANNS",
        "embalagem": "UNIDADE",
        "ultimopreco": "45.99",
        "quantidadefaturada": 14
    },
    {
        "codigoproduto": 84477,
        "descricaoproduto": "LEITE COCO VD 500ML VIVANDA",
        "embalagem": "UNIDADE",
        "ultimopreco": "7.89",
        "quantidadefaturada": 3
    },
    {
        "codigoproduto": 124042,
        "descricaoproduto": "CHOC AMARGO 70% GOTA 400G UNIQUE",
        "embalagem": "UNIDADE",
        "ultimopreco": "33.4",
        "quantidadefaturada": 6
    },
    {
        "codigoproduto": 103474,
        "descricaoproduto": "MILHO VERDE LATA 1,7KG TRADELLI",
        "embalagem": "UNIDADE",
        "ultimopreco": "26.89",
        "quantidadefaturada": 1
    }
    ].slice(0,10)
)});

app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}/produtos`);
});
