const sidebarOptions = [
    {href: "/pages/page6.html", label: "Semana do Ensino"},
    {href: "/pages/page5.html", label: "Semana do Técnico"},
    {href: "*", label: "Semana da Cultura"},
    {href: "*", label: "Seminario de extensão"},
    {href: "*", label: "Simposio de Pesquisa Inovação e Pós-graduação"},
    {href: "*", label: "Roda de Conversa Treinamento Profissional"},
]

class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
            <aside id="sidebar-container">
                <ul>
                    ${this.renderSidebarOptions()}
                </ul>
            </aside>`;
    }

    renderSidebarOptions() {
        return sidebarOptions.map(
            (option) => `
                <li><a href="#">${option.label}</a></li>
            `
        ).join("");
    }

    connectedCallback(){

    }
}

customElements.define("sidebar-component", Sidebar);