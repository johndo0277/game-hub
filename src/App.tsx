import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
/* game-hub Project
1. using Chakras UI, vite@4.1.0 and TypeScript
2. axios module to connect the back end
*/

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main" `,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
