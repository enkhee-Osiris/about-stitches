import { FlexBox, SpectacleLogo, FullScreen, Slide, Deck, Box, Notes } from "./spectacle";

const THEME = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
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
          <SpectacleLogo size={500} />
        </FlexBox>
        <Notes>
          Spectacle supports notes per slide.
          <ol>
            <li>Notes can now be HTML markup!</li>
            <li>Lists can make it easier to make points.</li>
          </ol>
        </Notes>
      </Slide>
    </Deck>
  );
}

export default App;
