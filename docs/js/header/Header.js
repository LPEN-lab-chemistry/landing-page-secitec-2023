const headerNavOptions = [
    {href: "*", label: "Inicio"},
    {href: "/pages/page6.html", label: "Programação"},
    {href: "/pages/page5.html", label: "Semana da cultura"},
    {href: "*", label: "Inscrições"},
    {href: "*", label: "Eventos"},
    {href: "*", label: "Contato"},
]


class Header extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
        <header id="header">
            <div id="header-image-area">
                
            </div>
            <nav id="header-nav">
                ${this.renderHeaderNav()}
            </nav>
        </header>`;
    }

    renderHeaderNav() {
        return headerNavOptions.map(
            (navOption) => 
            `<a href="${navOption.href}">${navOption.label}</a>`
        ).join("");
    }

    connectedCallback() {
    }

}

customElements.define("header-component", Header);