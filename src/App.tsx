import buttonStyleUrl from "./codes/button-style.svg?url";
import { Button, StitchesLogo } from "./components";
import {
  Appear,
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  ListItem,
  OrderedList,
  Slide,
  Text,
} from "./spectacle";

const THEME = {
  fonts: {
    header: '"Raleway", sans-serif',
    text: '"Raleway", sans-serif',
  },
  colors: {
    primary: "#dbdbdb",
    secondary: "#fefefe",
    tertiary: "#151718",
    quaternary: "#7828b5",
    quinary: "#7828b5",
  },
  fontSizes: {
    h1: "76px",
    h2: "56px",
    h3: "44px",
    text: "28px",
    monospace: "20px",
  },
  space: [16, 24, 48],
};

function SpectacleTemplate() {
  return (
    <FlexBox justifyContent="flex-start" position="absolute" bottom={0} width={1}>
      <Box padding="0 2em">
        <FullScreen />
      </Box>
    </FlexBox>
  );
}

function App() {
  return (
    <Deck theme={THEME} template={SpectacleTemplate}>
      <Slide>
        <FlexBox height="100%">
          <StitchesLogo width={360} height={360} />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox
          height="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Heading margin="0px" fontSize="h1">
            What is Stitches?
          </Heading>

          <Appear>
            <Text>Variant-driven CSS-in-JS with near-zero runtime.</Text>
          </Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox
          height="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Heading margin="0px" fontSize="h1">
            Features
          </Heading>

          <OrderedList>
            <Appear>
              <ListItem>TypeScript support</ListItem>
            </Appear>
            <Appear>
              <ListItem>Built-in theming support</ListItem>
            </Appear>
            <Appear>
              <ListItem>Styling via className or styled component</ListItem>
            </Appear>
            <Appear>
              <ListItem>Variant support</ListItem>
            </Appear>
          </OrderedList>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox
          height="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Heading margin="0px" fontSize="h1">
            What about CSS Modules
          </Heading>

          <Grid
            width="100%"
            gridTemplateColumns="50% 50%"
            gridTemplateRows="min-content 1fr"
            height="100%"
          >
            <Appear priority={0}>
              <Heading margin="0px" fontSize="h2">
                Pros
              </Heading>
            </Appear>

            <Appear priority={4}>
              <Heading margin="0px" fontSize="h2">
                Cons
              </Heading>
            </Appear>

            <OrderedList>
              <Appear priority={1}>
                <ListItem>Styling via className</ListItem>
              </Appear>
              <Appear priority={2}>
                <ListItem>`.css` file extraction</ListItem>
              </Appear>
              <Appear priority={3}>
                <ListItem>Easy to debug</ListItem>
              </Appear>
            </OrderedList>

            <OrderedList>
              <Appear>
                <ListItem>No theming support</ListItem>
              </Appear>
              <Appear>
                <ListItem>No variant support</ListItem>
              </Appear>
              <Appear>
                <ListItem>No support for css prop</ListItem>
              </Appear>
              <Appear>
                <ListItem>No TypeScript support</ListItem>
              </Appear>
            </OrderedList>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox
          height="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Heading margin="0px" fontSize="h1">
            What about tailwind
          </Heading>

          <Grid
            width="100%"
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows="min-content 1fr"
            height="100%"
          >
            <Appear priority={0}>
              <Heading margin="0px" fontSize="h2">
                Pros
              </Heading>
            </Appear>

            <Appear priority={3}>
              <Heading margin="0px" fontSize="h2">
                Cons
              </Heading>
            </Appear>

            <OrderedList>
              <Appear priority={1}>
                <ListItem>Reusing class names reduces overall css</ListItem>
              </Appear>
              <Appear priority={2}>
                <ListItem>Well documented</ListItem>
              </Appear>
            </OrderedList>

            <OrderedList>
              <Appear>
                <ListItem>Must purge to remove unused styles</ListItem>
              </Appear>
              <Appear>
                <ListItem>Duplication</ListItem>
              </Appear>
              <Appear>
                <ListItem>Requires extensions to autocomplete values</ListItem>
              </Appear>
              <Appear>
                <ListItem>Hard to parse as it scales</ListItem>
              </Appear>
            </OrderedList>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide>
        <Grid width="100%" gridTemplateColumns="50% 50%" gridTemplateRows="100%" height="100%">
          <img src={buttonStyleUrl} alt="Button Usage Example" height="100%" />

          <FlexBox flexDirection="column">
            <Button css={{ width: 185 }}>Normal Button</Button>
            <Button css={{ marginTop: "16px", width: 185 }} className="custom-class">
              CustomCSS Button
            </Button>
          </FlexBox>
        </Grid>
      </Slide>
    </Deck>
  );
}

export default App;
