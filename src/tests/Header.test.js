import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '../components/app/Header';
import {render} from '@testing-library/react';

it("Header (render without crashing): ", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("Header Snapshot: ", () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
});


it("For test", () => {
    const { container, getByText } = render(<Header />)
    // console.log(getByText("Lucky Quarantine"));
    expect(getByText("Lucky Quarantine")).toBeInTheDocument();
});