import { html } from "hono/html";

const test = (strings: TemplateStringsArray, ...values: unknown[]) => {
	console.log(strings)
	console.log(values)
}

test`
	<head>
		<meta charset="UTF-8" />
		<title>${"meow123"}</title>
		<link rel="stylesheet" href="/css/style.css" />
	</head>
`

console.log(html`
	<head>
		<meta charset="UTF-8" />
		<title>${"meow123"}</title>
		<link rel="stylesheet" href="/css/style.css" />
	</head>
`)
