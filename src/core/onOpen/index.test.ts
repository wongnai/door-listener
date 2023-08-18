import onOpen from '.'

describe('onOpen()', () => {
    it('should perform input callback', () => {
        const callback = jest.fn()

        onOpen(callback)

        expect(callback).toBeCalledTimes(1)
    })
})
