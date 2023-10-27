import { GridItemType } from '../../Types/GridItemsType'
import * as C from './styles'
import Logo from '../../svgs/Logo Dev Cjr.png'
import {Items} from '../../Data/Items'

type Props = {
    item: GridItemType,
    onClick: ()=> void
}

export const GridItem = ({item, onClick}: Props) => {
    return(
        <C.Container 
        onClick={onClick} 
        shownBackground= {item.permanentShown || item.shown} >
            {item.permanentShown === false && item.shown === false &&
                <C.Icon src={Logo} alt='' opacity={.6}/>
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={Items[item.item].icon} alt='' />
            }
        </C.Container>
    )
}