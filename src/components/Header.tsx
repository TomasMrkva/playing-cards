import './header.css';

interface HeaderProps {
    shuffleCards: () => void,
    sortCards: () => void,
    resetCards: () => void
}

export default function Header(props: HeaderProps) {
    return(
        <div id="header">
            <button onClick={props.shuffleCards}>SHUFFLE</button>
            <button onClick={props.sortCards}>SORT</button>
            <button id="reset-btn" onClick={props.resetCards}>RESET</button>
        </div>
    )
}