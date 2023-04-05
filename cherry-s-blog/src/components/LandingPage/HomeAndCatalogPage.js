import { CatalogSection } from "../Catalog/CatalogSection";
import { Home } from "./Home";

export function HomeAndCatalogPage() {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor = '#C6CACB';

    return (
        <main>
            <Home />
            <CatalogSection />
        </main>
    );
}