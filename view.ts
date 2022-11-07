export default ({ l1, l2, l3, css }) => /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		${css}
	</style>
	<style>
		body {
			padding: 2vw;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}
		.l {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		.container {
			container-type: inline-size;
			width: 100%;
		}
		.container.large {
			grid-area: left-top/left-top/left-bottom/left-bottom;
		}
		.container.medium:nth-child(odd) {
			grid-area: right-top;
		}
		.container.medium:nth-child(even) {
			grid-area: right-bottom;
		}

		brick-teaser {
			display: block;
			box-shadow: 1px 2px 10px #ccc;
			border-radius: 2px;
			overflow: clip;
			height: 100%;
		}
		brick-teaser .body {
			padding: 0 0.5rem 0.5rem !important;
		}

		@media(min-width: 576px) {
				brick-teaser h2 {
					font-size: clamp(1rem, 5cqi, 1.5rem) !important;
				}
				.large brick-teaser h2 {
					font-size: clamp(1.5rem, 8cqi, 2.5rem) !important;
				}
			.l.t-1 {
				display: grid;
				grid-template-columns: 2fr 1fr;
				grid-template-areas:
					"left-top right-top"
					"left-bottom right-bottom";
			}
			.l.t-2 {
				flex-direction: row;
			}
			.l.t-3 {
				display: block;
			}
		}
	</style>
</head>
<body>
	<div class="l t-1">
		${l1}
	</div>
	<div class="l t-2">
		${l2}
	</div>
	<div class="l t-3">
		${l3}
	</div>
</body>
</html>
`;
