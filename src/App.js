import {
    AboutSection,
    AchievementsSection,
    Header,
    IntroSection
} from "./Components";

export default function App() {
    return (
        <div className="App">
            <Header />
            <IntroSection />
            <AchievementsSection />
            <AboutSection />
        </div>
    );
}