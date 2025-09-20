import { cn } from '../css'
import { extractIds } from '../extractIds'
import { shortHash } from '../hash'
import { z, ze, zw } from '../log'
import { shuffle } from '../shuffle'

describe('cn', () => {
	it('tailwind-merge test', () => {
		expect(cn('px-2', 'px-4')).toBe('px-4')
		// eslint-disable-next-line no-constant-binary-expression
		expect(cn('block', false && 'hidden', 'text-red')).toBe(
			'block text-red'
		)
	})
})

/* ------------------------------ extractIds ------------------------------ */
describe('extractIds', () => {
	it('возвращает массив id', () => {
		const data = [{ id: 'a' }, { id: 'b' }]
		expect(extractIds(data)).toEqual(['a', 'b'])
	})

	it('пустой вход → пустой выход', () => {
		expect(extractIds([])).toEqual([])
	})
})

/* ----------------------------- shortHash -------------------------------- */
describe('shortHash', () => {
	it('всегда 10 символьная строка', () => {
		const h = shortHash()
		expect(h).toHaveLength(10)
		expect(typeof h).toBe('string')
	})

	it('два вызова дают разные значения', () => {
		expect(shortHash()).not.toBe(shortHash())
	})
})

/* ------------------------------- shuffle -------------------------------- */
describe('shuffle', () => {
	it('не меняет длину массива', () => {
		const arr = [1, 2, 3, 4, 5]
		expect(shuffle(arr)).toHaveLength(arr.length)
	})

	it('возвращает новый массив (не мутирует исходный)', () => {
		const arr = [1, 2, 3]
		const shuffled = shuffle(arr)
		expect(shuffled).not.toBe(arr)
	})
})

describe('ze / zw / z', () => {
	it('Вызываются без ошибок (хотя хочется туда их кинуть)', () => {
		expect(() => ze('err')).not.toThrow()
		expect(() => zw('warn')).not.toThrow()
		expect(() => z('log')).not.toThrow()
	})
})
