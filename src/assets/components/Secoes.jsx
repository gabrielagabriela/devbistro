import React from 'react'
import { Card } from './Card'
import { Produtos } from './Produtos'

export const Secoes = ({titulo}) => {

  const pratos = Produtos.map((item)=> {
    return <Card
    key={item.id}
    imagem={item.imagem}
    nomePrato={item.nomePrato}
    descricao = {item.descricao}
    valor = {item.valor}
    tempo = {item.tempo}
    />
  })
  
  return (
    <section className='secao'>
      <h2>{titulo}</h2>
      <div className='secao-pratos'>
      {pratos}
      </div>
    </section>
  )
}

