import React from "react"

import Layout from "../components/layout"

let contStyle =
	{position: "relative",
	overflow: "hidden",
	paddingTop: "56.25%",
	background: "black"
	};

let iframeStyle =
	{
	position: "absolute",
	top: "0",
	left: "0",
	width: "100%",
	height: "75%",
	border: "0",
	background: "black"
	};


const SecondPage = () => (
  <Layout>
    <div style={contStyle}>
      <iframe title="Sugma" style={iframeStyle} src="REPLACETHISSHIT" allowfullscreen>></iframe>
    </div>
  </Layout>
)

export default SecondPage
