import React from "react"
let contStyle =
	{position: "relative",
	overflow: "hidden",
	paddingTop: "56.25%"
	};

let iframeStyle =
	{
	position: "absolute",
	top: "0",
	left: "0",
	width: "100%",
	height: "75%",
	border: "0",
	};


const SecondPage = () => (
    <div style={contStyle}>
      <iframe title="Sugma" style={iframeStyle} src="https://hqq.tv/player/embed_player.php?vid=R2p1cHJzUVVYdTZEMmY1YzZaL0V1Zz09&autoplay=no" allowfullscreen>></iframe>
    </div>
)

export default SecondPage
