import { fireEvent, render, waitFor } from '@testing-library/react'
import Buscador from './Buscador';

const onBuscar = jest.fn();
const renderBuscador = () => {
    const component = render(<Buscador onBuscar={onBuscar} />);
    return component;
};

describe('<Buscador />', () => {
    test('Se debe renderizar el componente', async () => {
        const component = renderBuscador();
        expect(component.container).toBeInTheDocument();
    });

    test('No Se debe llamar a onBuscar cuando el usuario hace click en el boton buscar y el contenido es menor a tres caracteres', async () => {
        const component = renderBuscador();
        const button = component.getByRole('button');
        //component.debug();
        fireEvent.click(button);
        expect(onBuscar).not.toBeCalled();
    });

    test('Se debe llamar a onBuscar cuando el usuario hace click en el boton buscar con el parametro requerido', async () => {
        const component = renderBuscador();
        const button = component.getByRole('button');
        const input = component.getByRole('searchbox').querySelector('input');
        //component.debug();
        fireEvent.change(input, {target: {value: 'test'}});
        fireEvent.click(button);

        waitFor(() =>{
            expect(onBuscar).toBeCalledWith('test');
        });
    });
});
