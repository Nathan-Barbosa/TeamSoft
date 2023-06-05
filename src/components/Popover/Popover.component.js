import { StyledPopover, PopoverHeader, PopoverBody, PopoverItemInfo } from './Popover.styles';

const Popover = ({show}) => {
  return (
    <StyledPopover className={show && "show"}>
      <PopoverHeader>
        <h4>Adicionado com Sucesso</h4>
      </PopoverHeader>
      <PopoverItemInfo>
        <h5>Oferta Cheddar Bacon</h5>
      </PopoverItemInfo>
      <PopoverBody>
        <div>
          <div>Ingredientes: </div>
          <ul>
            <li>1 Carne 250gr</li>
            <li>2 Queijo Cheddar</li>
            <li>1 Bacon</li>
            <li>Molho Especial</li>
          </ul>
        </div>
      </PopoverBody>
  </StyledPopover>
  )
}

export default Popover;

