import ReactDOM from 'react-dom';
import Home from '../components/App/Home';
import {images} from '../reducers/images';
import renderer from 'react-test-renderer';

const testEventsData = [
    {
        type: 'sleep',
        subtitle: 'Wake up',
        content: null,
        time: '8:00',
    },
];

const TestEventComponent = () => <Home items={testEventsData} images={images} />;

it('Home (render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestEventComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Home Snapshot', () => {
    const snap = renderer.create(<TestEventComponent />).toJSON();
    expect(snap).toMatchSnapshot();
});