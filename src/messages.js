import { toast } from 'mdbreact';

export function Messages(data, props, redirect = null) {
    let toastId = null

    if ( !toast.isActive(toastId) ) {

        switch(data.codigo) {
            case 200:
                toastId = toast.success(data.mensagem, {
                    autoClose: 3000
                })
            break

            case 400:
                treatMessage(data.mensagem, toastId)
            break

            case 500:
                toastId = toast.warning(data.mensagem, {
                    autoClose: 5000
                })
            break

            default:
                let mensagem = null

                if (data.mensagem === null) {
                    mensagem = 'Ocorreu um erro interno no servidor. Por favor avise seu administrador!'
                } else {
                    mensagem = data.mensagem
                }
                toastId = toast.error(mensagem, {
                    autoClose: 3000
                })
                
                localStorage.removeItem('api_token')
                localStorage.removeItem('id')
                localStorage.removeItem('email')
                localStorage.removeItem('nome')

                props.history.push("/")                    
            break
        }

        if (redirect !== null) {
            props.history.push(redirect)
        }
    }
}

export function treatMessage(responseMessage) {
    const messageData = JSON.parse(responseMessage)

    for (var i in messageData) {
        for (var message in messageData[i]) {
            toast.warning(messageData[i][message], {
                autoClose: 3000
            })
        }
    }
}