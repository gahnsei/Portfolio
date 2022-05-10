import ReactFullpage from "@fullpage/react-fullpage";
import App from "../App";
// const pluginWrapper = () => {
//   require("./statics/fullpage.scrollHorizontally.min");
// };

const FullPage = () => (
  <ReactFullpage
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={500}
    navigation={true}
    anchors={[`s1`, `s2`, `s3`, `s4`]}
    controlArrows={false}
    slidesNavigation={true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <App />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullPage;
