import logo from '../assets/ChefClaudeIcon.svg'
import '../index.css'

export default function Header() {
    return (
        <header>
            <img src={logo} className="header-logo" />
            <h1>AI Chef Helper</h1>
        </header>
    )
}
