//  ------------------------------------------------------------------
//  book.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config = {
	background: {
		color: "#333333"
		//url: "images/circles-background.png"
		//url: "images/reynold-background.jpg"
	},
	book: {
		font: "Georgia",
		startOnPage: 0,
		pageWidth: 768,
		pageHeight: 1024,
		previousPageButton: {
			url: "images/prev-page-button.png",
			x: 1,
			y: 50,
			width: "85px",
			height: "85px"
		},
		nextPageButton: {
			url: "images/next-page-button.png",
			horizontalAlign: "RIGHT",
			x: 1,
			y: 50,
			width: "85px",
			height: "85px"
		},
		pageBackground: {
			color: "#fefefe"
		},
		oddPageBackground: {
			color: "#fdfdfd"
		},
		evenPageBackground: {
			color: "#f9f9f9"
		},
		pageTurnDuration: 1000,
		pageSlideDuration: 200
	},
	cover: {
		background: {
			url: "images/main.png"
		},
		content: []
	},
	pages: []
};