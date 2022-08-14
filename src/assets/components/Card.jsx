import PropType from 'prop-types'

export function Card ({imagem, nomePrato, descricao, valor, tempo}) {
  return (
    <div className='card'>
      <div className='foto'>
       <img src={imagem}></img>
      </div>
      <div className='infoCard'>
      <h3>{nomePrato}</h3>
      <p>{descricao}</p>
      <p>R$ {valor}</p>
      <p>{tempo}min</p>

      </div>
    </div>
  )
}

Card.propTypes = {
  imagem: PropType.string.isRequired,
  nomePrato: PropType.string.isRequired,
  descricao: PropType.string.isRequired,
  valor: PropType.number.isRequired,
  tempo: PropType.number.isRequired,
}