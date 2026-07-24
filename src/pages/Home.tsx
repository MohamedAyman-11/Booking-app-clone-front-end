import {Box, Container} from "@mui/material";
import Hero from "../components/layout/Hero.tsx";
import PropertyList from "../components/home/PropertyList.tsx";
import type {User} from "../interfaces";

interface Props {
  user: User
}

const Home = ({user}: Props) => {
  return (
    <Box>
      <Hero user={user}/>
      <Box sx={{py: '30px'}}>
        <Container maxWidth={'xl'}>
          <PropertyList/>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;