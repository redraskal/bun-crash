## Behavior on Bun canary:

```bash
bun index.ts
```

```bash
[ "\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<title>l", "</title>\n\t\t<link rel=\"stylesheet\" href=\"/css/style.css\" />\n\t</head>\n>"
]
[ "meow123" ]
```

Formatted output of [Hono's html middleware](https://github.com/honojs/hono/blob/aaa1c6d4b9747fd69b168b30e984b75e4da4b508/src/middleware/html/index.ts#L11):

```html
	<head>
		<meta charset="UTF-8" />
		<title>lmeow123</title>
		<link rel="stylesheet" href="/css/style.css" />
	</head>
>
```

## Expected behavior on 0.6.2:

```bash
./bun index.ts
```

```bash
[ "\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<title>", "</title>\n\t\t<link rel=\"stylesheet\" href=\"/css/style.css\" />\n\t</head>\n"
]
[ "meow123" ]
```

```html
	<head>
		<meta charset="UTF-8" />
		<title>meow123</title>
		<link rel="stylesheet" href="/css/style.css" />
	</head>
```

This project was created using `bun init` in bun v0.6.8. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
