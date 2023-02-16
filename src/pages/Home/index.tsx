import { Container } from '../../components/Container'
import { CardPerfil } from './components/CardPefil'
import {
  PostCards,
  ContainerPosts,
  PostTitle,
  SearchFormContainer,
  WrapperPublications,
} from './styles'

export function Home() {
  return (
    <Container>
      <CardPerfil />
      <WrapperPublications>
        <p>Publicações</p>
        <span>6 Publicações</span>
      </WrapperPublications>
      <SearchFormContainer>
        <input type="text" placeholder="Busque pelo post" />
        <button>Enviar</button>
      </SearchFormContainer>
      <ContainerPosts>
        <PostCards to="/Post">
          <PostTitle>
            <h1>Javascript data type and dasdjlisakd kldsak ldsadkjsad</h1>
            <span>Há 1 dia</span>
          </PostTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            tempora voluptatem saepe nesciunt ab modi accusamus pariatur,
            tempore maxime ipsum harum distinctio vel voluptate exercitationem
            et, omnis, labore voluptas mollitia?asdsla kdlçasddksa dk hd
            sadsahhdksla dkljkd sakdklsa kdskajdk asjdkl sakjdddmlsa djas
            djsadja sdjsa djkasdj kadjkdksa djkdjklsa jdkjadkjdkja kdjsad salç
            dsadlkasjd ç~kaldk~sa lkd lsado idosadk salkd
          </p>
        </PostCards>
        <PostCards to="/Post">
          <PostTitle>
            <h1>Javascript data type and dasdjlisakd kldsak ldsadkjsad</h1>
            <span>Há 1 dia</span>
          </PostTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            tempora voluptatem saepe nesciunt ab modi accusamus pariatur,
            tempore maxime ipsum harum distinctio vel voluptate exercitationem
            et, omnis, labore voluptas mollitia?
          </p>
        </PostCards>
        <PostCards to="Post">
          <PostTitle>
            <h1>Javascript data type and dasdjlisakd kldsak ldsadkjsad</h1>
            <span>Há 1 dia</span>
          </PostTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            tempora voluptatem saepe nesciunt ab modi accusamus pariatur,
            tempore maxime ipsum harum distinctio vel voluptate exercitationem
            et, omnis, labore voluptas mollitia?asdsla kdlçasddksa dk hd
            sadsahhdksla dkljkd sakdklsa kdskajdk asjdkl sakjdddmlsa djas
            djsadja sdjsa djkasdj kadjkdksa djkdjklsa jdkjadkjdkja kdjsad salç
            dsadlkasjd ç~kaldk~sa lkd lsado idosadk salkd
          </p>
        </PostCards>
        <PostCards to="Post">
          <PostTitle>
            <h1>Javascript data type and dasdjlisakd kldsak ldsadkjsad</h1>
            <span>Há 1 dia</span>
          </PostTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            tempora voluptatem saepe nesciunt ab modi accusamus pariatur,
            tempore maxime ipsum harum distinctio vel voluptate exercitationem
            et, omnis, labore voluptas mollitia?
          </p>
        </PostCards>
      </ContainerPosts>
    </Container>
  )
}
