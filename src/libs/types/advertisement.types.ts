export interface AdvertisementTypes {
    id: number,
    name: string,
    img: string,
    price: {
        auto: number | null,
        moto: number | null,
        crossover: number | null,
        microbus: number | null,
        country: number | null
    },
    contact: {
        phone1: string | null,
        phone2: string | null,
        whatsapp: string | null
    },
    geo: string | null,
    comments: string | null
}

