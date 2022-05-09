import ReactFullpage from "@fullpage/react-fullpage";
import App from "../App";
// const pluginWrapper = () => {
//   require("./statics/fullpage.scrollHorizontally.min");
// };

const Fullpage = () => (
  <ReactFullpage
    // pluginWrapper={pluginWrapper}

    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    scrollHorizontally={true} /* Because we are using the extension */
    scrollHorizontallyKey={"YOUR KEY HERE"}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <App />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
