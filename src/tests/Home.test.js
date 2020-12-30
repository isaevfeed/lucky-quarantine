import ReactDOM from 'react-dom';
import Home from '../components/Home';
import renderer from 'react-test-renderer';

const testEventsData = [
    {
        type: 'sleep',
        subtitle: 'Wake up',
        content: null,
        time: '8:00',
    },
];

const testImagesData = {
    'food': 'burger',
    'break': 'clock',
    'sleep': 'clock',
    'task': 'puzzle-pieces',
    'lesson': 'contract',
    'job' : 'salary',
};

const TestEventComponent = () => <Home items={testEventsData} images={testImagesData} />;

describe('Home', () => {
    it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TestEventComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('Snapshot', () => {
        const snap = renderer.create(<TestEventComponent />).toJSON();
        expect(snap).toMatchSnapshot();
    });
});