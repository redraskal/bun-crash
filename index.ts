function test(value: TemplateStringsArray) {
    return new String(value)
}

// works
test`ok`
// @ts-ignore
test(`
    ok
`)

// below lines will crash bun
test`
    ok
`
