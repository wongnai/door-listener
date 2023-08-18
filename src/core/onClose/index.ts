const NODE_TERMINATION_EVENT_LIST = ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM']

function onClose(callback: () => void) {
    NODE_TERMINATION_EVENT_LIST.forEach(event => {
        process.on(event, callback)
    })
}

export default onClose
