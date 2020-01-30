import React from "react"
let contStyle =
	{
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%"
	 };
let iframeStyle =
	{
	 position: "absolute",
	 top: "0",
	 left: "0",
	 width: "100%",
	 height: "100%",
	 border: "0",
	};

const SecondPage = () => (
    <div style={contStyle}>
      <iframe title="Sugma" style={iframeStyle} src="https://hqq.tv/player/embed_player.php?vid=Z1NyemoyMjR3SUZGMkxoemJ5T3hMUT09&autoplay=no" allowfullscreen>></iframe>
    </div>
)

export default SecondPage
