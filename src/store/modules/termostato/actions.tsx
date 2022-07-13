
interface IAumentarTemperatura {
    type: 'aumentar',
    payload: number
}

interface IDiminuirTemperatura {
    type: 'diminuir',
    payload: number
}

export type Action = IAumentarTemperatura | IDiminuirTemperatura