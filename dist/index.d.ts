/// <reference types="react" />
import "./index.scss";
declare type switcherProps = {
    mode: string;
    themeSwitcher: Function;
};
declare const DayNightSwitcher: ({ mode, themeSwitcher }: switcherProps) => JSX.Element;
export default DayNightSwitcher;
