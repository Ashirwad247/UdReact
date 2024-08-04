import reactImg from "./assets/react-core-concepts.png";
import compImg from "./assets/components.png";
import TabButton from "./TabButton";
import { CORE_CONCEPTS } from "./data";
import { useState } from "react";
import { EXAMPLES } from "./data";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomText(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const d = reactDescriptions[genRandomText(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {d} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

function CoreConcept({ title, image, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  const [tabContent, setTabContent] = useState(null);
  console.log("hhee");
  function func(selectedButton) {
    setTabContent(selectedButton);
    console.log(tabContent);
    console.log("jsdlj");
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => {
              <CoreConcept key={index} {...conceptItem} />;
            })}
          </ul>
        </section>
        <section id="example">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => func("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => func("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => func("props")}>Props</TabButton>
            <TabButton onSelect={() => func("state")}>State</TabButton>
          </menu>

          {!tabContent ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
