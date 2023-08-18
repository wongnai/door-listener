import onClose from '.'

describe('onClose()', () => {
    it('should bind all terminated event with callback', () => {
        const callback = jest.fn()

        onClose(callback)

        expect(callback).toBeCalledTimes(6)
        expect(callback).nthCalledWith(1, 'exit')
        expect(callback).nthCalledWith(2, 'SIGINT')
        expect(callback).nthCalledWith(3, 'SIGUSR1')
        expect(callback).nthCalledWith(4, 'SIGUSR2')
        expect(callback).nthCalledWith(5, 'uncaughtException')
        expect(callback).nthCalledWith(6, 'SIGTERM')
    })
})
