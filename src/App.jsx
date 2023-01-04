import {Button, Link, CustomRadioGroup} from './index.jsx';

export default function App() {

    return (
        <div style={{display: 'grid', gap: '1rem'}}>
            <Button/>
            <Link href="https://byjs.de" title="meh" text={`I'm a link`}/>
            <CustomRadioGroup />
        </div>
    );
}
