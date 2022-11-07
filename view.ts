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
			padding: 0 2vw;
		}
		.l {
			display: flex;
			gap: 1rem;
		}
		.container {
			container-type: inline-size;
			width: 100%;
		}
		brick-teaser {
			display: block;
			margin: 1rem auto;
			box-shadow: 1px 2px 10px #ccc;
			border-radius: 2px;
			overflow: clip;
		}
		brick-teaser .body {
			padding: 0 0.5rem 0.5rem !important;
		}
		@container(max-width: 500px) {
			brick-teaser h2 {
				font-size: clamp(1rem, 7cqi, 1.5rem) !important;
			}
		}
		@container(max-width: 300px) {
			brick-teaser h2 {
				font-family: serif !important;
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
