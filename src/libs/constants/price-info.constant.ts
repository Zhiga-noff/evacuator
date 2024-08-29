import {PriceInfoTypes} from "../types/price-info.types";

import icon1 from 'assets/img/advantages/gruz.png'
import icon2 from 'assets/img/advantages/probeg.png'
import icon3 from 'assets/img/advantages/equipments.png'
import icon4 from 'assets/img/advantages/complexity.png'

export const priceInfoConstant: PriceInfoTypes[] = [
    {
        image: icon1,
        title: 'Грузоподъемность эвакуатора',
        text: 'Чем мощнее эвакуатор, тем дороже обходится ее эксплуатация, тем внушительнее будет сумма к оплате эвакуации'
    }, {
        image: icon2,
        title: 'Предполагаемый пробег',
        text: 'Учитывается удаленность стоянки эвакуатора от местоположения ТС, расстояние между пунктами погрузки в Москве и выгрузки авто'
    }, {
        image: icon3,
        title: 'Дополнительное оборудование',
        text: 'При эвакуации машин с серьезными поломками перевозчики оснащают эвакуатор вспомогательными приспособлениями, что закономерно отражается на стоимости транспортировки.'
    }, {
        image: icon4,
        title: 'Уровень сложности',
        text: 'При значительном повреждении автомобиля погрузочно-разгрузочные работы усложняются. Они требуют подключения водителя-оператора высокой квалификации'
    }
]