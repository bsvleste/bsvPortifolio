import logo from '../../../../assets/fotoBrunoPerfil.jpg'
import {
  ContainerHeader,
  ContainerInfo,
  ContainerPerfil,
  FotoPerfil,
} from './styles'
export function CardPerfil() {
  return (
    <ContainerPerfil>
      <FotoPerfil>
        <img src={logo} alt="" />
      </FotoPerfil>
      <ContainerInfo>
        <p>Olá, eu sou o</p>
        <ContainerHeader>
          <h1>Bruno de Souza Valeiro</h1>
        </ContainerHeader>
        <p>
          formado em Sistema de Informação e com habilidades em Produção
          Gráfica. Além disso, estou sempre buscando aprimorar minhas
          habilidades e conhecimentos, e sou aluno do curso da Rocketseat. Meu
          portfólio reflete minha paixão por tecnologia, design e criatividade.
          Aqui, você encontrará projetos que demonstrem minha experiência e
          habilidades em desenvolvimento web, design gráfico e produção de
          conteúdo visual. Sinta-se à vontade para explorar meus trabalhos e
          entrar em contato comigo caso tenha interesse em colaborar em algum
          projeto ou contratar meus serviços.
        </p>
      </ContainerInfo>
    </ContainerPerfil>
  )
}
