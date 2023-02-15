


const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right

const FRAME1 =
	d3.select("#vis1")
		.append("svg")
			.attr("height", FRAME_HEIGHT)
			.attr("width", FRAME_WIDTH)
			.attr("class", "frame");

const data = [55000, 48000, 27000, 66000, 90000];

const MAX_X = d3.max(data, (d) => {return d;});
console.log("Max x: " + MAX_X);

// scale function
const X_SCALE = d3.scaleLinear()
					.domain([0, (MAX_X + 10000)])
					.range([0, VIS_WIDTH]);


FRAME1.selectAll("points")
		.data(data)
		.enter()
		.append("circle")
			.attr("cx", MARGINS.left)
			.attr("cy", (d) => {
				return (X_SCALE(d) + MARGINS.top);
			})
			.attr("r", 10)
			.attr("class", "point");
			













