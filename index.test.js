const helloworld = require('./index.js');

const errorText = "Função aceita apenas string como argumento!"

test('Teste 01',()=>expect(helloworld()).toBe("Hello World!"))
test('Teste 02',()=>expect(helloworld(undefined)).toBe("Hello World!"))

test('Teste 03',()=>expect(helloworld("alguma coisa")).toBe("Hello alguma coisa!"))
test('Teste 04',()=>expect(helloworld("undefined")).toBe("Hello undefined!"))

test('Teste 05',()=>expect(helloworld([])).toBe(errorText))
test('Teste 06',()=>expect(helloworld([0])).toBe(errorText))
test('Teste 07',()=>expect(helloworld({})).toBe(errorText))
test('Teste 08',()=>expect(helloworld({chave:"valor"})).toBe(errorText))
test('Teste 09',()=>expect(helloworld(1)).toBe(errorText))
test('Teste 10',()=>expect(helloworld(NaN)).toBe(errorText))

