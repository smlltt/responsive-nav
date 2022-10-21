import React from "react";
import { MainWrapper, Navbar, Sidebar } from "components";
import { Box, ThemeProvider } from "theme-ui";
import theme from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*  in a real case scenario, such a wrapper could be applied to a landing pare, for example*/}
      <MainWrapper>
        {/*  large screens */}
        <Navbar />
        {/*  small screens */}
        <Sidebar />
        <Box mt={100} px={[50, 50, 30]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu
          eros, mollis id arcu vel, cursus ultrices mauris. Morbi vitae
          tristique velit. Nulla vehicula blandit est at blandit. Ut auctor
          imperdiet tortor et ornare. Aliquam porta neque ut ante vehicula, quis
          commodo leo bibendum. Praesent non lobortis lorem. Morbi vitae sapien
          tincidunt, vestibulum sem ut, maximus enim. Aenean tempor in erat
          suscipit rutrum. Integer sit amet tellus non justo faucibus congue.
          Duis fermentum, ligula ac hendrerit varius, odio libero suscipit
          turpis, ut vehicula tortor ante nec orci. Nunc quis magna id lorem
          aliquet facilisis. Aliquam erat volutpat. Pellentesque volutpat id
          arcu ut placerat. Duis elementum lacus vitae massa finibus pretium.
          Praesent eu risus eu quam malesuada hendrerit. Maecenas mattis neque
          sed porta posuere. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Ut vestibulum porta dui,
          eu placerat nisl varius vitae. Sed sit amet vulputate nunc. Phasellus
          consectetur odio sit amet lectus vestibulum dapibus. Quisque at risus
          et orci mollis gravida. Nulla pulvinar neque mi, sed fringilla enim
          malesuada quis. Fusce aliquet vulputate sem, non pharetra sapien
          luctus eget.
        </Box>
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
