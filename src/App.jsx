import {Button, Link, CustomRadioGroup} from './index.jsx';

export default function App() {

    return (
        <div className="m-4 grid grid-cols-2 gap-4">
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Link href="https://byjs.de" title="meh" text={`I'm a link`}/>
            <CustomRadioGroup />
        </div>
    );
}
