import buttonStyleUrl from "./codes/button-style.svg?url";
import buttonVariantsUrl from "./codes/button-variants.svg?url";
import buttonResponsive from "./codes/button-responsive.svg?url";
import buttonCustom from "./codes/button-custom.svg?url";
import buttonComposed from "./codes/button-composed.svg?url";
import ssr from "./codes/ssr.svg?url";

import { Button, ButtonWithVariants, ComposedButton, StitchesLogo } from "./components";
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
        <Grid gridTemplateColumns="50% 50%" gridTemplateRows="100%">
          <Appear>
            <img src={buttonStyleUrl} alt="Button Usage Example" width="100%" />
          </Appear>

          <FlexBox flexDirection="column">
            <Appear>
              <Button css={{ width: 185 }}>Normal Button</Button>
            </Appear>
            <Appear>
              <Button css={{ marginTop: "16px", width: 185 }} className="custom-class">
                CustomCSS Button
              </Button>
            </Appear>
          </FlexBox>
        </Grid>
      </Slide>

      <Slide>
        <Grid width="100%" gridTemplateColumns="50% 50%" gridTemplateRows="100%" height="100%">
          <Appear>
            <img src={buttonVariantsUrl} alt="Button Usage Example" width="100%" />
          </Appear>
          <FlexBox flexDirection="column">
            <Appear>
              <ButtonWithVariants size="small" shape="round" css={{ width: 185 }}>
                Round Button
              </ButtonWithVariants>
            </Appear>
            <Appear>
              <ButtonWithVariants
                size="small"
                shape="square"
                css={{ marginTop: "16px", width: 185 }}
              >
                Square Button
              </ButtonWithVariants>
            </Appear>
            <Appear>
              <ButtonWithVariants size="big" shape="square" css={{ marginTop: "16px", width: 185 }}>
                Big Round Button
              </ButtonWithVariants>
            </Appear>
          </FlexBox>
        </Grid>
      </Slide>

      <Slide>
        <Grid width="100%" gridTemplateColumns="50% 50%" gridTemplateRows="100%" height="100%">
          <Appear>
            <img src={buttonResponsive} alt="Button Usage Example" width="100%" />
          </Appear>
          <FlexBox flexDirection="column">
            <Appear>
              <ButtonWithVariants
                shape={{
                  "@bp3": "round",
                  "@bp4": "square",
                }}
                css={{ width: 185 }}
              >
                Square on big
              </ButtonWithVariants>
            </Appear>
            <Appear>
              <ButtonWithVariants
                size={{
                  "@bp3": "small",
                  "@bp4": "big",
                }}
                css={{ marginTop: "16px", width: 185 }}
              >
                Big on big
              </ButtonWithVariants>
            </Appear>
          </FlexBox>
        </Grid>
      </Slide>

      <Slide>
        <Grid width="100%" gridTemplateColumns="50% 50%" gridTemplateRows="100%" height="100%">
          <Appear>
            <img
              src={buttonCustom}
              alt="Button Usage Example"
              height="100%"
              style={{ maxWidth: "100%" }}
            />
          </Appear>
          <FlexBox flexDirection="column">
            <Appear>
              <ButtonWithVariants
                size="small"
                css={{
                  $$shadow: "#E8FF63",
                  backgroundColor: "#0A0A0A",
                  color: "#FFF",
                  width: 185,
                }}
              >
                Custom Style
              </ButtonWithVariants>
            </Appear>
            <Appear>
              <ButtonWithVariants
                size="small"
                css={{
                  $$shadow: "$colors$green",
                  backgroundColor: "#0A0A0A",
                  color: "#FFF",
                  marginTop: "16px",
                  width: 185,
                }}
              >
                Token Usage
              </ButtonWithVariants>
            </Appear>
          </FlexBox>
        </Grid>
      </Slide>

      <Slide>
        <Grid width="100%" gridTemplateColumns="50% 50%" gridTemplateRows="100%" height="100%">
          <FlexBox flex={1} justifyContent="center" flexDirection="column">
            <Appear>
              <img src={buttonComposed} alt="Button Usage Example" width="100%" />
            </Appear>
          </FlexBox>
          <FlexBox flexDirection="column">
            <Appear>
              <ComposedButton>Composed Button</ComposedButton>
            </Appear>
          </FlexBox>
        </Grid>
      </Slide>

      <Slide>
        <FlexBox alignItems="flex-start" flexDirection="column">
          <Appear>
            <Heading margin="0px" fontSize="h1" textAlign="left">
              SSR
            </Heading>
          </Appear>
          <Appear>
            <Text margin="0px">
              You can get access to the CSS string by using the <b>getCssText</b> function.
            </Text>
          </Appear>
        </FlexBox>

        <FlexBox flex={1} alignItems="flex-start" flexDirection="column">
          <Appear>
            <img src={ssr} alt="SSR Usage Example" width="850px" />
          </Appear>
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;
