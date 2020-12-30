import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header', () => {
    it("render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it("Snapshot: ", () => {
        const header = renderer.create(<Header />).toJSON();
        expect(header).toMatchSnapshot();
    });
});