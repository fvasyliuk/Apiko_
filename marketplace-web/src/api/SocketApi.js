import socket from 'socket.io-client';

class SocketApi {
    init(token) {
        this.socket = socket('/api', {
            query: {
                token,
            }
        })
    }

    handleMessages(handler) {
        this.socket.on('message', handler);
    }
}

export default new SocketApi();