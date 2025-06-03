class MenuIdeario extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1><a href="index.html">Ideario</a></h1>
            <menu>
                <ul>
                    <li>
                        <a href="#" onclick="clickMenu()">
                            <i class="material-icons">menu</i>
                            <span>menu</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="material-symbols-outlined">person</span>
                            <span>conta</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="material-symbols-outlined" id="search">search</span>
                            <span id="search">buscar</span>
                        </a>
                    </li>
                </ul>
            </menu>
        </header>
        `;
    }
}

customElements.define('menu-ideario', MenuIdeario);